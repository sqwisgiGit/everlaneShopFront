import Button from "@/components/atoms/Button";
import Slider from "@/components/organisms/FullSlider/Slider";
import SliderItem from "@/components/organisms/FullSlider/SliderItem";
import ImageItem from "@/components/atoms/ImageItem";
import ScrollSlider from "@/components/organisms/ScrollSlider/Slider";
import ScrollSliderItem from "@/components/organisms/ScrollSlider/SliderItem";
import CartButton from "@/public/UI/cartButton.svg"
import Box from "@/public/UI/box.svg"
import Recycle from "@/public/UI/recycle.svg"
import MapPointer from "@/public/UI/mapPointer.svg"


const MainTemplate = () => {

  const slides = Array(4).fill(1, 0, 4)
  const usersPhotos = Array(12).fill(1, 0, 12)
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
              <ScrollSlider maxDots={4} imageNumber={7} sliderHeight={461}>
                {favourites.map((item, index) => {
                  return(
                    <ScrollSliderItem key={index}>
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
                    </ScrollSliderItem>
                  )
                })}
            </ScrollSlider>
            </div>
          </section>
          <section className="reviews w-full h-full">
            <Slider imageNumber={4} sliderHeight={695}>
                {slides.map((_, index) => {
                    return(
                        <SliderItem key={index}>
                            <div className="w-[100vw] h-[695px] flex justify-center items-center gap-[74px]">
                                <div className="flex flex-col gap-[40px]">
                                    <p className="text400">People Are Talking</p>
                                    <h1 className="display100 mt-[29px]">“Love this shirt! Fits perfectly and the fabric is thick without <br/> being stiff.”</h1>
                                    <p className="text400">-- JonSnSF, <span className="underline">The Heavyweight Overshirt</span></p>
                                </div>
                                <div className="h-[695px] w-[530px] bg-black-500"></div>
                            </div>
                        </SliderItem>
                    )
                })}
            </Slider>
          </section>
          <section className="news flex justify-center items-center gap-[20px] text-center border-b border-t">
            <div className="flex flex-col gap-[20px]">
                <h1 className="display100">Our Holiday Gift Picks</h1>
                <div className="w-[505px] h-[626px] bg-black-500"></div>
                <div>
                  <p className="text300 mb-[35px]">The best presents for everyone on your list.</p>
                  <p className="text300 underline">Read More</p>
                </div>
            </div>
            <div className="flex flex-col gap-[20px]">
                <h1 className="display100">Cleaner Fashion</h1>
                <div className="w-[505px] h-[626px] bg-black-500"></div>
                <div>
                  <p className="text300 mb-[35px]">See the sustainability efforts behind each of our products.</p>
                  <p className="text300 underline">Learn More</p>
                </div>
            </div>
          </section>
          <section className="shares flex flex-col items-center justify-between text-center gap-[12px]">
            <div className="flex flex-col justify-end gap-[20px] h-[50%]">
              <h2 className="display200">Everlane On You</h2>
              <div className="flex flex-col gap-[4px]">
                <p className="text300">Share your latest look with #EverlaneOnYou for a chance to be featured.</p>
                <p className="text300 underline">Add Your Photo</p>
              </div>
            </div>
              <ScrollSlider maxDots={12} imageNumber={12} sliderHeight={225} hasDots={false}>
                  {usersPhotos.map((_, index) => {
                    return(
                      <div key={index} className="w-[225px] h-[225px] bg-black-500 flex justify-end items-start p-[10px]">
                        <CartButton/>
                      </div>
                    )
                  })}
              </ScrollSlider>
          </section>
          <section className="description flex justify-center items-center text-center pb-[90px] pt-[90px] pl-[77px] pr-[77px]">
            <div className="flex flex-col justify-center items-center pl-[50px] pr-[50px]">
              <Box/>
              <p className="text300 mt-[20px] mb-[4px]"><b>Complimentary Shipping</b></p>
              <p className="text300">Enjoy free shipping on U.S. orders over $100.</p>
            </div>
            <div className="flex flex-col justify-center items-center pl-[50px] pr-[50px]">
              <Recycle/>
              <p className="text300 mt-[20px] mb-[4px]"><b>Consciously Crafted</b></p>
              <p className="text300">Designed with you and the planet in mind.</p>
            </div>
            <div className="flex flex-col justify-center items-center pl-[50px] pr-[50px]">
              <MapPointer/>
              <p className="text300 mt-[20px] mb-[4px]"><b>Come Say Hi</b></p>
              <p className="text300">We have 11 stores across the U.S.</p>
            </div>
          </section>
        </main>
      </>
      );
}

export default MainTemplate