import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    const HandleLogin = e => {
        e.preventDefault()
        const Form = e.target;
        const email = Form.email.value;
        const password = Form.password.value;

    }

    const GoogleLogin = () =>{
        
    }
    return (
        <div className="flex justify-center">
            <div className="bg-blue-400 p-5 sm:p-10 rounded-lg w-full sm:w-1/2">
                <form onSubmit={HandleLogin}>
                    <input type="email" placeholder="your email" className="p-3 w-full" name="email" required />
                    <input type="password" placeholder="your password" className="p-3 w-full mt-5" name="password" required />
                    <button className="btn bg-green-600 text-white font-bold text-lg w-full mt-5 ">Login</button>
                </form>
                <p className="text-lg text-white mt-4">New in site? please <Link to={'/register'} className="underline text-blue-700">Register</Link></p>
                <div className="flex justify-center">
                    <button className="flex gap-1 items-center btn btn-primary text-white mt-5 text-2xl" onClick={GoogleLogin}><FaGoogle />Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;