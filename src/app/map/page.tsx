"use client"

import Map from "./components/DynamicMap"
import { useSearchParams } from "next/navigation"
import { Coords } from "./components/Map"
import Image from "next/image"
import ChevronLeft from "../../../public/assets/chevron-left.svg"
import { useRouter } from "next/navigation"


const BackButton = (onClick : () => void) => {
    return (
        <button onClick={onClick} className="flex px-[15px] py-[4px] mx-2 my-2 gap-x-[10px] rounded-[8px] border border-1 bg-[#747474] border-[#2F2F2F] items-center justify-center">
            <Image src={ChevronLeft} alt="back" className="w-[14px] h-[14px]"/>
            <p className="text-[14px] leading-[22px]">Назад</p>
        </button>
    )
}

export default function MapView() {
    const searchParams = useSearchParams()
    const Coords : Coords = {
        lat : Number(searchParams.get('lat')),
        long : Number(searchParams.get('long')),
    }

    const router = useRouter()
    const onBack = () => {
        router.back()
    }

    return (
        <div className="flex-col w-full h-full absolute bg-[#1D1D1D]">
            {BackButton(() => onBack())}
            <Map {...Coords}/>
            <div className="flex-col w-full h-auto max-h-16-p min-h-8 relative top-[-30px] z-20 bg-[#1D1D1D]"/>
        </div>
    )
}