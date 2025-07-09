'use client'

interface Overlay {
    click?: (value: string) => void
}

const Overlay = ({click}: Overlay) => {

    return(
        <div onMouseEnter={() => {click!('')}} className="fixed top-0 left-0 z-20 w-[100vw] h-[100vw] bg-[rgba(0,0,0,0.6)]"></div>
    )
}

export default Overlay