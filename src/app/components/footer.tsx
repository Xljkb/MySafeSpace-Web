"use client"

import { useRouter } from "next/navigation"

import Image from "next/image"
import Profile from "../../../public/assets/profile-black.svg"
import Logo from "../../../public/assets/logo.svg"
import VK from "../../../public/assets/vk.svg"
import TG from "../../../public/assets/telegram.svg"

export default function Footer() {
    const router = useRouter();
    const handleOnProfileClick = () => {
        router.push("/admin")
    };
    return (
        <div className="px-[54px] pt-[56px] relative flex-col bg-[#1D1D1D] w-full rounded-t-[44px]">
            <div className="flex w-full gap-x-[24px] mx-auto container pb-[56px]">
                
                <div className="flex w-full gap-x-[40px]">
                    
                    <div className="w-full h-auto">
                        <h2 className="H3 text-[#FFFFFF]">О нас</h2>
                        <p className="text-[#747474] links1">Партнеры</p>
                        <p className="text-[#747474] links1">Обратная связь</p>
                        <p className="text-[#747474] links1">FAQ</p>
                    </div>
                    
                    <div className="w-full h-auto">
                        <h2 className="H3 text-[#FFFFFF]">Проекты и мероприятия</h2>
                        <h2 className="H3 text-[#FFFFFF]">Аналитика и тренды</h2>
                    </div>
                    
                    <div className="w-full h-auto">
                        <p className="text-[#747474] links1">Журнал</p>
                        <p className="text-[#747474] links1">Меры поддержки</p>
                    </div>

                </div>
                
                <div className="pl-[40px]">
                    
                    <p className="text-[#D2D2D2] links2">Больше возможностей в личном кабинете</p>
                    <button onClick={handleOnProfileClick} className="flex items-center w-full px-[16px] py-[12px] justify-center bg-[#FFCF08] rounded-[12px] hover:bg-[#E6BA00]">
                        <Image src={Profile} alt="profile" className="fill-[#FFFFFF]"/>
                        <p className="text-[#1D1D1D] button_text pl-[8px]">Профиль</p>
                    </button>

                </div>

            </div>

            <div className="flex w-full gap-x-[10px] mx-auto container pb-[24px]">
                <div className="flex w-full">
                    <Image src={Logo} alt="logo" className="h-[40px]"/>
                </div>

                <div className="flex gap-x-[8px]">
                    <Image src={VK} alt="VK" className="h-[40px] w-auto"/>
                    <Image src={TG} alt="TG" className="h-[40px] w-auto"/>
                </div>
            </div>

            <div className="mx-auto container bg-[#2F2F2F] h-[1px]"/>

            <div className="mx-auto container pt-[24px]">
                <p className="text-[#747474] description">© 2023, АНО «Проектный офис по развитию туризма и гостеприимства Москвы»</p>
                <div className="flex gap-x-[16px] pb-[24px]">
                    <p className="text-[#747474] description">Политика конфиденциальности</p>
                    <p className="text-[#747474] description">Политика обработки персональных данных</p>
                    <p className="text-[#747474] description">Пользовательское соглашение</p> 
                </div>
            </div>
        </div>
    )
}