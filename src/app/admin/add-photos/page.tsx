"use client";

import Image from "next/image"

import ChevronLeft from "../../../../public/assets/chevron-left.svg"
import { useRouter } from "next/navigation"
import { ChangeEvent, DragEvent, useState } from "react"

import { FileDropZone } from "./components/FileDropzone"
import { MuiChipsInput } from "mui-chips-input";

import { WithContext as ReactTags, Tag } from "react-tag-input";
import { tags } from "@/app/components/mocks";


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
            <select className="w-full outline-none justify-between px-[12px] py-[5px] border border-[#D9D9D9] rounded-[2px] bg-[#F5F5F5]" onChange={e => onChange(e)} value={value}>
                <option key={""} value={""}>Не выбрано</option>
                { options.map((option) => (
                    <option key={option.value} value={option.value}>{option.name}</option>
                ))}
            </select>
        </div>
    )
} 


const KeyCodes = {
    comma : 188,
    enter : 13
}


export default function AdminAddPhotos() {
    const router = useRouter()
    const onBackClick = () => { router.push("/admin") }

    const [season, setSeason] = useState("")
    const [daytime, setDaytime] = useState("")

    const onSeasonChange  = ( e: ChangeEvent<HTMLSelectElement>) => { setSeason(e.target.value) }
    const onDaytimeChange = ( e: ChangeEvent<HTMLSelectElement>) => { setDaytime(e.target.value) }
    
    const [tags, setTags] = useState<Tag[]>([])
    const handleAddition = (tag : Tag) => {
        setTags([...tags, {id : tag.id, text : `#${tag.text}`} ])
    }
    const handleDelete = (delIndex : number) => {
        setTags(tags.filter((tag, index) => index !== delIndex));
    }
    const delimiters = [KeyCodes.comma, KeyCodes.enter]

    return (
        <div className="h-full w-full bg-white pb-[40px]">
            <div className="flex-col bg-white px-[108px] pt-[60px] mx-auto container">
                <div className="pb-[32px]">{BackButton(onBackClick)}</div>
                <div className="pb-[32px]">
                    <div className="flex-col w-full min-h-[150px] h-auto">
                        <p className="pb-[16px] text-[16px] leading-[20px] font-medium">1. Массовый выбор параметров</p>
                        <div className="flex gap-x-[16px]">
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
                            <div className="flex-col w-full">
                                <p className="pb-[4px]">Теги</p>
                                <div className="flex w-full">
                                    <ReactTags
                                        tags={tags} 
                                        handleAddition={ tag => handleAddition(tag) }
                                        handleDelete={ idx => handleDelete(idx) }
                                        delimiters={delimiters}
                                        inline = {true}
                                        inputFieldPosition="top"
                                        autocomplete = {true}
                                        placeholder="Введите теги"
                                        minQueryLength={4}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-col w-full">
                    <p className="text-[16px] leading-[20px] font-medium pb-[24px]">2. Загрузка фотографий</p>
                    {FileDropZone()}
                </div>
            </div>
        </div>
    )
}