import Button from "@/components/local/Button";
import ImageItem from "@/components/local/ImageItem";
import Slider from "@/components/local/SliderTest/Slider";
import SliderItem from "@/components/local/SliderTest/SliderItem";
import Image from "next/image";


export default function Home() {

  const categorys = ['SHIRTS','DENIM','TEES','PANTS','SWEATER','OUTWEAR']
  const topics = ['SHOP THE LASEST', 'SHOP YOUR FAVORITES', 'SHOP OCASSION']
  const favourites = [
    ['The Waffle Long-Sleeve Crew', '60', 'Bone'],
    ['The Bomber Jacket | Uniform', '148', 'Toasted Coconut'],
    ['The Slim 4-Way Stretch Organic Jean | Uniform', '98', 'Dark Indigo'],
    ['The Essential Organic Crew', '30', 'Vintage Black'],
    ['The Cloud-Knit Henley', '75', 'Heather Grey'],
    ['The Traveler Pant', '120', 'Olive Grove'],
    ['The Linen Short-Sleeve Shirt', '88', 'Washed Navy']
  ]

  return (
      <>
        <main className="grid mainPageAreas">
          <section className="flex justify-start items-center pl-[32px] bg-[url(/Images/Comercial/Image1.jpg)] bg-cover comercial text-white">
              <div className="flex flex-col justify-center items-center w-[632px] h-[208px">
                <h1 className="display500 text-center mb-[50px]">
                Your Cozy Era
                </h1>
                <h3 className="display100 text-center mb-[50px]">
                  Get peak comfy-chic 
                  <br/>
                  with new winter essentials.
                </h3>
                <Button btnType='md' className="text300">SHOP NOW</Button>
              </div>
          </section>
          <section className="flex justify-center items-center flex-col category pt-[90px] pb-[90px]">
            <h5 className="display100 text-center">
              Shop by Category
            </h5>
            <div className="flex mt-[25px] gap-[8px]">
              {categorys.map((item, id) => {
                return(
                  <ImageItem key={item} src={`/Images/Category/Category${id+1}.jpg`} height={263} width={212}>
                    <p className={`underline text300 mt-[12px]`}>
                      {item}
                    </p>
                  </ImageItem>
                )
              })}
            </div>
          </section>
          <section className="new grid grid-cols-3 gap-[12px]">
              {topics.map((item) => {
                return(
                  <div key={item} className="flex justify-center items-center bg-black-500">
                      <Button btnType='md'>{item}</Button>
                  </div>
                )
              })}
          </section>
          <section className="report flex flex-col justify-center items-center mt-[90px] mb-[90px] bg-black-500 gap-[20px] text-white">
              <h2 className="display200 text-center">We’re on a Mission To Clean Up the Industry</h2>
              <p className="text400 text-center">Read about our progress in our latest Impact Report.</p>
              <Button btnType="md">LEARN MORE</Button>
          </section>
          <section className="favourites flex flex-col justify-center items-center pb-[73px] pt-[90px gap-[30px] text-center">
            <div>
              <h5 className="display500">
              Everlane Favorites
            </h5>
            <p className="text400 mt-12px">
              Beautifully Functional. Purposefully Designed. Consciously Crafted.
            </p>
            </div>
            <div className="w-full h-[538px] flex justify-center items-center">
              <Slider maxDots={4} imageNumber={7} sliderHeight={461}>
                {favourites.map((item, index) => {
                  return(
                    <SliderItem key={index}>
                      <div className="w-min h-max flex flex-col items-start gap-[6px]">
                        <div className="w-[282px] h-[420px] bg-black-500"></div>
                        <div className="w-full flex justify-between items-center text200">
                          <p>{item[0]}</p>
                          <p>${item[1]}</p>
                        </div>
                        <div className="text-grey-300 text200">
                          <p>{item[2]}</p>
                      </div>
                    </div>
                    </SliderItem>
                  )
                })}
            </Slider>
            </div>
          </section>
        </main>
      </>
      );
}
