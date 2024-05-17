import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Services/FirebaseAuth";
import { useContext } from "react";
import Swal from "sweetalert2";

const RoomDetails = () => {
    const room = useLoaderData()
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    const HandleBook = () => {
        if (user) {
            return Swal.fire({
                title: "Are you sure to Book?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Book it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Booked!",
                        text: "Your room has been Booked.",
                        icon: "success"
                    });
                }
            });
        }
        return navigate("/login")
    }
    console.log(room)

    return (
        <div>
            <div className='border'>
                <img src={room.images[0]} alt="" className='w-full h-1/2' />
                <h2>{room.availability}</h2>
                <p>{room.description}</p>
                <button className='btn btn-primary text-white' onClick={HandleBook}>Book Now</button>
            </div>
        </div>
    );
};

export default RoomDetails;