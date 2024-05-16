import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Services/FirebaseAuth";
import { useContext } from "react";
import { updateProfile } from "firebase/auth";
import auth from "../../Services/Firebase.config";
import toast from "react-hot-toast";

const Register = () => {
    const navigate = useNavigate()
    const { user, Register } = useContext(AuthContext)

    const HandleLogin = e => {
        e.preventDefault()
        const Form = e.target;
        const name = Form.name.value;
        const email = Form.email.value;
        const password = Form.password.value;

        if (!user) {
            Register(email, password)
                .then(() => {
                    updateProfile(auth.currentUser, {
                        displayName: name
                    })
                        .then(() => {
                            toast.success("Register and Logged in")
                            navigate('/')
                        })
                        .catch(() => toast.error("invalid credentials"))
                })
                .catch(() => toast.error("invalid credentials"))
        }
    }

    return (
        <div className="flex justify-center">
            <div className="bg-blue-400 p-5 sm:p-10 rounded-lg w-full sm:w-1/2">
                <form onSubmit={HandleLogin}>
                    <input type="text" placeholder="your full name" className="p-3 w-full" name="name" required />

                    <input type="email" placeholder="your email" className="p-3 w-full mt-3" name="email" required />

                    <input type="password" placeholder="your password" className="p-3 w-full mt-5" name="password" required />

                    <button className="btn bg-green-600 text-white font-bold text-lg w-full mt-5 ">Register</button>
                </form>
                <p className="text-lg text-white mt-4">Already have an account? please <Link to={'/login'} className="underline text-blue-700">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;