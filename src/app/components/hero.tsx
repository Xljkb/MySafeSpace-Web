import Image from "next/image"
import Divider from "../../../public/assets/Divider.svg"

export default function Hero() {
    return (
        <div className="pt-[24px] pb-[108px] px-[41px] mx-auto container">
            <div className="flex gap-x-[8px] pb-[32px]">
                <p className="text-[#747474] path">Главная</p>
                <Image src={Divider} alt="Divider"/>
                <p className="text-[#747474] path">Проекты</p>
                <Image src={Divider} alt="Divider"/>
                <p className="text-[#747474] path">Фотографии</p>
            </div>
            
            <h1 className="H1 text-[#FFFFFF]">Фотографии</h1>

            <p className="text text-[#D2D2D2]">Наш портал предлагает огромный выбор фотографий высокого качества, подходящих для любых проектов. Найдите идеальное изображение для вашего сайта или рекламной кампании с нами.</p>
        </div>
    )
}