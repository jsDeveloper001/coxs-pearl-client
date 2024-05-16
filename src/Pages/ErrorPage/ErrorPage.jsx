import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center ">
            <div className="bg-amber-600 w-full sm:w-1/2 text-center rounded-lg py-14">
                <h2 className="text-4xl font-bold text-white">404!</h2>
                <p className="text-xl text-blue-600 font-bold">Page not found</p>
                <Link to={'/'}><button className="bg-green-600 rounded-lg p-3 mt-5 text-white">Go to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;