import { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Navigation,  } from 'swiper/modules';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import CommonTitle from '../../Shared-Components/CommonTitle';
import { FaUser } from 'react-icons/fa';

const UserReviews = () => {
    const axiosPublic = useAxiosPublic()
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        axiosPublic('/Reviews')
            .then(res => setReviews(res.data))

    }, [axiosPublic])
    const slider = reviews?.map(review => <SwiperSlide key={review._id}>
        <div className="flex flex-col items-center text-center mx-5 md:mx-24 md:my-16">
            {
                review?.reviewerImage ? <img className='h-32 w-32 mx-auto rounded-[50%] mb-5' src={review?.reviewerImage} alt="" /> :
                    <FaUser className="text-7xl"></FaUser>
            }
            <h5 className='text-xl font-semibold md:text-2xl my-1'><span className='font-normal'>Property:</span> {review?.propertyTitle}</h5>
            <h4 className='font-semibold md:text-xl my-1'><span className='font-normal'>Reviewer:</span> {review?.reviewerName}</h4>
            <p className='text-justify md:text-center font-normal'>{review?.reviewDescription}</p>
        </div>
    </SwiperSlide>
    )
    return (
        <div className=' w-[97%] lg:w-full mx-auto'>
            <CommonTitle title={"Latest Reviews"}></CommonTitle>
            <div className=''>
                <Swiper
                    pagination={{
                        type: 'progressbar',
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {slider}
                </Swiper>
            </div>
        </div>
    );
};

export default UserReviews;