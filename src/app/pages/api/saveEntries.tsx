// // pages/api/saveEntries.js
// export default function handler(req, res) {
//     if (req.method === 'POST') {
//       // Здесь можно добавить логику для сохранения данных в базу данных
//       console.log(req.body); // Временно выводим данные для проверки
//       res.status(200).json({ message: 'Данные успешно сохранены' });
//     } else {
//       res.setHeader('Allow', ['POST']);
//       res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
//   }
  
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = JSON.stringify(req.body, null, 2);
    const filePath = path.join(process.cwd(), 'data.json');

    fs.writeFile(filePath, data, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Ошибка при записи файла' });
      }
      res.status(200).json({ message: 'Данные успешно сохранены в файл' });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
