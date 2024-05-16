import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Services/FirebaseAuth";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, loading, Logout } = useContext(AuthContext)
    const HandleLogout = () => {
        Logout()
            .then(user => toast.success("Logged out"))
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to={'/'} className={({ isActive }) => isActive ? "text-blue-400" : ""} >Home</NavLink></li>
                        <li><NavLink to={'/rooms'} className={({ isActive }) => isActive ? "text-blue-400" : ""} >Rooms</NavLink></li>
                        <li><NavLink to={'/booking'} className={({ isActive }) => isActive ? "text-blue-400" : ""} >My Bookings</NavLink></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Cox's Pearl</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={'/'} className={({ isActive }) => isActive ? "text-blue-400" : ""} >Home</NavLink></li>
                    <li><NavLink to={'/rooms'} className={({ isActive }) => isActive ? "text-blue-400" : ""} >Rooms</NavLink></li>
                    <li><NavLink to={'/booking'} className={({ isActive }) => isActive ? "text-blue-400" : ""} >My Bookings</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="display photo" src={user.photoURL} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-blue-200">
                                <li>
                                    <a className="justify-between">
                                        {user.displayName}
                                    </a>
                                </li>
                                <li><button className="btn btn-primary" onClick={HandleLogout}>Logout</button></li>
                            </ul>
                        </div>
                        :
                        loading ?
                            <span className="text-orange-400 loading loading-lg"></span>
                            :
                            <div className="flex gap-1">
                                <Link to={'/login'} className="btn bg-green-600 text-white">Login</Link>
                                <Link to={'/register'} className="btn bg-orange-600 text-white">Register</Link>
                            </div>
                }
            </div>
        </div>
    );
};

export default Navbar;