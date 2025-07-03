import Slider from "@/components/local/SliderTest/Slider";
import SliderItem from "@/components/local/SliderTest/SliderItem";

export default function SliderTest () {
    return(
        <Slider maxDots={4} imageNumber={10} sliderHeight={500}>
            <SliderItem>
                <div className="w-[282px] h-[461px] bg-black-500">
                    Slide 1
                </div>
            </SliderItem>
            <SliderItem>
                <div className="w-[282px] h-[461px] bg-black-500">
                    Slide 2
                </div></SliderItem>
            <SliderItem>
                <div className="w-[282px] h-[461px] bg-black-500">
                    Slide 3
                </div></SliderItem>
            <SliderItem>
                <div className="w-[282px] h-[461px] bg-black-500">
                    Slide 4
                </div></SliderItem>
                <SliderItem>
                <div className="w-[282px] h-[461px] bg-black-500">
                    Slide 1
                </div>
            </SliderItem>
            <SliderItem>
                <div className="w-[282px] h-[461px] bg-black-500">
                    Jopa 2
                </div></SliderItem>
            <SliderItem>
                <div className="w-[282px] h-[461px] bg-black-500">
                    Slide 3
                </div></SliderItem>
            <SliderItem>
                <div className="w-[282px] h-[461px] bg-black-500">
                    Slide 4
                </div></SliderItem>
        </Slider>
    )
}