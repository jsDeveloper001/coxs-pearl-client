import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Room from "../../components/Room/Room";

const Rooms = () => {
    const [Rooms, setRooms] = useState([])
    // const [Loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get("http://localhost:5000/rooms")
            .then(Res => setRooms(Res.data))
    }, [])

    return (
        <div>
            <Helmet>
                <title>Cox's Pearl | Rooms</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    Rooms.map(room => <Room key={room._id} room={room}></Room>)
                }
            </div>
        </div>
    );
};

export default Rooms;