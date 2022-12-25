import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonials = () => {
    return (
        <div>
            <h1 className='text-3xl text-center'>Testimonials</h1>
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div class="avatar offline">
                            <div class="w-32 rounded-full">
                                <img src="https://placeimg.com/192/192/people"alt='' />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div class="avatar offline">
                            <div class="w-32 rounded-full">
                                <img src="https://placeimg.com/192/192/people"alt='' />
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide><div class="avatar offline">
                            <div class="w-32 rounded-full">
                                <img src="https://placeimg.com/192/192/people"alt='' />
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide><div class="avatar offline">
                            <div class="w-32 rounded-full">
                                <img src="https://placeimg.com/192/192/people"alt='' />
                            </div>
                        </div></SwiperSlide>
                </Swiper>
            </>
        </div>
    );
};

export default Testimonials;