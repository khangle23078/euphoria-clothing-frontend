import { Navigation } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import '@styles/style.css'

const ProductImageSlides = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation]}
        navigation={true}
        className="max-w-[500px]"
        id="product-image-slides"
      >
        <SwiperSlide>
          <img className="max-w-[400x] h-[450px]" src="https://i.pinimg.com/736x/2e/88/a5/2e88a52be17ccbce0306aae0a295138c.jpg" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="max-w-[400x] h-[450px]" src="https://i.pinimg.com/736x/2e/88/a5/2e88a52be17ccbce0306aae0a295138c.jpg" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="max-w-[400x] h-[450px]" src="https://i.pinimg.com/736x/2e/88/a5/2e88a52be17ccbce0306aae0a295138c.jpg" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="max-w-[400x] h-[450px]" src="https://i.pinimg.com/736x/2e/88/a5/2e88a52be17ccbce0306aae0a295138c.jpg" loading="lazy" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="max-w-[400x] h-[450px]" src="https://i.pinimg.com/736x/2e/88/a5/2e88a52be17ccbce0306aae0a295138c.jpg" loading="lazy" />
        </SwiperSlide>
      </Swiper>
    </div >
  )
}

export default ProductImageSlides