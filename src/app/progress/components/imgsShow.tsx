"use client"

import Image from "next/image"

import Placeholder from "../../../../public/assets/image_placeholder.svg"
import { useState } from "react";
import ReactDOM from "react-dom";

const Filter = ( name : string) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const handleFilterClick = () => {
        setIsPopoverOpen(!isPopoverOpen);
    }

    const handleCheckboxChange = () => {
        setIsPopoverOpen(prevState => !prevState);
    };

    const handleCheckboxChangeConsole = () => {
        setIsPopoverOpen(prevState => {
            console.log(`Сущность ${name} выбрана: ${!prevState}`);
            return !prevState;
        });
    };

    return (
        // <div className="flex gap-x-[8px] items-center">
        //     <input type="checkbox" name={name} className="w-[16px] h-[16px] rounded-[4px] border border-[#A6A6A6] accent-[#1890FF] acc"/>
        // </div>
        
        // <div className="flex gap-x-[8px] items-center relative">
        //     <input type="checkbox" name={name} className="w-[16px] h-[16px] rounded-[4px] border border-[#A6A6A6] accent-[#1890FF] acc" onChange={handleFilterClick} />

        <div className="relative">
            <input 
                type="checkbox" 
                name={name} 
                className="w-4 h-4 rounded-2 border border-gray-400" 
                checked={isPopoverOpen} 
                onChange={handleCheckboxChange} 
            />
            {isPopoverOpen && ReactDOM.createPortal(
                // <div className="fixed items-center justify-center bottom-0 flex-col px-[108px] pt-[60px] mx-auto container">
                    <div className="fixed left-1/2 transform -translate-x-1/2 bottom-0 flex-col px-[108px] pt-[60px] mx-auto container">
                        <div className="bottom-bar">
                            <div className="left-text">2/4</div>
                                <div className="right-buttons">
                                    <button className="button bg-[#FF4D4F] text-[#ffffff]">Удалить все</button>
                                    <button className="button">Сохранить черновик</button>
                                    <button className="button">Опубликовать всё</button>
                                </div>
                        </div>
                    {/* </div> */}
                </div>,
            document.body
            )}
        </div>
    )
}


const ImageCard = ( 
    imgName : string, 
    slug : string, 
    format : string, 
    filesize : string, 
    date : string,
    translated : boolean,
    status : boolean
) => {
    return(
        <div className="w-full flex border-b-[1px] border-[#D9D9D9]">
            <div className="flex px-[8px] py-[16px] justify-items-center">{Filter("pl")}</div>
            
            <div className="flex px-[16px] py-[4px] h-auto w-[300px] justify-start">
                <Image src={Placeholder} alt="img" className="w-[48px] h-[48px] pr-[8px]"/>
                <div className="flex items-center justify-center text-[14px] mr-[auto]">
                    <p>{imgName}</p>
                    <p>{slug}</p>
                    <p>{format}</p>
                    <p>{filesize}</p>
                    <p>{date}</p>
                    <p>{translated}</p>
                    <p>{status}</p>
                </div>
            </div>
        </div>
    )
}

export default function AdminGallery() {
    return(
        <div className="h-auto px-[108px] flex-col mx-auto container">
             <ul className="h-[800px] overflow-hidden"> {/* overflow-y-scroll */}
                <li>{ImageCard("Sample", "Sample slug", "aboba", "228 TB", "not today", false, true)}</li>
                <li>{ImageCard("Sample", "Sample slug", "aboba", "228 TB", "not today", false, true)}</li>
                <li>{ImageCard("Sample", "Sample slug", "aboba", "228 TB", "not today", false, true)}</li>
                <li>{ImageCard("Sample", "Sample slug", "aboba", "228 TB", "not today", false, true)}</li>
                <li>{ImageCard("Sample", "Sample slug", "aboba", "228 TB", "not today", false, true)}</li>
                <li>{ImageCard("Sample", "Sample slug", "aboba", "228 TB", "not today", false, true)}</li>
                <li>{ImageCard("Sample", "Sample slug", "aboba", "228 TB", "not today", false, true)}</li>
                <li>{ImageCard("Sample", "Sample slug", "aboba", "228 TB", "not today", false, true)}</li>
                <li>{ImageCard("Sample", "Sample slug", "aboba", "228 TB", "not today", false, true)}</li>
                <li>{ImageCard("Sample", "Sample slug", "aboba", "228 TB", "not today", false, true)}</li>
                <li>{ImageCard("Sample", "Sample slug", "aboba", "228 TB", "not today", false, true)}</li>
                <li>{ImageCard("Sample", "Sample slug", "aboba", "228 TB", "not today", false, true)}</li>
            </ul>
        </div>
    )
}