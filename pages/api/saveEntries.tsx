import formidable from 'formidable';
import fs from 'fs';
import axios from 'axios';
import FormData from 'form-data';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

const parseForm = (req: NextApiRequest): Promise<formidable.Files> => {
  const form = formidable({ multiples: true });

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const files = await parseForm(req);
      const file = files.file as formidable.File;

      // Преобразуем SpooledTemporaryFile в обычный файл
      const filePath = file.filepath;
      const fileStream = fs.createReadStream(filePath);

      const formData = new FormData();
      formData.append('file', fileStream, 'results.xlsx');

      const response = await axios.post('http://localhost:8000/predict', formData, {
        headers: {
          ...formData.getHeaders(),
        },
      });

      return res.status(200).json({ data: response.data });
    } catch (error) {
      console.error('Error processing the file', error);
      return res.status(500).json({ error: 'Error processing the file' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
