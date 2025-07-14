'use client'

import { ButtonHTMLAttributes } from "react"

import { useCounterStore } from "@/state/header-state-provider"

interface TabText extends ButtonHTMLAttributes<HTMLButtonElement> {
    txtColor?: 'red'
    children?: string
    setSection?: string
}


const TabText = ({ children, txtColor, setSection }: TabText) => {

    const { section, changeSection } = useCounterStore(
        (state) => state
    )

    return(
        <button onMouseEnter={() => {if(setSection) {
            changeSection(setSection)
            console.log(section)
            }}} style={{color: `${txtColor == 'red' ? '#D0021B' : 'black'}`}} className={(section == setSection ? 'shadow-[0px_-2px_0px_0px_black_inset]' : '') + ` p-[12px] pt-[20px] pb-[20px] text200 bg-none text-center cursor-pointer box-border hover:shadow-[0px_-2px_0px_0px_black_inset] transition duration-200 ease-in`}>
            {children}
        </button>
    )
}

export default TabText