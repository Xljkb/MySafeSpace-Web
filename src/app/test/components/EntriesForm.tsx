// import React, { useState } from 'react';
// import { CSVLink } from 'react-csv';

// const EntriesForm = ({ onSave }) => {
//   const [entries, setEntries] = useState(Array(8).fill(''));
//   const [csvData, setCsvData] = useState([]);
//   const placeholders = [
//     "QIDS",
//     "DASS-21 Стресс",
//     "DASS-21 Тревога",
//     "DASS-21 Депрессия",
//     "PHQ-9",
//     "BAI",
//     "SAS",
//     "BDI"
//   ];

//   const handleChange = (value, index) => {
//     const newEntries = [...entries];
//     newEntries[index] = value;
//     setEntries(newEntries);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSave(entries);

//     // Создаем данные CSV
//     const headers = ["Test", "Result"];
//     const data = placeholders.map((placeholder, index) => [placeholder, entries[index]]);
//     const csv = [headers, ...data];

//     // Обновляем состояние csvData для скачивания
//     setCsvData(csv);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {entries.map((entry, index) => (
//           <input
//             key={index}
//             type="text"
//             value={entry}
//             onChange={(e) => handleChange(e.target.value, index)}
//             placeholder={placeholders[index]}
//             required
//           />
//         ))}
//         <button type="submit">Сохранить записи</button>
//       </form>
//       {csvData.length > 0 && (
//         <CSVLink data={csvData} filename={"results.csv"}>
//           Скачать результаты
//         </CSVLink>
//       )}
//     </div>
//   );
// };

// import React, { useState } from 'react';
// import * as XLSX from 'xlsx';

// const EntriesForm = ({ onSave }) => {
//   const [entries, setEntries] = useState(Array(8).fill(''));
//   const placeholders = [
//     "QIDS",
//     "Стресс (DASS-21)",
//     "Тревога (DASS-21)",
//     "Депрессия (DASS-21)",
//     "PHQ-9",
//     "BAI",
//     "SAS",
//     "BDI"
//   ];

//   const handleChange = (value, index) => {
//     const newEntries = [...entries];
//     newEntries[index] = value;
//     setEntries(newEntries);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     onSave(entries);

//     // Создаем данные XLSX с заголовками столбцов и значениями
//     const headers = placeholders;
//     const data = [headers, entries];

//     // Создание рабочей книги и листа
//     const worksheet = XLSX.utils.aoa_to_sheet(data);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, "Results");

//     // Генерация и скачивание XLSX файла
//     XLSX.writeFile(workbook, 'results.xlsx');
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {entries.map((entry, index) => (
//           <input
//             key={index}
//             type="text"
//             value={entry}
//             onChange={(e) => handleChange(e.target.value, index)}
//             placeholder={placeholders[index]}
//             required
//           />
//         ))}
//         <button type="submit">Сохранить записи</button>
//       </form>
//     </div>
//   );
// };

// export default EntriesForm;

import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const EntriesForm = ({ onSave }) => {
  const [entries, setEntries] = useState(Array(8).fill(''));
  const [result, setResult] = useState('');
  const placeholders = [
    "QIDS",
    "Стресс (DASS-21)",
    "Тревога (DASS-21)",
    "Депрессия (DASS-21)",
    "PHQ-9",
    "BAI",
    "SAS",
    "BDI"
  ];

  const handleChange = (value, index) => {
    const newEntries = [...entries];
    newEntries[index] = value;
    setEntries(newEntries);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    onSave(entries);

    // Создаем данные XLSX с заголовками столбцов и значениями
    const headers = placeholders;
    const data = [headers, entries];

    // Создание рабочей книги и листа
    const worksheet = XLSX.utils.aoa_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Results");

    // Генерация XLSX файла в виде массива
    const xlsxBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

    // Создание blob и formData для отправки на сервер
    const blob = new Blob([xlsxBuffer], { type: 'application/octet-stream' });
    const formData = new FormData();
    formData.append('file', blob, 'results.xlsx');

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Server response:', result);
      setResult(result.data);
    } catch (error) {
      console.error('Error:', error);
      setResult('Ошибка при отправке данных на сервер');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {entries.map((entry, index) => (
          <input
            key={index}
            type="text"
            value={entry}
            onChange={(e) => handleChange(e.target.value, index)}
            placeholder={placeholders[index]}
            required
          />
        ))}
        <button type="submit">Сохранить и отправить записи</button>
      </form>
      {result && (
        <div>Результат: {JSON.stringify(result)}</div>
      )}
    </div>
  );
};

export default EntriesForm;
