// pages/api/records.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      // Здесь мог бы быть код для сохранения данных в базу данных
      console.log(req.body); // Выводим полученные данные для проверки
      res.status(200).json({ message: 'Записи сохранены' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  