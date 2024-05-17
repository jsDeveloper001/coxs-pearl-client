import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Booking from "../Pages/Booking/Booking";
import Rooms from "../Pages/Rooms/Rooms";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/rooms',
                element: <Rooms />
            },
            {
                path: '/rooms/:id',
                element: <RoomDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/rooms/${params.id}`)
            },
            {
                path: '/booking',
                element: <PrivateRoute><Booking /></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
        ]
    }
]
)
export default router