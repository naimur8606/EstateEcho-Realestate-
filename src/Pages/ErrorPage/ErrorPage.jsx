import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center">
            <Helmet>
                <title>EstateEcho | 404 page not Found</title>
            </Helmet>
            <div>
            <img className="max-h-screen w-full" src="https://i.ibb.co/DRLqcZx/HTML-404-Page.gif" alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;