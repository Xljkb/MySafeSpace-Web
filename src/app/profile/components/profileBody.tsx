
"use client"

import { Line } from 'react-chartjs-2';
import { Chart, registerables} from 'chart.js';
import Image from "next/image"
import Avatar from "/public/assets/Avatar_Default.svg"
import ProfileChart from '../components/ProfileChart';
import Progress from "/public/assets/Прогресс.svg"
import Test from "/public/assets/testpass.svg"
import { useRouter } from "next/navigation"

const ProfilePage = () => {
  const router = useRouter()
  const handleCardClick = () => {
    console.log('Карточка нажата');
    router.push("/test")
  };
  
  return (
    <div className="flex-1 w-full items-center px-[41px] pb-[300px] pt-[50px] mx-auto justify-between container">
      <main className='flex'>
        <div>
        <section className="h-[200px] w-[200px] mr-[400px]">
          <Image src={Avatar} alt="Аватар пользователя" />
        </section>
        <section className="user-info mb-[20px]">
          <p className='H2 mb-[10px] mt-[20px]'>Петросян Борис</p>
          <p className='mt-[20px] mb-[8px]'>Специалист: Иванов И. А.</p>
          <p className='mb-[8px]'>Подписка: Активная</p>
          <p className='mb-[8px]'>Зарегистрирован: 12.02.2024</p>
        </section>
        </div>

        <div className='mt-[50px]'>
            <div className='flex justify-between mb-[70px]'>
              <button className="" onClick={handleCardClick}>
                <Image className="" src={Progress} alt="vid" />
               </button>
               <button className="" onClick={handleCardClick}>
                <Image className="" src={Test} alt="vid" />
               </button>
            </div>
            <ProfileChart/>
        </div>

      </main>
    </div>
  );
}

export default ProfilePage;

// pages/profile.js


// pages/profile.js

// pages/profile.js
// import { useRouter } from 'next/router';
// import React, { useEffect, useState } from 'react';
// import Image from 'next/image';
// import ProfileChart from '../components/ProfileChart';
// import Avatar from '/public/assets/Avatar_Default.svg';
// import Progress from '/public/assets/Прогресс.svg';
// import Test from '/public/assets/testpass.svg';

// const ProfilePage = () => {
//   const router = useRouter();
//   const [lastResult, setLastResult] = useState('');
//   const [savedEntries, setSavedEntries] = useState([]);

//   useEffect(() => {
//     if (router.isReady) {
//       const score = router.query.score ? `Последний результат: ${router.query.score}` : 'Нет последних результатов';
//       setLastResult(score);
//     }
//   }, [router.isReady, router.query.score]);

//   const handleCardClick = () => {
//     router.push("/test");
//   };

//   const handleSaveEntries = (entries) => {
//     setSavedEntries(entries);
//     // Здесь вы можете также сохранить данные на сервер или в локальное хранилище
//   };

//   return (
//     <div className="flex-1 w-full items-center px-[41px] pb-[300px] pt-[50px] mx-auto justify-between container">
//       <main className='flex'>
//         <div>
//           <section className="h-[200px] w-[200px] mr-[400px]">
//             <Image src={Avatar} alt="Аватар пользователя" width={200} height={200} />
//           </section>
//           <section className="user-info mb-[20px]">
//             <p className='H2 mb-[10px] mt-[20px]'>Петросян Борис</p>
//             <p className='mt-[20px] mb-[8px]'>Специалист: Иванов И. А.</p>
//             <p className='mb-[8px]'>Подписка: Активная</p>
//             <p className='mb-[8px]'>Зарегистрирован: 12.02.2024</p>
//             <p className='mt-[20px] mb-[8px]'>{lastResult}</p>
//           </section>
//         </div>

//         <div className='mt-[50px]'>
//           <div className='flex justify-between mb-[70px]'>
//             <button onClick={handleCardClick}>
//               <Image src={Progress} alt="Прогресс" width={100} height={100} />
//             </button>
//             <button onClick={handleCardClick}>
//               <Image src={Test} alt="Тест" width={100} height={100} />
//             </button>
//           </div>
//           <ProfileChart />
          
//           {savedEntries.length > 0 && (
//             <div>
//               <h2>Сохраненные записи:</h2>
//               <ul>
//                 {savedEntries.map((entry, index) => (
//                   <li key={index}>{entry}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ProfilePage;
