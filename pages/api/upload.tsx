import formidable from 'formidable';
import fs from 'fs';
import FormData from 'form-data';
import axios from 'axios';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'Error parsing the file' });
      }

      const file = files.file;

      const formData = new FormData();
      formData.append('file', fs.createReadStream(file.filepath));

      try {
        const response = await axios.post('http://localhost:5000/endpoint', formData, {
          headers: {
            ...formData.getHeaders(),
          },
        });

        return res.status(200).json({ data: response.data });
      } catch (error) {
        console.error('Error processing the file', error);
        return res.status(500).json({ error: 'Error processing the file' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
