import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';

const SwiperSlider = () => {
  return (

    <>
      <h1 className='text-4xl font-bold text-center my-4'>Swiper Gallery</h1>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={5}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
        }}
        navigation={{
          clickable: true
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper "
      >
        <SwiperSlide className='relative'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1oIhNU4Ifq8njIvrFGtMOPybX4OvMcN5cPA&s" alt="" className='h-72 w-full rounded-3xl' />

        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src="https://www.hindustantimes.com/ht-img/img/2023/12/21/900x1600/Goa_beach_1703159127088_1703159130243.jpg" alt="" className='h-72 w-full rounded-3xl' />

        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src="https://static.toiimg.com/photo/80110361/80110361.jpg" alt="" className='h-72 w-full rounded-3xl' />

        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src="https://static.toiimg.com/photo/80110361/80110361.jpg" alt="" className='h-72 w-full rounded-3xl' />

        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src="https://www.hindustantimes.com/ht-img/img/2023/12/21/900x1600/Goa_beach_1703159127088_1703159130243.jpg" alt="" className='h-72 w-full rounded-3xl' />

        </SwiperSlide>
        <SwiperSlide className='relative'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1oIhNU4Ifq8njIvrFGtMOPybX4OvMcN5cPA&s" alt="" className='h-72 w-full rounded-3xl' />

        </SwiperSlide>

        <div className="slider-controler w-full">
          
          <div className="swiper-pagination relative -bottom-5 pt-2">

          </div>
        </div>

      </Swiper>
    </>
  )
}

export default SwiperSlider