"use client"

import Image from "next/image"
import SearchDark from "/public/assets/search-dark.svg"
import { ChangeEvent, useState, useRef } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const AdminSearchbar = () => {
    return (
        <form className="border-y-[1px] border-l-[1px] border-[#D9D9D9]">
            <div className="relative">
                <input type="search" maxLength={100000} placeholder="Введите название или тег"
                className="px-[12px] py-[4px] w-[360px] outline-none text-[12px] leading-[22px]"/>
            </div>
        </form>
    )
}

const Filter = ( name : string) => {
    return (
        <div className="flex gap-x-[8px] items-center">
            <input type="checkbox" name={name} className="w-[16px] h-[16px] rounded-[4px] border border-[#A6A6A6] accent-[#1890FF] acc"/>
            <label className="text-[14px] leading-[22px]">{name}</label>
        </div>
    )
}

export default function AdminHeader() {
    const router = useRouter()

    const [showFilters, setShowFilters] = useState(false)
    const toggleFilters = () => {
        setShowFilters(val => !val)
    }

    const onFormChange = (e : ChangeEvent<HTMLInputElement>) => {
        if (e.target.files == null) {
            console.log("NO FILES!")
        }
    }

    const onPhotoAddClick = () => {
        router.push("/admin/add-photos")
    }

    const toDrafts = () => {
        router.push("/admin/drafts")
    }

    const SortPanel = () => {
        const [sortField, setSortField] = useState(null);
        const [sortOrder, setSortOrder] = useState('asc');
      
        const handleSort = (field) => {
          if (sortField === field) {
            // Если поле уже выбрано для сортировки, меняем порядок сортировки
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
          } else {
            // Если выбрано новое поле для сортировки, сбрасываем порядок сортировки на 'asc'
            setSortField(field);
            setSortOrder('asc');
          }
        };
      
        return (
            <div className="border-b border-1 border-[#EBEBEB] sort-panel flex pt-[20px] pb-[20px] br-[40px] bg-[#FAFAFA] mb-[5px] mt-[20px]">
              <div className="flex justify-center text-[14px] mr-[auto] min-w-[200px]" onClick={() => handleSort('name')}>
                Название, превью {sortField === 'name' && sortOrder === 'asc' ? '▲' : '▼'}
              </div>
              <div className="flex items-center justify-center text-[14px] mr-[auto]" onClick={() => handleSort('slug')} >
                Слаг {sortField === 'slug' && sortOrder === 'asc' ? '▲' : '▼'}
              </div>
              <div className="flex items-center justify-center text-[14px] mr-[auto]" onClick={() => handleSort('fileType')} >
                Тип файла {sortField === 'fileType' && sortOrder === 'asc' ? '▲' : '▼'}
              </div>
              <div className="flex items-center justify-center text-[14px] mr-[auto]" onClick={() => handleSort('fileSize')} >
                Размер файла {sortField === 'fileSize' && sortOrder === 'asc' ? '▲' : '▼'}
              </div>
              <div className="flex items-center justify-center text-[14px] mr-[auto]" onClick={() => handleSort('updatedAt')} >
                Обновлено {sortField === 'updatedAt' && sortOrder === 'asc' ? '▲' : '▼'}
              </div>
              <div className="flex items-center justify-center text-[14px] mr-[auto]" onClick={() => handleSort('translation')}>
                Перевод {sortField === 'translation' && sortOrder === 'asc' ? '▲' : '▼'}
              </div>
              <div className="flex items-center justify-center text-[14px] mr-[auto]" onClick={() => handleSort('status')}>
                Статус {sortField === 'status' && sortOrder === 'asc' ? '▲' : '▼'}
              </div>
            </div>
          );
        };

    // const handleFormSubmit = (e: React.FormEvent<EventTarget | HTMLFormElement>) => {   
    // }

    return (
        <div className="px-[108px] pt-[60px] mx-auto container">
            
            <div className="flex justify-between pb-[16px]">
                <div className="flex">
                    {AdminSearchbar()}
                    <button className="p-[9px] border-[1px] border-[#D9D9D9]">
                        <Image src={SearchDark} alt="search" className="w-[14px] h-[14px]"/>
                    </button>
                </div>

                <div className="flex gap-x-[20px]">
                    <button className="px-[15px] py-[4px] bg-[#FFCF08] rounded-[2px]">
                        <p className="text-[14px] leading-[22px]" onClick={toDrafts}>Черновик</p>
                    </button>
                    <button className="px-[15px] py-[4px] bg-[#1890FF] rounded-[2px]" onClick={toggleFilters}>
                    { !showFilters &&
                        <p className="text-[14px] leading-[22px] text-[#FFFFFF]"> Доп. фильтры</p>
                    }
                    { showFilters &&
                        <p className="text-[14px] leading-[22px] text-[#FFFFFF]"> Закрыть</p>
                    }
                    </button>
                </div>
            </div>

            { !showFilters &&
                // <form 
                // // TODO: Поменять на ссылку куда файлы плевать
                //     className="flex" action="http://127.0.0.1:8000/admins/upload" method="post" encType="multipart/form-data">
                //     <input 
                //         onChange={onFormChange}
                //         className=" w-full px-[15px] py-[4px] border border-1 border-[#D9D9D9]"
                //         type="file" name="files" multiple accept="image/jpeg, image/png"
                //     />
                //     <button type="submit" className="w-1/3 border-r-1 border border-y-1 border-[#D9D9D9]">Добавить выбранные файлы</button>
                // </form>
                <button onClick={onPhotoAddClick} className="w-full px-[15px] py-[4px] border border-1 border-[#D9D9D9]">
                    <p className="text-[14px] leading-[22px]">+ Добавить фото</p>
                </button>
            }
            {SortPanel()}
            { showFilters &&
                <div className="pt-[16px] mx-auto container">
                    <div className="flex p-[24px] border-[#D9D9D9] border border-1 justify-between">
                        <div className="flex gap-x-[24px]">
                            <div className="flex-col gap-y-[8px] pr-[60px]">
                                <p className="text-[14px] leading-[22px] text-[#A6A6A6]">Время года</p>
                                {Filter("Лето")}
                                {Filter("Осень")}
                                {Filter("Зима")}
                                {Filter("Весна")}
                            </div>
                            <div className="flex-col gap-y-[8px] pr-[60px]">
                                <p className="text-[14px] leading-[22px] text-[#A6A6A6]">Время суток</p>
                                {Filter("Утро")}
                                {Filter("День")}
                                {Filter("Вечер")}
                                {Filter("Ночь")}
                            </div>
                            <div className="flex-col gap-y-[8px] pr-[60px]">
                                <p className="text-[14px] leading-[22px] text-[#A6A6A6]">Ориентация</p>
                                {Filter("Горизонтальная")}
                                {Filter("Вертикальная")}
                                {Filter("Квадратная")}
                            </div>
                            <div className="flex-col gap-y-[8px] pr-[60px]">
                                <p className="text-[14px] leading-[22px] text-[#A6A6A6]">Формат</p>
                                {Filter("JPG")}
                                {Filter("JPEG")}
                                {Filter("PNG")}
                                {Filter("WEBP")}
                            </div>
                            <div className="flex-col gap-y-[8px] pr-[60px]">
                                <p className="text-[14px] leading-[22px] text-[#A6A6A6]">Статус</p>
                                {Filter("Опубликовано")}
                                {Filter("Не опубликовано")}
                            </div>
                        </div>

                        <div className="h-auto w-auto flex">
                            <button className="h-auto self-last-baseline px-[15px] py-[4px] bg-[#1890FF]">
                                <p className="text-[14px] leading-[22px] text-[#FFFFFF]">Применить фильтры</p>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}