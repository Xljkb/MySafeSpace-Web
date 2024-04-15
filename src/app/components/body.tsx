"use client"

import Image from "next/image"

import Filters from "../../../public/assets/filters.svg"
import Close from "../../../public/assets/close.svg"
import Photo from "../../../public/assets/camera.svg"
import Search from "../../../public/assets/search_black.svg"
import { FormEvent, useRef, useState } from "react"
import Link from "next/link"

const Searchbar = () => {
    return (
        <form className="w-5/6 sticky">
            <div className="relative">
                <input maxLength={100000} type="search" placeholder="Начните вводить тег" 
                className="w-full bg-transparent hover:bg-[#dfdfdf] rounded-[12px] p-[12px] outline-[#FFCF08] outline outline-2"/>
            </div>
        </form>
    )
}
// БОБИС ТУТ НАКАКАЛ
const Modal = ({ isOpen, onClose }) => {
  const handleDownload = () => {
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={onClose}>&times;</button>
            <p className="download-text">Скачать 1 файл</p>
            <button className="download-button">Скачать</button>
            <p className="note-text">Обратите внимание на ограничения использования, установленные Лицензионным соглашением.</p>
          </div>
        </div>
      )}
    </>
  );
};

const ModalWindow = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Открыть модальное окно</button>
      <Modal isOpen={isOpen} onClose={closeModal} />
    </div>
  );
};

// БОБИС ТУТ ПЕРЕСТАЛ КАКАТЬ

import { Gallery } from "react-gallery-grid"
import { images } from "./mocks"
import { url } from "inspector"
import { MuiChipsInput } from "mui-chips-input"
import { Tag, WithContext as ReactTags } from "react-tag-input"
import { Coords } from "../map/components/Map"
import { RadioGroup, Radio } from "react-radio-group"

interface Img {
    url : string
    width : number
    height : number
    coords : Coords
}

const UploadFilesButton = () => {
    const handleButtonClick = () => {
      // Создаем input элемент для загрузки файлов
      const input = document.createElement('input');
      input.type = 'file';
      input.multiple = true; // Позволяет выбрать несколько файлов
      input.click(); // Нажимаем на input, чтобы открыть проводник
    };
  
    return (
        <button className="bg-[#EBEBEB] max-h-[50px] hover:bg-[#d1d1d1] rounded-[12px] py-[12px] px-[16px]" onClick={handleButtonClick}>
            <Image src={Photo} alt="camera"/>
        </button>
    );
  };

function MainGallery(items : Img[]) {
    return (        
        <Gallery
            items={items}
            itemRenderer={ ({item, index}) => (
                <div>
                    <Link href={`/image/?url=${item.url}&idx=${index}`}>
                        <img className="rounded-[8px]" src={item.url} width={item.width} height={item.height} />
                    </Link>
                </div>
            )}
            rowHeightRange={{min : 200, max: 300}}
            gap={4}
            preserveAspectRatio={false}
        />
    )
}

const KeyCodes = {
    comma : 188,
    enter : 13
}

const SuperCoolSearchBar = (
    tags : Tag[], 
    handleAddition : (tag : Tag) => void,
    handleDelete : (delIndex : number) => void,
    delimiters : number[],
    inputValue : string,
    onInputChange : (change : string) => void
) => {

    return (
        <ReactTags
            handleInputChange={ change => onInputChange(change)}
            inputValue={inputValue}
            classNames={{
                tagInputField : "MainTags_tagInputField"
            }}
            tags={tags} 
            handleAddition={ tag => handleAddition(tag) }
            handleDelete={ idx => handleDelete(idx) }
            delimiters={delimiters}
            inline = {true}
            inputFieldPosition="top"
            autocomplete = {true}
            placeholder="Введите запрос или теги"
            minQueryLength={4}
        />
    )
}



