'use client'

import { JSX } from "react"
import { useState } from "react"

import LeftArrow from '@/public/UI/sliderLeftArrow.svg'
import RigthArrow from '@/public/UI/sliderRightArrow.svg'

interface Slider {
    children: JSX.Element[]
    maxDots: number
    imageNumber: number
    sliderHeight: number
}

const ScrollSlider = ({children, maxDots, imageNumber, sliderHeight}: Slider) => {
    const [count, setCount] = useState(0)
    const proportion = (100/(maxDots - 1))
    const dots = Array(maxDots).fill('', 0, maxDots)

    return(
        <div className={`h-max w-full`}>
            <div className={`w-full h-[${sliderHeight}px] flex justify-between items-center relative overflow-hidden`}>
                <div onClick={() => {
                    if (count < 0) {
                        const newCount = count + 1    
                        setCount(newCount)
                    } else {
                        setCount(-maxDots + 1)
                    }
                }} className="flex justify-center items-center w-[5%] z-10 h-full bg-white cursor-pointer"><LeftArrow/></div>
                <div className="w-full flex justify-center items-center ">
                    <div style={{transform: `translateX(${proportion * count}%)`, left: `${proportion * -count}%` , gridTemplateColumns: `repeat(${imageNumber}, max-content)`}} className={`grid grid-rows-1 pl-[5%] pr-[5%] h-max absolute w-max z-5 transition-all ease-in-out duration-1000 gap-[15px] overflow-hidden`}>
                    {children}
                    </div>
                </div>
                <div onClick={() => {
                    if (count > -maxDots + 1) {
                        const newCount = count - 1
                        setCount(newCount)
                    } else {
                        setCount(0)
                    }
                }} className="flex justify-center items-center w-[5%] z-10 h-full bg-white cursor-pointer"><RigthArrow/></div>
            </div>
            <div className="w-full flex justify-center items-center mt-[30px] pt-[20px] pb-[20px] gap-[12px]">
                {dots.map((_, index) => {
                    return(
                        <div key={index} className={`w-[7px] h-[7px] rounded-full bg-${count == -index ? 'black-500 ' : 'white-200 '} transition-colors duration-200 ease-in`}></div>
                    )
                })}
            </div>
        </div>
    )
}

export default ScrollSlider