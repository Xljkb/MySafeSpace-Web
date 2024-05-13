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

// Главная страница приложения
const HomePage: React.FC = () => {

  return (
    <>
      <main className="flex-1 w-full items-center px-[41px] pb-[300px] pt-[50px] mx-auto justify-between container">
        <div className="flex">
            <h1 className="H2 mb-[20px]">Смысл жизни: нужно ли его искать</h1>
          </div>
        <div>

        </div>
      </main>
    </>
  );
};

export default HomePage;