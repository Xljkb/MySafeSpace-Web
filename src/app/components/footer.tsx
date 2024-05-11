"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

import Logo from "/public/assets/MySafeSpace.svg"
import Chevron from "../../../public/assets/chevron-down.svg"
import Dots from "../../../public/assets/dots-horizontal.svg"
import Search from "../../../public/assets/search_white.svg"
import RUS_Flag from "../../../public/assets/russian_flag.svg"
import Bell from "../../../public/assets/bell.svg"
import Profile from "../../../public/assets/profile.svg"


export default function AdminFooter() {
    const router = useRouter()
    const handleOnProfileClick = () => {
        router.push("/")
    }
    const handleOnDiaryClick = () => {
        router.push("/diary")
    }
    const handleOnProfClick = () => {
        router.push("/profile")
    }

    return (
        <nav className="flex w-full items-center">
            <div className="flex w-full items-center px-[41px] pb-[20px] pt-[50px]  mx-auto justify-between container">
                <div className="flex items-center">
                    <Image src={Logo} alt="Logo"/>
                </div>
                        
                <div className="flex pl-[48px] items-center gap-x-[20px]">

                    <div className="flex pl-[48px] items-center gap-x-[20px]">
                        <button className="flex gap-x-[8px] group" onClick={handleOnProfileClick}>
                            <p className="links1 group-hover:text-[#4c4c4c]">Главная</p>
                        </button>

                        <button className="flex gap-x-[8px] group" onClick={handleOnDiaryClick}>
                            <p className="links1 group-hover:text-[#4c4c4c]">Дневник</p>
                        </button>

                        {/* <button className="flex gap-x-[8px] group" onClick={handleOnProfileClick}>
                            <p className="links1 group-hover:text-[#4c4c4c]">Прогресc</p>
                        </button> */}
                    </div>
                    
                    <button className="flex gap-x-[8px] group" onClick={handleOnProfClick}>
                        {/* <Image src={Profile} alt="Profile" className=""/> */}
                        <p className="links1 group-hover:text-[#4c4c4c]">Профиль</p>
                    </button>

                </div>
            </div>
        </nav>
    )
}