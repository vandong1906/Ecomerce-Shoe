import * as React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import myImage from "../../assets/Giay-Nau.webp";
import myImage1 from "../../assets/image-54-2048x711-2.webp";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    const images = [
       myImage,
       myImage1,    
    ];

    return <>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500, 
          disableOnInteraction: false,
        }}
       
        navigation={true} 
        modules={[Autoplay, Navigation]} 
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto max-h-dvh object-contain rounded-lg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
}

export default Banner;