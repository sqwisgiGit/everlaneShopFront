'use client'

import { JSX } from "react"
import { useState } from "react"

import LeftArrow from '@/public/UI/smallSliderLeftArrow.svg'
import RigthArrow from '@/public/UI/smallSliderRightArrow.svg'

interface Slider {
    children: JSX.Element[]
    imageNumber: number
    sliderHeight: number
}

const Slider = ({children, imageNumber, sliderHeight}: Slider) => {
    const [count, setCount] = useState(0)
    const proportion = (100/(imageNumber - 1))
    const dots = Array(imageNumber).fill('', 0, imageNumber)

    return(
        <div className={`h-max w-full`}>
            <div className={`w-full h-[${sliderHeight}px] flex justify-between items-center relative overflow-hidden`}>
                <div onClick={() => {
                    if (count < 0) {
                        const newCount = count + 1    
                        setCount(newCount)
                    } else {
                        setCount(-imageNumber + 1)
                    }
                }} className="flex justify-center items-center w-[5%] z-10 h-full bg-white cursor-pointer"><LeftArrow/></div>
                <div style={{transform: `translateX(${proportion * count}%)`, left: `${(proportion * -count)}%`}} className={`flex h-max absolute w-max z-5 transition-all ease-in-out duration-1000 overflow-hidden`}>
                    {children}
                </div>
                <div onClick={() => {
                    if (count > -imageNumber + 1) {
                        const newCount = count - 1
                        setCount(newCount)
                    } else {
                        setCount(0)
                    }
                }} className="flex justify-center items-center w-[5%] z-10 h-full bg-white cursor-pointer"><RigthArrow/></div>
            </div>
            <div className="w-full h-min flex justify-center items-center mt-[30px] pt-[20px] pb-[20px] gap-[12px]">
                {dots.map((_, index) => {
                    return(
                        <div key={index} style={{background: `${count == -index ? 'var(--color-black-500)' : 'var(--color-white-200)'}`}} className={`w-[7px] h-[7px] rounded-full transition-colors duration-200 ease-in`}></div>
                    )
                })}
            </div>
        </div>
    )
}

export default Slider