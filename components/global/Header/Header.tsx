import TabText from "../../local/TabText"
import ArrowRigth from "@/public/UI/ArrowRight.svg"
import UsaFlag from "@/public/Flags/usa-flag.svg"
import MagnifyingGlass from '@/public/UI/MagnifyingGlass.svg'
import User from '@/public/UI/User.svg'
import ShopingCart from '@/public/UI/ShoppingCartSimple.svg'
import Logo from '@/public/UI/Logo.svg'
import HeaderOverlay from "./HeaderOverlay"
import Link from "next/link"

const Header = () => {
    return(
        <>
        <header className="z-100 relative bg-white">
            <div className={'bg-black w-full flex text-white  pr-[20px] p-[7px] justify-end'}>
                <span className="centering flex items-center text200 place-self-center">
                    <b>Get early access on launches and offers.</b> <span className={'underline'}>Sign Up For Texts</span> <ArrowRigth className={'w-[14px] h-[14px] ml-[4px]'}/>
                </span>
                <span className="flex items-center text200">
                    <UsaFlag className={'mr-[12px]'}/>
                    USD
                </span>
            </div>
            <div className={`flex justify-between items-center pl-[68px] pr-[68px] border-b border-b-white-200`}>
                <div>
                    <Link href={'/men'}><TabText setSection={'Women'}></TabText></Link>
                    <TabText setSection={'Men'}>Men</TabText>
                    <TabText setSection={'About'}>About</TabText>
                    <TabText setSection={'Everworld Stories'}>Everworld Stories</TabText>
                </div>
                <Logo className='centering'/>
                <div className="flex *:m-[12px]">
                    <MagnifyingGlass/>
                    <User/>
                    <ShopingCart/>
                </div>
            </div>
            <nav className="flex justify-center items-center w-full">
                <TabText>Holiday Gifting</TabText>
                <TabText>New Arrivals</TabText>
                <TabText>Best-Sellers</TabText>
                <TabText>Clothing</TabText>
                <TabText>Tops & Sweaters</TabText>
                <TabText>Pants & Jeans</TabText>
                <TabText>Outerwear</TabText>
                <TabText>Shoes & Bags</TabText>
                <TabText txtColor={'red'}>Sale</TabText>
            </nav>
        </header>
        <HeaderOverlay/>
        </>
    )
}

export default Header