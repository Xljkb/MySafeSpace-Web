import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import axios from 'axios';
import FormData from 'form-data';

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = (req: NextApiRequest): Promise<{ fields: formidable.Fields; files: formidable.Files }> => {
  const form = formidable({ multiples: true });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ fields, files });
    });
  });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const { files } = await parseForm(req);
      const file = files.file as formidable.File;

      // Проверка наличия файла и его свойств
      if (!file || !file.filepath) {
        console.error('Файл или путь к файлу не определены');
        return res.status(500).json({ error: 'Файл или путь к файлу не определены' });
      }

      console.log('Файл получен:', file);

      // Проверка всех свойств файла
      console.log('Свойства файла:', {
        newFilename: file.newFilename,
        filepath: file.filepath,
        originalFilename: file.originalFilename,
        mimetype: file.mimetype,
        size: file.size,
      });

      const filePath = file.filepath;
      console.log('Путь к файлу:', filePath);

      const fileStream = fs.createReadStream(filePath);
      fileStream.on('error', (err) => {
        console.error('Ошибка при чтении файла:', err);
      });

      const formData = new FormData();
      formData.append('file', fileStream, 'results.xlsx');

      console.log('Отправка файла на сервер Flask...');
      const response = await axios.post('http://localhost:8000/predict', formData, {
        headers: {
          ...formData.getHeaders(),
        },
      });

      console.log('Ответ от сервера Flask:', response.data);

      // Возвращаем ответ обратно клиенту
      res.status(200).json({ data: response.data });
    } catch (error) {
      console.error('Ошибка при обработке файла:', error);
      if (error.response) {
        console.error('Ответ с ошибкой от сервера Flask:', error.response.data);
      }
      res.status(500).json({ error: 'Ошибка при обработке файла' });
    }
  } else {
    res.status(405).json({ error: 'Метод не разрешен' });
  }
};
