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
              title="Смысл жизни: нужно ли его искать"
              imageUrl="https://uploads.yasno.live/cdn-cgi/image/format=auto,quality=85,fit=contain,dpr=2,width=730/uploads/post_image-image/eN9Bf2Ov/%D0%A1%D0%BC%D1%8B%D1%81%D0%BB_%D0%B6%D0%B8%D0%B7%D0%BD%D0%B8__%D0%BD%D1%83%D0%B6%D0%BD%D0%BE_%D0%BB%D0%B8_%D0%B5%D0%B3%D0%BE_%D0%B8%D1%81%D0%BA%D0%B0%D1%82%D1%8C__%D0%B1%D0%BB%D0%BE%D0%B3_2.png"
              onClick={handleCardClick}
            />
            <PhotoCard
              title="Что стоит за обидой?"
              imageUrl="https://uploads.yasno.live/cdn-cgi/image/format=auto,quality=85,fit=contain,dpr=2,width=730/uploads/post_image-image/8vqGfaYo/Frame_6__1_.png"
              onClick={handleCardClick}
            />
            <PhotoCard
              title="Семья как система"
              imageUrl="https://uploads.yasno.live/cdn-cgi/image/format=auto,quality=85,fit=contain,dpr=2,width=730/uploads/post_image-image/no8RfLDv/8_%D1%81%D1%82%D0%B0%D0%B4%D0%B8%D0%B8%CC%86-1.png"
              onClick={handleCardClick}
            />
          </div>
        </div>
        <div id="Container" className="mb-[40px]">
          <div className="flex">
            <h1 className="H2 mb-[20px]">Статьи о психологии</h1>
          </div>
          {/* Контейнер для центрирования карточек на странице */}
          <div style={{ display: 'flex', justifyContent: 'flex-start', flexWrap: 'wrap', padding: '0'}}>
            <PhotoCard
              title="Почему мы боимся любить?"
              imageUrl="https://uploads.yasno.live/cdn-cgi/image/format=auto,quality=85,fit=contain,dpr=2,width=730/uploads/post_image-image/4v7OfEev/%D1%81%D0%B5%D0%BC%D1%8C%D1%8F2.jpg"
              onClick={handleCardClick}
            />
            <PhotoCard
              title="Почему мы перестаем друг друга любить"
              imageUrl="https://uploads.yasno.live/cdn-cgi/image/format=auto,quality=85,fit=contain,dpr=2,width=730/uploads/post_image-image/Kv4lf1Ev/%D0%9F%D0%BE%D1%87%D0%B5%D0%BC%D1%83_%D0%BC%D1%8B_%D0%BF%D0%B5%D1%80%D0%B5%D1%81%D1%82%D0%B0%D0%B5%D0%BC_%D0%B4%D1%80%D1%83%D0%B3_%D0%B4%D1%80%D1%83%D0%B3%D0%B0_%D0%BB%D1%8E%D0%B1%D0%B8%D1%82%D1%8C_%D0%B1%D0%BB%D0%BE%D0%B3_1.png"
              onClick={handleCardClick}
            />
            <PhotoCard
              title="Как мы выбираем партнеров"
              imageUrl="https://uploads.yasno.live/cdn-cgi/image/format=auto,quality=85,fit=contain,dpr=2,width=730/uploads/post_image-image/3QWwfEjQ/%D0%9A%D0%B0%D0%BA_%D0%BC%D1%8B_%D0%B2%D1%8B%D0%B1%D0%B8%D1%80%D0%B0%D0%B5%D0%BC_%D0%BF%D0%B0%D1%80%D1%82%D0%BD%D0%B5%D1%80%D0%BE%D0%B2.jpg"
              onClick={handleCardClick}
            />
            <PhotoCard
              title="Зрелая зависимость"
              imageUrl="https://uploads.yasno.live/cdn-cgi/image/format=auto,quality=85,fit=contain,dpr=2,width=730/uploads/post_image-image/7oK1fqDv/Frame_20.png"
              onClick={handleCardClick}
            />
            <PhotoCard
              title="Существуют ли идеальные пары?"
              imageUrl="https://uploads.yasno.live/cdn-cgi/image/format=auto,quality=85,fit=contain,dpr=2,width=730/uploads/post_image-image/WN19f5PN/%D0%B8%D0%B4%D0%B5%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5_%D0%B1%D0%BB%D0%BE%D0%B3_2.png"
              onClick={handleCardClick}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;

//https://sun1-89.userapi.com/impg/n0zFxJN3xRwL6JZcoipndNgitLeIYIPGTWU8wg/0nAxv14cQbQ.jpg?size=1600x1067&quality=96&sign=4057aa38003bfe07f2ae928ad7b5a477&type=album