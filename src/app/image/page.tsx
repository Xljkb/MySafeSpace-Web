"use client"

import { onDismiss } from "../components/actions"
import { useRouter, useSearchParams } from "next/navigation"
import Image from "next/image"
import ChevronRight from "../../../public/assets/chevron-right.svg"
import ChevronLeft from "../../../public/assets/chevron-left.svg"
import CloseWindow from "../../../public/assets/close-window.svg"
import Download from "../../../public/assets/download.svg"
import MapPoint from "../../../public/assets/map_point.svg"
import Photo from "../../../public/assets/camera.svg"
import Translator from "../../../public/assets/translate.svg"


import { images, tags } from "../components/mocks"
import Link from "next/link"
import { useState } from "react"

const Filter = ( label : string ) => {
    return (
        <div className="flex gap-x-[4px] items-center">
            <input type="checkbox" name={label} className="w-[16px] h-[16px] rounded-[4px] border border-[#A6A6A6] accent-[#FFCF08]"/>
            <label className="text-[12px] leading-[18px] text-[#FFFFFF]">{label}</label>
        </div>
    )
}

const chunk = (arr, size) => arr.reduce((carry, _, index, orig) => !(index % size) ? carry.concat([orig.slice(index,index+size)]) : carry, []);

/* TODO: ADD SOME KIND OF INDEXING TO ROTATE BETWEEN IMGS */
export default function ImagePage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const imgUrl = searchParams.get('url')
    const index = +searchParams.get('idx')!

    const [showAllTags, setShowAllTags]= useState(false)
    const [translatePhoto, setTranslatePhoto]= useState(false)

    const decrementIdx = () : number => {
        if (index == 0) { return 0 } else {return index - 1}
    }

    const incrementIdx = () : number => {
        if (index == images.length - 1) { return images.length - 1 } else { return index + 1 }
    }

    const onDismissLocal = () => {
        onDismiss()
        router.push("/")
    }

    const traslate = () => {
        traslate()
        router.push("/")
    }

    const onToMapClick = () => {
        console.log(images[index])
        router.push(`/map?lat=${images[index].coords.lat}&long=${images[index].coords.long}`)
    }
    

    const handleButtonClick = () => {
        // Создаем input элемент для загрузки файлов
        const input = document.createElement('input');
        input.type = 'file';
        input.multiple = true; // Позволяет выбрать несколько файлов
        input.click(); // Нажимаем на input, чтобы открыть проводник
    };

    return (
        <div className="flex-col w-screen h-screen absolute justify-between bg-[#1D1D1D]">
            <div className="h-img-block relative">
            <button className="absolute bottom-0 right-0 mr-[30px]  mb-[30px] flex" onClick={() => setShowAllTags(true)}> 
            <Image src={Translator} alt="translator"/>
            </button>
                <div className="flex relative z-10 justify-end">
                    <button onClick={onDismissLocal} className="bg-transparent p-[16px] rounded-[12px] opacity-40 ">
                        <Image src={CloseWindow} alt="close"/>
                    </button>
                </div>
                <div className="flex w-full h-full justify-between relative top-[-55px]">
                    <div className="self-center pl-[16px] ">
                        <button onClick={() => router.push(`/image/?url=${images[decrementIdx()].url}&idx=${decrementIdx()}`)} className="bg-[#FFCF08] p-[16px] rounded-[12px] opacity-40">
                            <Image src={ChevronLeft} alt="chevron left"/>
                        </button>
                    </div>

                    <img src={`${imgUrl}`} alt={`${imgUrl}`}/>

                    <div className="flex-col self-center pr-[16px]">
                        <button onClick={() => router.push(`/image/?url=${images[incrementIdx()].url}&idx=${incrementIdx()}`)} className="bg-[#FFCF08] p-[16px] rounded-[12px] opacity-40">
                            <Image src={ChevronRight} alt="chevron right"/>
                        </button>
                    </div>
                </div>
            </div>
            

            <div className="flex relative w-screen h-desc-block px-[24px] py-[16px] bg-[#2F2F2F] justify-between">
                <div className="flex-col max-w-60-p w-auto overflow-hidden">
                    <div className="flex gap-x-[8px] items-center self-stretch pb-[8px]">
                        <p className="text-[16px] leading-[24px] font-[600] text-[#FFFFFF]">Img №{index + 1}</p>
                        <p className="text-[14px] leading-[22px] text-[#A6A6A6]">MOCKJPG, 1337x228</p>
                    </div>
                    <div className="flex-col w-auto rounded-[6px] shrink grow">
                        <div className="flex w-auto gap-x-[4px]">
                            { !showAllTags && tags.slice(0, 5).map( (tag) => (
                                <p className="bg-[#1D1D1D26] text-[12px] leading-[16px] 
                                font-medium px-[8px] py-[4px] text-[#FFFFFF] rounded-[6px]">#{tag}</p>
                            ) ) }
                            { !showAllTags && (
                                <button className="bg-[#1D1D1D26] text-[12px] leading-[16px] 
                                font-medium px-[8px] py-[4px] text-[#FFFFFF] rounded-[6px]"
                                onClick={() => setShowAllTags(true)}>
                                    ...
                                </button>
                            )}
                        </div>
                        {/* { showAllTags && tags.map( (tag, idx, array) => (
                            <p className="bg-[#1D1D1D26] text-[12px] leading-[16px] 
                            font-medium px-[8px] py-[4px] text-[#FFFFFF] rounded-[6px]">#{tag}</p>
                        ) ) } */}
                        { showAllTags && chunk(tags, 5).map( (subTags : []) => (
                            <div className="flex w-auto gap-x-[4px] pb-[4px]">
                            {subTags.map( (tag : string) => (
                                <p className="bg-[#1D1D1D26] text-[12px] leading-[16px] 
                                font-medium px-[8px] py-[4px] text-[#FFFFFF] rounded-[6px]">#{tag}</p>
                            ))}
                            </div>
                        ))}
                        
                    </div>
                </div>

                <div className="flex h-max">
                    <div className="flex-col pr-[16px] border-r border-[#747474]">
                        <p className="text-[12px] leading-[18px] text-[#FFFFFF]">Обратите внимание на ограничения использования,<br/> установленные Лицензионным соглашением.</p>
                        <div className="flex gap-x-[4px]">
                            {Filter("Соглашаюсь с условиями")}
                            <Link href={""} className="text-[12px] leading-[18px] text-[#CCA500]">Лицензионного соглашения</Link>
                        </div>
                    </div>
                    <div className="flex pl-[16px]">
                        <button className="flex h-max bg-[#D9D9D9] w-[200px] gap-x-[8px] items-center px-[16px] py-[12px] justify-center rounded-[12px]">
                            <p className="text-[16px] font-medium leading-[24px] text-[#A6A6A6]">228MB</p>
                            <Image src={Download} alt="download"/>
                        </button>
                        <button 
                            onClick={() => onToMapClick()}
                            className="flex h-max bg-[#FFCF08] w-[200px] gap-x-[8px] ml-[20px] items-center px-[16px] py-[12px] justify-center rounded-[12px]">
                            <p className="text-[16px] font-medium leading-[24px] text-[#1D1D1D]">На карте</p>
                            <Image src={MapPoint} alt="map"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}