export default function Body() {
    const [showFilters, setShowFilters] = useState(true)
    const toggleFilters = () => {
        setShowFilters(val => !val)
    }

    const [query, setQuery] = useState("")
    const onQueryChange = (newQuery : string) => {
        setQuery(newQuery)
    }

    const [tags, setTags] = useState<Tag[]>([])
    const handleAddition = (tag : Tag) => {
        setTags([...tags, {id : tag.id, text : `#${tag.text}`} ])
        setQuery("")
    }
    const handleDelete = (delIndex : number) => {
        setTags(tags.filter((tag, index) => index !== delIndex));
    }
    const delimiters = [KeyCodes.comma, KeyCodes.enter]

    const [season, setSeason] = useState("0")
    const handleSeasonChange = (s : string) => {
        setSeason(s)
    }

    const [daytime, setDaytime] = useState("0")
    const handleDaytimeChange = (s : string) => {
        setDaytime(s)
    }

    const [orientation, setOrientation] = useState("0")
    const handleOrientationChange = (s : string) => {
        setOrientation(s)
    }

    const [format, setFormat] = useState("0")
    const handleFormatChange = (s : string) => {
        setFormat(s)
    }

    const [size, setSize] = useState("1")
    const handleSizeChange = (s : string) => {
        setSize(s)
    }

    const [people, setPeople] = useState("0")
    const handlePeopleChange = (s : string) => {
        setPeople(s)
    }

    return (
        <> 
            <main className="flex-1 w-full h-full relative rounded-t-[40px] bg-white top-[44px]">
                <div className="flex pt-[56px] px-[54px] mx-auto container gap-x-[8px] items-top">
                    {/* {Searchbar()} */}
                    <div className="flex-col w-full h-auto items-center justify-center">
                        {SuperCoolSearchBar(tags, handleAddition, handleDelete, delimiters, query, onQueryChange)}
                    </div>
                    {/* ТОЖЕ БОБИС НАКАКАЛ */}
                    {/* {ModalWindow()} */}
                    <button className="bg-[#EBEBEB] max-h-[50px] hover:bg-[#d1d1d1] rounded-[12px] py-[12px] px-[16px]" onClick={toggleFilters}>
                        { !showFilters && 
                            <Image src={Filters} alt="filters" />
                        }
                        { showFilters && 
                            <Image src={Close} alt="close filters"/>
                        }
                    </button>
                    {UploadFilesButton()}
                    <button className="flex max-h-[50px] items-center gap-x-[8px] py-[12px] px-[16px] bg-[#FFCF08] rounded-[12px] hover:bg-[#E6BA00]">
                        <p className="font-medium">Найти</p>
                        <Image src={Search} alt="Search" color="#000"/>
                    </button>
                </div>
                { showFilters &&
                    <div className="px-[54px] pt-[16px] w-full  mx-auto container">
                        <div className="flex p-[24px] rounded-[16px] gap-x-[24px] bg-[#EBEBEB]">
                            <div className="flex-col gap-y-[8px] pr-[60px]">
                                <p className="text-[14px] leading-[22px] text-[#A6A6A6]">Время года</p>
                                <RadioGroup
                                    name="season"
                                    selectedValue={season}
                                    onChange={handleSeasonChange}
                                >
                                    <label className="flex gap-x-[4px] menu items-center">
                                        <Radio value="0" className="w-[16px] h-[16px] rounded-[4px] accent-[#ffcf08]"/>Лето
                                    </label>
                                    <label className="flex gap-x-[4px] menu items-center">
                                        <Radio value="1" className="w-[16px] h-[16px] rounded-[4px] accent-[#ffcf08]"/>Осень
                                    </label>
                                    <label className="flex gap-x-[4px] menu items-center">
                                        <Radio value="2" className="w-[16px] h-[16px] rounded-[4px] accent-[#ffcf08]"/>Зима
                                    </label>
                                    <label className="flex gap-x-[4px] menu items-center">
                                        <Radio value="3" className="w-[16px] h-[16px] rounded-[4px] accent-[#ffcf08]"/>Весна
                                    </label>
                                </RadioGroup>
                            </div>
                            <div className="flex-col gap-y-[8px] pr-[60px]">
                                <p className="text-[14px] leading-[22px] text-[#A6A6A6]">Время суток</p>
                                <RadioGroup
                                    name="daytime"
                                    selectedValue={daytime}
                                    onChange={handleDaytimeChange}
                                >
                                    <label className="flex gap-x-[4px] menu items-center">
                                        <Radio value="0" className="w-[16px] h-[16px] rounded-[4px] accent-[#ffcf08]"/>Утро
                                    </label>
                                    <label className="flex gap-x-[4px] menu items-center">
                                        <Radio value="1" className="w-[16px] h-[16px] rounded-[4px] accent-[#ffcf08]"/>День
                                    </label>
                                    <label className="flex gap-x-[4px] menu items-center">
                                        <Radio value="2" className="w-[16px] h-[16px] rounded-[4px] accent-[#ffcf08]"/>Вечер
                                    </label>
                                    <label className="flex gap-x-[4px] menu items-center">
                                        <Radio value="3" className="w-[16px] h-[16px] rounded-[4px] accent-[#ffcf08]"/>Ночь
                                    </label>
                                </RadioGroup>
                            </div>
                            <div className="flex-col gap-y-[8px] pr-[60px] menu items-center justify-center">
                                <p className="text-[14px] leading-[22px] text-[#A6A6A6]">Ориентация</p>
                                <RadioGroup
                                    name="orientation"
                                    selectedValue={orientation}
                                    onChange={handleOrientationChange}
                                >
                                    <label className="flex gap-x-[4px] menu items-center">
                                        <Radio value="0" className="w-[16px] h-[16px] rounded-[4px] accent-[#ffcf08]"/>Горизонтальная
                                    </label>
                                    <label className="flex gap-x-[4px] menu items-center">
                                        <Radio value="1" className="w-[16px] h-[16px] rounded-[4px] accent-[#ffcf08]"/>Вертикальная
                                    </label>
                                    <label className="flex gap-x-[4px] menu items-center">
                                        <Radio value="2" className="w-[16px] h-[16px] rounded-[4px] accent-[#ffcf08]"/>Квадратная
                                    </label>
                                </RadioGroup>
                            </div>
                            <div className="flex-col gap-y-[8px] pr-[60px] menu items-center">
                                <p className="text-[14px] leading-[22px] text-[#A6A6A6]">Формат</p>
                                <RadioGroup
                                    name="format"
                                    selectedValue={format}
                                    onChange={handleFormatChange}
                                >
                                    <label className="flex gap-x-[4px] menu items-center">
                                        <Radio value="0" className="w-[16px] h-[16px] rounded-[4px] accent-[#ffcf08]"/>JPG
                                    </label>
                                    <label className="flex gap-x-[4px] menu items-center">
                                        <Radio value="1" className="w-[16px] h-[16px] rounded-[4px] accent-[#ffcf08]"/>JPEG
                                    </label>
                                    <label className="flex gap-x-[4px] menu items-center">
                                        <Radio value="2" className="w-[16px] h-[16px] rounded-[4px] accent-[#ffcf08]"/>PNG
                                    </label>
                                    <label className="flex gap-x-[4px] menu items-center">
                                        <Radio value="3" className="w-[16px] h-[16px] rounded-[4px] accent-[#ffcf08]"/>WEBP
                                    </label>
                                </RadioGroup>
                            </div>
                            <div className="flex-col gap-y-[8px] pr-[60px] menu items-center">
                                <p className="text-[14px] leading-[22px] text-[#A6A6A6]">Размер</p>
                                <RadioGroup
                                    name="size"
                                    selectedValue={size}
                                    onChange={handleSizeChange}
                                >
                                    <label className="flex gap-x-[4px] menu items-center">
                                        <Radio value="0" className="w-[16px] h-[16px] rounded-[4px] accent-[#ffcf08]"/>Очень большие
                                    </label>
                                    <label className="flex gap-x-[4px] menu items-center">
                                        <Radio value="1" className="w-[16px] h-[16px] rounded-[4px] accent-[#ffcf08]"/>Большие
                                    </label>
                                    <label className="flex gap-x-[4px] menu items-center">
                                        <Radio value="2" className="w-[16px] h-[16px] rounded-[4px] accent-[#ffcf08]"/>Средние
                                    </label>
                                    <label className="flex gap-x-[4px] menu items-center">
                                        <Radio value="3" className="w-[16px] h-[16px] rounded-[4px] accent-[#ffcf08]"/>Маленькие
                                    </label>
                                </RadioGroup>
                            </div>
                            <div className="flex-col gap-y-[8px] pr-[60px] menu items-center">
                                <p className="text-[14px] leading-[22px] text-[#A6A6A6]">Люди</p>
                                <RadioGroup
                                    name="people"
                                    selectedValue={people}
                                    onChange={handlePeopleChange}
                                >
                                    <label className="flex gap-x-[4px] menu items-center">
                                        <Radio value="0" className="w-[16px] h-[16px] rounded-[4px] accent-[#ffcf08]"/>Не важно
                                    </label>
                                    <label className="flex gap-x-[4px] menu items-center">
                                        <Radio value="1" className="w-[16px] h-[16px] rounded-[4px] accent-[#ffcf08]"/>Без людей
                                    </label>
                                </RadioGroup>
                            </div>
                        </div>
                    </div>
                }

                <div className="flex px-[54px] mx-auto container pt-[16px]">
                    <div className="flex w-full gap-x-[11px]">
                        <button>
                            <p className="text-[12px] leading-[16px] font-medium text-[#A6A6A6]">по популярности</p>
                        </button>
                        <button>
                            <p className="text-[12px] leading-[16px] font-medium text-[#A6A6A6]">по дате добавления</p>
                        </button>
                    </div>
                </div>
            
                <div className="flex-col h-full px-[54px] pt-[32px] mx-auto container">
                    <div>{MainGallery(images)}</div>
                </div>
                <div className="pb-[100px]"></div>
            </main>
        </>
    )
}