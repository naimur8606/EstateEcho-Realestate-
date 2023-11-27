import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import CommonTitle from '../../Shared-Components/CommonTitle';

const UserReviews = () => {
    const axiosPublic = useAxiosPublic()
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        axiosPublic('/Reviews')
        .then(res => setReviews(res.data))

    },[axiosPublic])
    const slider = reviews?.map((item, idx) =>
        <SwiperSlide key={idx} className='text-center my-1 shadow-md p-5 font-medium rounded-md'>
            <img className='h-36 w-36 mx-auto rounded-[50%] mb-5' src={item?.reviewerImage} alt="" />
            <h4 className='text-2xl'><span className='font-normal'>Reviewer:</span> {item?.reviewerName}</h4>
            <h5 className='text-xl my-1'><span className='font-normal'>Property Title:</span> {item?.propertyTitle}</h5>
            <p className='text-justify font-normal'>{item?.reviewDescription}</p>
        </SwiperSlide>
    )

    return (
        <div className=' w-[97%] lg:w-full mx-auto'>
            <CommonTitle title={"Latest Reviews"}></CommonTitle>
                <div className='md:hidden'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper mb-5 mt-10 "
                >
                    {slider}
                </Swiper>

                </div>
                <div className='hidden md:block lg:hidden'>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper mb-5 mt-10"
                >
                    {slider}
                </Swiper>
                </div>
                <div className='hidden lg:block'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper mb-5 mt-10 "
                >
                    {slider}
                </Swiper>
                </div>
        </div>
    );
};

export default UserReviews;