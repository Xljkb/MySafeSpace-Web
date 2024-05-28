// // pages/index.js
"use client"
// import React, { useState } from 'react';
// import RecordsForm from '../components/RecordForm';
// import RecordsList from '../components/RecordList';
// import Test from '../components/Testing';

// const Home = () => {
//   const [records, setRecords] = useState([]);

//   const addRecord = (newRecord) => {
//     if (records.length < 8) {
//       setRecords([...records, newRecord]);
//     } else {
//       alert('Максимальное количество записей — 8');
//     }
//   };

//   const saveRecords = async () => {
//     const response = await fetch('/api/records', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(records)
//     });
//     const data = await response.json();
//     alert(data.message);
//   };

//   return (
//     <div>
//       <h1>Управление записями</h1>
//       <RecordsForm onAddRecord={addRecord} />
//       <RecordsList records={records} />
//       <button onClick={saveRecords} disabled={records.length === 0}>Сохранить записи</button>
//       <Test/>
//     </div>
    
//   );
// };

// export default Home;

// pages/index.js

import React from 'react';
import EntriesForm from '../components/EntriesForm';
import Test from './Testing';

const HomePage = () => {
  // Функция для обработки сохранения данных
  const saveEntries = async (entries) => {
    const response = await fetch('/api/saveEntries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(entries)
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <div className="flex-1 w-full items-center px-[41px] pb-[300px] pt-[50px] mx-auto justify-between container">
      <main className=''>
        <div className='mb-[50px]'>
          <h1>Добавление результатов</h1>
          <EntriesForm onSave={saveEntries} />
         </div>
        <Test/>
      </main>
    </div>
  );
};

export default HomePage;
