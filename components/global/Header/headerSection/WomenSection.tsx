import ArrowRightWhite from '@/public/UI/ArrowRightWhite.svg'

const WomenSection = () => {
    return(
    <div className="bg-white border-t border-t-white-200 absolute w-full flex h-[406px] gap-[24px] justify-center items-center pt-[54px] z-100">
    <div className="w-[262px] h-[262px] flex flex-col gap-[16px] text300">
        <p className="text100"><b>HIGHLIGHTS</b></p>
        <p>New In</p>
        <p>The Gift Guide</p>
        <p>Dresses & Jumpsuits</p>
        <p>Sweaters & Cardigans</p>
        <p>The Bodysuit Shop</p>
        <p>Under $100</p>
    </div>
    <div className="w-[262px] h-[262px] flex flex-col gap-[16px] text300">
        <p className="text100"><b>FEATURED SHOPS</b></p>
        <p>The Festive Edit</p>
        <p>The Cashmere Shop</p>
        <p>The Workwear Shop</p>
        <p>The Denim Shop</p>
        <p>Customer Favorites</p>
    </div>
    <div className={`w-[262px] h-[262px] bg-black-500 display100 flex justify-between items-end p-[16px] text-white`}>
        <p><b>The Festive <br/> Edit</b></p>
        <ArrowRightWhite/>
    </div>
    <div className={`w-[262px] h-[262px] bg-black-500 display100 flex justify-between items-end p-[16px] text-white`}>
        <p><b>The Cashmere <br/> Shop</b></p>
        <ArrowRightWhite/>
    </div>
</div>
    )
}

export default WomenSection