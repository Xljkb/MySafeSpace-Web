import { useState } from "react"

export default function SelectionFooter() {
// Нижнее меню
    return (
        <div className="flex-col px-[108px] pt-[60px] mx-auto container">
            <div className="bottom-bar">
                <div className="left-text">2/4</div>
                    <div className="right-buttons">
                        <button className="button bg-[#FF4D4F] text-[#ffffff]">Удалить все</button>
                        <button className="button">Сохранить черновик</button>
                        <button className="button">Опубликовать всё</button>
                    </div>
                </div>
        </div>
    )
}