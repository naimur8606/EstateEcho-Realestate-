import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaUser } from "react-icons/fa";
import useReviews from "../../Hooks/useReview";
import { useParams } from 'react-router-dom';


const SpecificPropertyReview = () => {
    const [reviews] = useReviews()
    const id = useParams()?.id;
    const SpecificReviews = reviews?.filter(item => item?.propertyId === id)
    return (
        <div className="mt-3">
            {
                SpecificReviews.length === 0 && <div className="flex items-center justify-center h-40 w-full text-2xl font-medium">
                    <h4>Add a review on this Property...!</h4>
                </div>
            }
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {
                    SpecificReviews?.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="flex flex-col items-center text-center mx-5 md:mx-24 md:my-16">
                            {
                                review?.reviewerImage ?<img className='h-32 w-32 mx-auto rounded-[50%] mb-5' src={review?.reviewerImage} alt="" /> :
                                <FaUser className="text-7xl"></FaUser>
                            }
                            <h5 className='text-xl font-semibold md:text-2xl my-1'><span className='font-normal'>Property:</span> {review?.propertyTitle}</h5>
                            <h4 className='font-semibold md:text-xl my-1'><span className='font-normal'>Reviewer:</span> {review?.reviewerName}</h4>
                            <p className='text-justify md:text-center font-normal'>{review?.reviewDescription}</p>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default SpecificPropertyReview;