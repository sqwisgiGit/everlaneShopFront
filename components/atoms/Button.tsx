'use client'

import { useState } from "react"
import { ButtonHTMLAttributes } from "react"

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
    btnType: 'md' | 'lg'
    wFull?: 'true'
    children?: string
}


const Button = ({children, btnType, wFull}: Button) => {
    const [btnState, setBtnState] = useState(false)
    
    const clckButton = () => {
        setBtnState(!btnState)
    }
    
    return(
        <button onClick={clckButton} className={(btnType == 'lg' ? `flex justify-center items-center w-[240px] h-[41px] text300 font-bold` : `flex justify-center items-center w-[240px] h-[41px] text300`) + ` text-centera box-border bg-white text-black  hover:bg-black hover:text-white cursor-pointer transition duration-200 ease-in ${wFull == 'true' ? 'w-full' : ''}`}>
            <p className="w-max">
                {children}
            </p>
        </button>
    )
}

export default Button