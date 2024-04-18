import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import '@styles/style.css'
import 'swiper/css';
import 'swiper/css/navigation';

const Slide = () => {
  return (
    <div className='px-3  md:px-0'>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={true}
        className='max-w-[1440px] mx-auto'
      >
        <SwiperSlide >
          <img src='https://images.unsplash.com/photo-1713190206329-5581de72285d?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='w-[1440px] object-fill h-[400px] rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide >
          <img src='https://images.unsplash.com/photo-1713145872507-3ca2c884ecc2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D'
            className='w-[1440px] object-fill h-[400px] rounded-lg'
          />
        </SwiperSlide>
        <SwiperSlide >
          <img src='https://images.unsplash.com/photo-1713201746661-7176fc733a14?q=80&w=1914&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='w-[1440px] object-fill h-[400px] rounded-lg'
          />
        </SwiperSlide>
      </Swiper>
    </div>

  )
}

export default Slide