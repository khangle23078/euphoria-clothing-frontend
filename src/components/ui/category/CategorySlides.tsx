import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import '@styles/style.css'
import CategorySlide from "./CategorySlide";

const CategorySlides = () => {
  return (
    <section className="px-3 my-8 md:px-0">
      <div className="mx-auto max-w-8xl">
        <h2 className="product-slide-heading">Danh mục sản phẩm</h2>
        <Swiper
          modules={[Navigation]}
          navigation={true}
          slidesPerView={7}
          className="mt-8"
          breakpoints={{
            350: {
              width: 350,
              slidesPerView: 3,
            },
            570: {
              width: 570,
              slidesPerView: 4
            },
            980: {
              width: 980,
              slidesPerView: 5
            },
            1440: {
              width: 1440,
              slidesPerView: 7
            }
          }}
        >
          <SwiperSlide>
            <CategorySlide image="https://i.pinimg.com/736x/2e/88/a5/2e88a52be17ccbce0306aae0a295138c.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CategorySlide image="https://i.pinimg.com/736x/2e/88/a5/2e88a52be17ccbce0306aae0a295138c.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CategorySlide image="https://i.pinimg.com/736x/2e/88/a5/2e88a52be17ccbce0306aae0a295138c.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CategorySlide image="https://i.pinimg.com/736x/2e/88/a5/2e88a52be17ccbce0306aae0a295138c.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CategorySlide image="https://i.pinimg.com/736x/2e/88/a5/2e88a52be17ccbce0306aae0a295138c.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CategorySlide image="https://i.pinimg.com/736x/2e/88/a5/2e88a52be17ccbce0306aae0a295138c.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CategorySlide image="https://i.pinimg.com/736x/2e/88/a5/2e88a52be17ccbce0306aae0a295138c.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CategorySlide image="https://i.pinimg.com/736x/2e/88/a5/2e88a52be17ccbce0306aae0a295138c.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <CategorySlide image="https://i.pinimg.com/736x/2e/88/a5/2e88a52be17ccbce0306aae0a295138c.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default CategorySlides