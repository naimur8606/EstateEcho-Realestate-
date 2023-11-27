
const AddReview = () => {
    return (
        <div className="w-[97%] lg:w-full mx-auto mb-5">
            <h1 className="text-2xl font-bold mb-2">Create A Review:</h1>
            <textarea placeholder="Write a review..." className="p-1 w-full border border-[#8bff11] rounded-md" name="" id="" cols="" rows="5"></textarea>
            <button className="my-2 bg-[#7dd321] hover:bg-black px-6 py-2 rounded-md font-semibold text-white text-xl">Add Review</button>
        </div>
    );
};

export default AddReview;