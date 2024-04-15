"use client"

import Image from "next/image"

import ChevronLeft from "../../../../../public/assets/chevron-left.svg"
import ChevronRight from "../../../../../public/assets/chevron-right.svg"
import { useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react"
import { logValue } from "@/app/components/actions"

const BackButton = (onClick : () => void) => {
    return (
        <button onClick={onClick} className="flex px-[15px] py-[4px] gap-x-[10px] border border-1 border-[#D9D9D9] items-center justify-center">
            <Image src={ChevronLeft} alt="back" className="w-[14px] h-[14px]"/>
            <p className="text-[14px] leading-[22px]">Назад</p>
        </button>
    )
}

const PreviousImage = (onClick : () => void) => {
    return (
        <button onClick={onClick} className="flex px-[15px] py-[4px] gap-x-[10px] border border-1 border-[#D9D9D9] items-center justify-center">
            <Image src={ChevronLeft} alt="back" className="w-[14px] h-[14px]"/>
            <p className="text-[14px] leading-[22px]">Предыдущая</p>
        </button>
    )
}

const NextImage = (onClick : () => void) => {
    return (
        <button onClick={onClick} className="flex px-[15px] py-[4px] gap-x-[10px] border border-1 border-[#D9D9D9] items-center justify-center">
            <Image src={ChevronRight} alt="back" className="w-[14px] h-[14px]"/>
            <p className="text-[14px] leading-[22px]">Следующая</p>
        </button>
    )
}

interface Option {
    name  : string
    value : string
}

export default function AddPhotosHeader() {
    const router = useRouter()
    const onBackClick = () => { router.back() }

    return (
        <div className="flex-col px-[108px] pt-[60px] mx-auto container">
            <div className="head-bar">
                <div className="pb-[32px]">{BackButton(onBackClick)}</div>
                    <div className="right-buttons">
                    <div className="pb-[32px] mr-[20px]">{PreviousImage(onBackClick)}</div>
                    <div className="pb-[32px]">{NextImage(onBackClick)}</div>
                    </div>
                </div>
        </div>
        
    )
}

{/* <div className="flex-col px-[108px] pt-[60px] mx-auto container">
            <div className="bottom-bar">
                <div className="pb-[32px]">{BackButton(onBackClick)}</div>
                    <div className="right-buttons">
                        <button className="button bg-[#FF4D4F] text-[#ffffff]">Удалить все</button>
                        <button className="button">Сохранить черновик</button>
                        <button className="button">Опубликовать всё</button>
                    </div>
                </div>
        </div> */}

{/* <div className="self-center pl-[16px] ">
<button onClick={() => router.push(`/image/?url=${images[decrementIdx()].url}&idx=${decrementIdx()}`)} className="bg-[#FFCF08] p-[16px] rounded-[12px] opacity-40">
    <Image src={ChevronLeft} alt="chevron left"/>
</button>
</div> */}