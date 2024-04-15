"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"

import Logo from "../../../public/assets/logo.svg"
import Chevron from "../../../public/assets/chevron-down.svg"
import Dots from "../../../public/assets/dots-horizontal.svg"
import Search from "../../../public/assets/search_white.svg"
import RUS_Flag from "../../../public/assets/russian_flag.svg"
import Bell from "../../../public/assets/bell.svg"
import Profile from "../../../public/assets/profile.svg"

const navList = [
    { name:"Проекты и мероприятия"},
    { name:"Аналитика и тренды"},
    { name:"Журнал"},
    { name:"Партнеры"}
]

export default function Navbar() {
    const router = useRouter()
    const handleOnProfileClick = () => {
        router.push("/admin")
    }

    return (
        <nav className="flex w-full items-center px-[41px] py-[20px] mx-auto justify-between container">
            <div className="flex items-center">
                <Image src={Logo} alt="Logo"/>

                <div className="flex pl-[48px] gap-x-[24px] links1 text-[#FFFFFF] mt-[10px]">
                    <div className="flex gap-x-[4px] justify-center items-center">
                        <p className="links1 text-[#FFFFFF]">О нас</p>
                        <Image src={Chevron} alt="Chevron"/>
                    </div>
                    {navList.map( (item, index) => (
                        <p key={index} className="links1 text-[#FFFFFF]">
                            {item.name}
                        </p>
                    ))}
                    <Image src={Dots} alt="More"/>
                </div>
            </div>
                    
            <div className="flex pl-[48px] items-center gap-x-[20px]">
                <button>
                    <Image src={Search} alt="Search" className=""/>
                </button>

                <button className="flex gap-x-[8px] group">
                    <Image src={RUS_Flag} alt="Flag" className=""/>
                    <p className="links1 text-[#FFFFFF] group-hover:text-[#999B9F]">РУС</p>
                </button>
                
                <button className="group">
                    <Image src={Bell} alt="Notifications" className="fill-none"/>
                </button>
                
                <button className="flex gap-x-[8px] group" onClick={handleOnProfileClick}>
                    <Image src={Profile} alt="Profile" className=""/>
                    <p className="links1 text-[#FFFFFF] group-hover:text-[#999B9F]">Профиль</p>
                </button>
            </div>
        </nav>
    )
}