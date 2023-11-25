import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    const sliders = [
        "https://i.ibb.co/1brBr8Z/estate-banner-4.jpg",
        "https://i.ibb.co/Wg4XS9Y/estate-banner-2.jpg",
        "https://i.ibb.co/1sHZbMC/estate-banner-7.jpg",
        "https://i.ibb.co/Bt7byv9/estate-banner-5.jpg",
        "https://i.ibb.co/SRSfKR1/estate-banner-1.jpg",
        "https://i.ibb.co/dQ81QCL/estate-banner-3.jpg",
        "https://i.ibb.co/TT5hmLY/estate-banner-6.png",
    ]
    return (
        <div className="text-center mt-[64px] md:mt-[80px]">
            <Carousel autoPlay infiniteLoop interval={3000} showStatus={false}>
                {
                sliders.map((slider, idx)=>
                <div key={idx} className="h-72 md:h-96 lg:h-[500px]">
                    <img className="h-full"  src={slider} alt="" />
                </div> 
                )
                }
                
            </Carousel>
        </div>
    );
};

export default Banner;