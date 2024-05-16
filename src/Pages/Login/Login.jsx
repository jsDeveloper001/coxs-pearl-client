import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Services/FirebaseAuth";
import { useContext } from "react";
import toast from "react-hot-toast";

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { user, GoogleLogin, Login } = useContext(AuthContext)
    const HandleLogin = e => {
        e.preventDefault()
        const Form = e.target;
        const email = Form.email.value;
        const password = Form.password.value;

        if (!user) {
            Login(email, password)
                .then(user => {
                    toast.success("Successfully Logged In")
                    navigate(location.state || '/')
                })
                .catch(error => {
                    toast.error("Invalid email/password")
                    Form.reset()
                })
        }

    }

    const GooglSignIn = () => {
        if (!user) {
            GoogleLogin()
                .then(user => {
                    toast.success("Logged in with Google")
                    navigate(location.state || '/')
                })
                .catch(error => {
                    toast.error("try again")
                })
        }
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
                    <button className="flex gap-1 items-center btn btn-primary text-white mt-5 text-2xl" onClick={GooglSignIn}><FaGoogle />Login with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;