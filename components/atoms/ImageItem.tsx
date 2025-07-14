import Image from "next/image"
import { JSX } from "react"

interface ImageItem {
    src: string
    width: number
    height: number
    children: JSX.Element
}

const ImageItem = ({children, src, height, width}: ImageItem) => {
    return(
        <div className="flex flex-col justify-center items-center">
            <Image src={src} alt={'image'} width={width} height={height} />
            {children}
        </div>
    )
}

export default ImageItem