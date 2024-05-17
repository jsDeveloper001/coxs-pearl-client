import { Link } from 'react-router-dom';

const Room = ({ room }) => {
    return (
        <div className='border'>
            <Link to={`${room._id}`}>
                <img src={room.images[0]} alt="" className='w-full h-1/2' />
            </Link>
        </div>
    );
};

export default Room;