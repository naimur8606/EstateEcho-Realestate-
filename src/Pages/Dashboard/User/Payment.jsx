import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet-async";


// TODO: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = () => {

    return (
        <div className="min-h-screen flex justify-center items-center">
            <Helmet>
                <title>EstateEcho | Payment</title>
            </Helmet>
            <div className="w-11/12 md:w-2/3 shadow-lg p-10 rounded-lg">
                <h2 className="text-3xl font-bold text-center mb-14">Pay by Card</h2>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;