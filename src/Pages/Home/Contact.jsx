import { useRef } from "react";
import { BsTelephone } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import Swal from "sweetalert2";

const Contact = () => {
    const formRef = useRef(null);
    const form = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;
        const Message = {name, email, subject, message}
        if(Message){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your Message has been sent",
                showConfirmButton: false,
                timer: 1500
              });
              if (formRef.current) {
                formRef.current.reset();
            }
        }

    };

    return (
        <div className="bg-gray-300">
            <div id="contact" className="w-11/12 mx-auto pb-10 py-10">
                <h4 className="uppercase text-3xl font-medium text-center">Contact Us</h4>
            <div className="flex flex-col lg:flex-row justify-between mt-10">
                <div className="lg:w-1/2 pr-5">
                    <h1 className="text-[40px] md:text-6xl 2xl:text-6xl text-[#ffffff] font-semibold mb-3">ESTATE ECHO</h1>
                    <h3 className="text-lg md:text-2xl mb-3">Best Real Estate Station</h3>
                    <p className="text-gray-500 pb-5 text-justify">Have questions or need assistance? Our dedicated team is here to help! Reach out to us for any inquiries regarding property listings, account management, or general support. Your dream home is just a message away. Connect with us today to turn your real estate aspirations into reality.</p>
                    <div className="space-y-3">
                        <div className="text-xl flex items-center">
                            <BsTelephone className="text-4xl mr-3"></BsTelephone> +8001568882935
                        </div>
                        <div className="text-xl flex items-center">
                            <CgMail className="text-4xl mr-3"></CgMail> naimur2935@gmail.com
                        </div>
                        <div className="text-xl flex items-center">
                            <CiLocationOn className="text-4xl mr-3"></CiLocationOn> Dhaka-1216, Bangladesh
                        </div>
                    </div>
                </div>
                <form ref={formRef} onSubmit={(e) => form(e)} className="lg:w-1/2">
                    <input className=" w-full py-2 pl-2 my-1 text-xl bg-white text-[#0a0a0a] rounded-lg" type="text" name="name" placeholder="Your Name" required/><br />
                    <input className=" w-full py-2 pl-2 my-1 text-xl bg-white text-[#000] rounded-lg" type="email" name="email" placeholder="Your Email" required/><br />
                    <input className=" w-full py-2 pl-2 my-1 text-xl bg-white text-[#000] rounded-lg" type="text" name="subject" placeholder="Subject" required/><br />
                    <textarea className=" w-full py-2 pl-2 my-1 text-xl bg-white text-[#000] rounded-lg" id="" cols="" rows="5" name="message" placeholder="Your Message" required></textarea>
                    <button className="bg-[#7dd321] hover:bg-black px-6 py-2 rounded-md font-semibold text-white" type="submit">Sent Message</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Contact;
