import Slider from "@/components/local/FullSlider/Slider";
import SliderItem from "@/components/local/FullSlider/SliderItem";

export default function SliderTest () {

    const slides = Array(4).fill(1, 0, 4)

    return(
        <Slider imageNumber={4} sliderHeight={806}>
                {slides.map((_, index) => {
                    return(
                        <SliderItem key={index}>
                            <div className="w-[100vw] h-[695px] flex justify-center items-center gap-[74px]">
                                <div className="flex flex-col gap-[40px]">
                                    <p className="text400">People Are Talking</p>
                                    <h1 className="display100 mt-[29px]">“Love this shirt! Fits perfectly and the fabric is thick without <br/> being stiff.”</h1>
                                    <p className="text400">-- JonSnSF, <span className="underline">The Heavyweight Overshirt</span></p>
                                </div>
                                <div className="h-[695px] w-[530px] bg-black-500">

                                </div>
                            </div>
                        </SliderItem>
                    )
                })}
        </Slider>
    )
}