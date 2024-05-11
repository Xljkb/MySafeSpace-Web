"use client"

import Image from "next/image"

import Filters from "../../../public/assets/filters.svg"
import Vid from "/public/assets/vid.jpg"
import Photo from "/public/assets/camera.svg"
import { FormEvent, useRef, useState } from "react"
import Link from "next/link"


import { useRouter } from "next/navigation"
import React from 'react';
import PhotoCard from './PhotoCard';


// export default function Body() {
//     return (
//         <>  
//             {/* Компоненты сайта/ контенер */}
//             <main className="flex-1 w-full items-center px-[41px] pb-[300px] pt-[50px] mx-auto justify-between container">

//                 <div id="Container" className="mb-[40px]">
//                 <div className="flex">
//                     <h1 className="H2 mb-[20px]">Избраннное</h1>
//                 </div>
//                     <div className="flex-row h-full mx-auto container">
//                         <div className="flex flex-row relative"> 
//                             <a href="#" className="mr-[10px]"> 
//                                 <Image className="max-w-[200px] h-[300px] bg-black rounded-[12px]" src={Vid} alt="vid" />
//                             </a>
//                             <a href="#" className="mr-[10px]"> 
//                                 <Image className="max-w-[200px] h-[300px] bg-black rounded-[12px]" src={Vid} alt="vid" />
//                             </a>
//                             <a href="#"> 
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
            <h1 className="H2 mb-[20px]">Избранное</h1>
          </div>
          {/* Контейнер для центрирования карточек на странице */}
          <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', padding: '0'}}>
            <PhotoCard
              title="Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок"
              imageUrl="https://sun1-89.userapi.com/impg/n0zFxJN3xRwL6JZcoipndNgitLeIYIPGTWU8wg/0nAxv14cQbQ.jpg?size=1600x1067&quality=96&sign=4057aa38003bfe07f2ae928ad7b5a477&type=album"
              onClick={handleCardClick}
            />
            <PhotoCard
              title="Заголовок карточки"
              imageUrl="https://sun1-89.userapi.com/impg/n0zFxJN3xRwL6JZcoipndNgitLeIYIPGTWU8wg/0nAxv14cQbQ.jpg?size=1600x1067&quality=96&sign=4057aa38003bfe07f2ae928ad7b5a477&type=album"
              onClick={handleCardClick}
            />
            <PhotoCard
              title="Заголовок карточки"
              imageUrl="https://sun1-89.userapi.com/impg/n0zFxJN3xRwL6JZcoipndNgitLeIYIPGTWU8wg/0nAxv14cQbQ.jpg?size=1600x1067&quality=96&sign=4057aa38003bfe07f2ae928ad7b5a477&type=album"
              onClick={handleCardClick}
            />
            <PhotoCard
              title="Заголовок карточки"
              imageUrl="https://sun1-89.userapi.com/impg/n0zFxJN3xRwL6JZcoipndNgitLeIYIPGTWU8wg/0nAxv14cQbQ.jpg?size=1600x1067&quality=96&sign=4057aa38003bfe07f2ae928ad7b5a477&type=album"
              onClick={handleCardClick}
            />
            <PhotoCard
              title="Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок"
              imageUrl="https://sun1-89.userapi.com/impg/n0zFxJN3xRwL6JZcoipndNgitLeIYIPGTWU8wg/0nAxv14cQbQ.jpg?size=1600x1067&quality=96&sign=4057aa38003bfe07f2ae928ad7b5a477&type=album"
              onClick={handleCardClick}
            />
            <PhotoCard
              title="Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок"
              imageUrl="https://sun1-89.userapi.com/impg/n0zFxJN3xRwL6JZcoipndNgitLeIYIPGTWU8wg/0nAxv14cQbQ.jpg?size=1600x1067&quality=96&sign=4057aa38003bfe07f2ae928ad7b5a477&type=album"
              onClick={handleCardClick}
            />
            <PhotoCard
              title="Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок"
              imageUrl="https://sun1-16.userapi.com/impg/YkooogzL1b-XYzFuhR3w90bLvxPbgXhD210fnw/hGP_n-6qOPQ.jpg?size=1453x2160&quality=96&sign=c7ab0434acd5edde19ee6d597a6eebd1&type=album"
              onClick={handleCardClick}
            />
            
          </div>
        </div>
        <div id="Container" className="mb-[40px]">
          <div className="flex">
            <h1 className="H2 mb-[20px]">Примеры еще</h1>
          </div>
          {/* Контейнер для центрирования карточек на странице */}
          <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', padding: '0'}}>
            <PhotoCard
              title="Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок"
              imageUrl="https://sun1-89.userapi.com/impg/n0zFxJN3xRwL6JZcoipndNgitLeIYIPGTWU8wg/0nAxv14cQbQ.jpg?size=1600x1067&quality=96&sign=4057aa38003bfe07f2ae928ad7b5a477&type=album"
              onClick={handleCardClick}
            />
            <PhotoCard
              title="Заголовок карточки"
              imageUrl="https://sun1-89.userapi.com/impg/n0zFxJN3xRwL6JZcoipndNgitLeIYIPGTWU8wg/0nAxv14cQbQ.jpg?size=1600x1067&quality=96&sign=4057aa38003bfe07f2ae928ad7b5a477&type=album"
              onClick={handleCardClick}
            />
            <PhotoCard
              title="Заголовок карточки"
              imageUrl="https://sun1-89.userapi.com/impg/n0zFxJN3xRwL6JZcoipndNgitLeIYIPGTWU8wg/0nAxv14cQbQ.jpg?size=1600x1067&quality=96&sign=4057aa38003bfe07f2ae928ad7b5a477&type=album"
              onClick={handleCardClick}
            />
            <PhotoCard
              title="Заголовок карточки"
              imageUrl="https://sun1-89.userapi.com/impg/n0zFxJN3xRwL6JZcoipndNgitLeIYIPGTWU8wg/0nAxv14cQbQ.jpg?size=1600x1067&quality=96&sign=4057aa38003bfe07f2ae928ad7b5a477&type=album"
              onClick={handleCardClick}
            />
            <PhotoCard
              title="Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок Заголовок"
              imageUrl="https://sun1-89.userapi.com/impg/n0zFxJN3xRwL6JZcoipndNgitLeIYIPGTWU8wg/0nAxv14cQbQ.jpg?size=1600x1067&quality=96&sign=4057aa38003bfe07f2ae928ad7b5a477&type=album"
              onClick={handleCardClick}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;