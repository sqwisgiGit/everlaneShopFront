'use client'

import { useState } from "react"
import { ButtonHTMLAttributes } from "react"


interface TabButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: string
}


const TabButton = ({children}: TabButton) => {
    const [btnState, setBtnState] = useState(false)

    const clckBtn = () => {
        setBtnState(!btnState)
    }

    return(
        <button onClick={clckBtn} className={(btnState == true ? 'shadow-[0px_0px_0px_1px_black_inset]' : '') + ' p-[12px] text200 bg-white text-center cursor-pointer box-border transition duration-300 ease-in'}>
            {children}
        </button>
    )
}

export default TabButton