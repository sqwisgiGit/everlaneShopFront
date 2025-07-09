import ArrowRightWhite from '@/public/UI/ArrowRightWhite.svg'

const MenSection = () => {
    return(
        <div className="bg-white border-t border-t-white-200 absolute w-full flex h-[406px] gap-[24px] justify-center items-center pt-[54px] z-100">
            <div className="w-[262px] h-[262px] flex flex-col gap-[16px] text300">
                <p className="text100"><b>HIGHLIGHTS</b></p>
                <p>Shop All New Arrivals</p>
                <p>The Gift Guide</p>
                <p>New Bottoms</p>
                <p>New Tops</p>
                <p>T-Shirt Bundles</p>
                <p>Under $100</p>
            </div>
            <div className="w-[262px] h-[262px] flex flex-col gap-[16px] text300">
                <p className="text100"><b>FEATURED SHOPS</b></p>
                <p>The Holiday Outfit Edit</p>
                <p>Giftable Sweaters</p>
                <p>Uniform & Capsule</p>
                <p>The Performance Chino Shop</p>
                <p>Top Rated Men’s Clothing</p>
            </div>
            <div className={`w-[262px] h-[262px] bg-black-500 display100 flex justify-between items-end p-[16px] text-white`}>
                <p><b>The Holiday <br/> Outfit Edit</b></p>
                <ArrowRightWhite/>
            </div>
            <div className={`w-[262px] h-[262px] bg-black-500 display100 flex justify-between items-end p-[16px] text-white`}>
                <p><b>Giftable Sweaters</b></p>
                <ArrowRightWhite/>
            </div>
        </div>
    )
}

export default MenSection