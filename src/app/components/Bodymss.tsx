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

    function MainGallery(items : Img[]) {
        return (        
            <Gallery
                items={items}
                itemRenderer={ ({item, index}) => (
                    <div>
                        <Link href={`/image/?url=${item.url}&idx=${index}`}>
                            <img className="rounded-[12px]" src={item.url}/>
                        </Link>
                    </div>
                )}
                rowHeightRange={{min : 200, max: 300}}
                gap={4}
                preserveAspectRatio={false}
            />
        )
    }

    return (
        <> 
            <main className="flex-1 w-full items-center px-[41px] pb-[300px] pt-[50px] mx-auto justify-between container">
                <div id="Container" className="mb-[40px]">
                    <div className="flex">
                        <p className="H2 mb-[30px]">Избранное</p>
                    </div>
                    
                    
                        
                        <div className=" flex-row h-full mx-auto container">{MainGallery(images)}</div>
                        
                    

                    {/* <form id="Cтатья" className="min-w-[200px] min-h-[200px] flex rounded-[12px] items-center bg-[#dfdfdf]">
                        <div className="flex-col h-full mx-auto">
                            <div>{MainGallery(images)}</div>
                        </div>
                    </form> */}
                </div>
            </main>
        </>
    )
}