import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import { useRef } from 'react';
import useReviews from "../../Hooks/useReview";

const AddReview = ({ id, title, agentName }) => {
    const [ , refetch] = useReviews()
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()
    const formRef = useRef(null);
    console.log(user?.displayName)
    const handleReview = e => {
        e.preventDefault()
        const formattedDateTime = new Date().toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        });
        const reviewDescription = e.target.review.value;
        const review = {
            reviewerName: user?.displayName,
            reviewerEmail: user?.email,
            reviewerImage: user?.photoURL,
            reviewDescription,
            propertyTitle: title,
            propertyId: id,
            ReviewTime: formattedDateTime,
            agentName
        }

        axiosPublic.post('/Reviews', review)
            .then(data => {
                console.log(data);
                if (data.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Review Created Successfully',
                        icon: 'success',
                        confirmButtonText: 'Yaaah'
                    })
                    if (formRef.current) {
                        formRef.current.reset();
                    }
                    refetch()
                }
            })
            .catch(err => {
                Swal.fire({
                    title: 'Warning!',
                    text: `${err.message}`,
                    icon: 'warning',
                    confirmButtonText: 'Ok'
                })
            })
    }
    return (
        <div className="w-[97%] lg:w-full mx-auto mb-5">
            <form ref={formRef} onSubmit={handleReview}>
                <h1 className="text-2xl font-bold mb-2">Create A Review:</h1>
                <textarea placeholder="Write a review..." className="p-2 w-full border border-[#8bff11] rounded-md" name="review" id="" cols="" rows="5"></textarea>
                <button type="submit" className="my-2 bg-[#7dd321] hover:bg-black px-6 py-2 rounded-md font-semibold text-white text-xl">Add Review</button>
            </form>
        </div>
    );
};

export default AddReview;