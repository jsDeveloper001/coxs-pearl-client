import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../Styles/Global.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='mb-14'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={true}
                pagination={{
                    clickable: true,
                    dynamicBullets: true
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                keyboard={{ enabled: true }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/73/e4/37/ascott-the-residence.jpg?w=1200&h=-1&s=1" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iZL7PD0djCSA/v2/-1x-1.jpg" alt="Slider Image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://htl-img-res-new.s3.ap-south-1.amazonaws.com/2769/20221022/main.jpg" alt="Slider Image" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://qtxasset.com/quartz/qcloud1/media/image/2016-11/luxury-hotel.jpg?VersionId=jwpLrYKSbPkvgQIy8HQPTLTvCWi9RJhS" alt="Slider Image" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;