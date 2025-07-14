'use client'

import Overlay from "@/components/atoms/Overlay"

import { useCounterStore } from "@/state/header-state-provider"
import ManSection from "./headerSection/MenSection"
import WomenSection from "./headerSection/WomenSection"
import AboutSection from "./headerSection/AboutSection"

const HeaderOverlay = () => {

    const { section, changeSection } = useCounterStore(
        (state) => state
    )

    return(
    <>
        {section == 'Men' ? <ManSection/> : 
         section == 'Women' ? <WomenSection/> : 
         section == 'About' ? <AboutSection/> : ''
        }
        {section != '' ? <Overlay click={changeSection}/> : ''}
    </>
    )
}

export default HeaderOverlay