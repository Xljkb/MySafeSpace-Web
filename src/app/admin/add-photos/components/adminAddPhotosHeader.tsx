"use client"

import Image from "next/image"

import ChevronLeft from "../../../../../public/assets/chevron-left.svg"
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

interface Option {
    name  : string
    value : string
}

const Chooser = (
    label : string, 
    onChange : (e : ChangeEvent<HTMLSelectElement>) => void,
    value : string,
    options : Option[]
) => {
    return (
        <div className="flex-col w-[232px]">
            <p className="pb-[4px]">{label}</p>
            <select onChange={e => onChange(e)} value={value}>
                <option value={""}>Не выбрано</option>
                { options.map((option) => (
                    <option value={option.value}>{option.name}</option>
                ))}
            </select>
        </div>
    )
} 

export default function Drafts() {
    const router = useRouter()
    const onBackClick = () => { router.back() }

    const [season, setSeason] = useState("")
    const [daytime, setDaytime] = useState("")

    const onSeasonChange  = ( e: ChangeEvent<HTMLSelectElement>) => { setSeason(e.target.value) }
    const onDaytimeChange = ( e: ChangeEvent<HTMLSelectElement>) => { setDaytime(e.target.value) }

    return (
        <div className="flex-col px-[108px] pt-[60px] mx-auto container">
            <div className="pb-[32px]">{BackButton(onBackClick)}</div>
            <div className="pb-[32px]">
                <div className="flex-col w-full">
                    <p className="pb-[16px] text-[16px] leading-[20px] font-medium">1. Массовый выбор параметров</p>
                    <div className="flex">
                        {Chooser(
                            "Время года", 
                            onSeasonChange, 
                            season, 
                            [{name: "Зима", value : "winter"}, {name: "Весна", value : "spring"}, {name: "Лето", value : "summer"}, {name: "Осень", value : "autumn"}]
                        )}
                        {Chooser(
                            "Время суток", 
                            onDaytimeChange, 
                            daytime, 
                            [{name: "День", value : "day"}, {name: "Ночь", value : "night"}]
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}