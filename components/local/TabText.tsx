'use client'

import { useState } from "react"
import { ButtonHTMLAttributes } from "react"

interface TabText extends ButtonHTMLAttributes<HTMLButtonElement> {
    txtColor?: 'red'
    children?: string
}


const TabText = ({children, txtColor}: TabText) => {
    const [btnState, setBtnState] = useState(false)

    const clckBtn = () => {
        setBtnState(!btnState)
    }

    return(
        <button onClick={clckBtn} className={(btnState == true ? 'shadow-[0px_-2px_0px_0px_black_inset]' : '') + ` p-[12px] pt-[20px] pb-[20px] text200 bg-none text-center cursor-pointer box-border hover:shadow-[0px_-2px_0px_0px_black_inset] transition duration-200 ease-in text-${txtColor == 'red' ? 'red-special' : ''}`}>
            {children}
        </button>
    )
}

export default TabText