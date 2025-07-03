'use client'

import { JSX } from "react"

interface SliderItem {
    children: JSX.Element | 'string'
}

const SliderItem = ({children}: SliderItem) => {
    return(
        <div className="w-full h-full">
            {children}
        </div>
    )
}

export default SliderItem