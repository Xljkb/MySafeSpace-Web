// import Image from "next/image"

// import Filters from "../../../public/assets/filters.svg"
// import Vid from "/public/assets/vid.jpg"
// import Photo from "/public/assets/camera.svg"
// import { FormEvent, useRef, useState } from "react"
// import Link from "next/link"


// export default function Body() {
    
//     return (
//         <> 
//             <main className="flex-1 w-full items-center px-[41px] pb-[300px] pt-[50px] mx-auto justify-between container">
//                 <div id="Container" className="mb-[40px]">
//                     <div className="flex">
//                         <p className="H2 mb-[30px]">Избранное</p>
//                     </div>

//                     <div className=" flex-row h-full mx-auto container">{MainGallery(images)}</div>
//                 </div>

//                 <div id="Container" className="mb-[40px]">
//                     <div className="flex">
//                         <p className="H2 mb-[30px]">Как походы помогают разгрузиться</p>
//                     </div>
//                     <div className=" flex-row h-full mx-auto container">{MainGallery(images)}</div>
//                 </div>

//                 <div id="Container" className="mb-[40px]">
//                 <div className="flex">
//                     <p className="H2 mb-[30px]">Как походы помогают разгрузиться</p>
//                 </div>
//                     <div className="flex-row h-full mx-auto container">
//                         <div className="flex flex-row relative"> {/* Добавьте контейнер для фотографий */}
//                             <a href="#" className="mr-[10px]"> {/* Ссылка на первое изображение */}
//                                 <Image className="max-w-[200px] h-[300px] bg-black rounded-[12px]" src={Vid} alt="vid" />
//                             </a>
//                             <a href="#" className="mr-[10px]"> {/* Ссылка на второе изображение */}
//                                 <Image className="max-w-[200px] h-[300px] bg-black rounded-[12px]" src={Vid} alt="vid" />
//                             </a>
//                             <a href="#"> {/* Ссылка на третье изображение */}
//                                 <div className="absolute ml-[15px] mt-[20px]">Пример названия</div>
//                                 <Image className="max-w-[200px] h-[300px] bg-black rounded-[12px]" src={Vid} alt="vid" />
                                
                                 
//                             </a>
//                         </div>
//                     </div>
//                 </div>


//             </main>
//         </>
//     )
// }

"use client"

import Image from "next/image"

import Filters from "../../../public/assets/filters.svg"
import Vid from "/public/assets/vid.jpg"
import Photo from "/public/assets/camera.svg"
import { FormEvent, useRef, useState } from "react"
import Link from "next/link"
import ProgressButton from "/public/assets/Прогресс.svg"


import { useRouter } from "next/navigation"
import React from 'react';
import PillsCard from './MedicineCard';
import MedicineCard from '../components/MedicineCard';

// Главная страница приложения
const HomePage: React.FC = () => {
  // Обработчик клика для карточки
  const router = useRouter()
  const handleCardClick = () => {
    console.log('Карточка нажата');
    router.push("/")
  };

  return (
    <>
      <main className="flex-1 w-full items-center px-[41px] pb-[300px] pt-[50px] mx-auto justify-between container">

        <div id="Container" className="mb-[40px]">
          <div className="flex">
            <h1 className="H2 mb-[20px]">Мои медикаменты</h1>
          </div>
          {/* Контейнер для центрирования карточек на странице */}
          <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', padding: '0px', marginRight: '0'}}>
            
            <MedicineCard name="Лекарство #1" imageUrl="https://sun1-89.userapi.com/impg/n0zFxJN3xRwL6JZcoipndNgitLeIYIPGTWU8wg/0nAxv14cQbQ.jpg?size=1600x1067&quality=96&sign=4057aa38003bfe07f2ae928ad7b5a477&type=album" dosage="1 таблетка после завтрака" limit={1} />
            <MedicineCard name="Лекарство #2" imageUrl="https://sun1-89.userapi.com/impg/n0zFxJN3xRwL6JZcoipndNgitLeIYIPGTWU8wg/0nAxv14cQbQ.jpg?size=1600x1067&quality=96&sign=4057aa38003bfe07f2ae928ad7b5a477&type=album" dosage="3 таблетка после еды" limit={3} />
            <MedicineCard name="Лекарство #3" imageUrl="https://sun1-89.userapi.com/impg/n0zFxJN3xRwL6JZcoipndNgitLeIYIPGTWU8wg/0nAxv14cQbQ.jpg?size=1600x1067&quality=96&sign=4057aa38003bfe07f2ae928ad7b5a477&type=album" dosage="1 таблетка после 18:00" limit={1} />
            <MedicineCard name="Лекарство #4" imageUrl="https://sun1-89.userapi.com/impg/n0zFxJN3xRwL6JZcoipndNgitLeIYIPGTWU8wg/0nAxv14cQbQ.jpg?size=1600x1067&quality=96&sign=4057aa38003bfe07f2ae928ad7b5a477&type=album" dosage="4 таблетки каждые 3 часа" limit={4} />

          </div>
        </div>
     
      </main>
    </>
  );
};

export default HomePage;