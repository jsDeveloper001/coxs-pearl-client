import { Map, Marker } from "pigeon-maps"


const MyMap = () => {
    const center = [21.43, 92.0]
    return (
        <div>
            <h2 className="text-2xl font-bold text-center mb-5 text-orange-700">Our Location:</h2>
            <Map height={300} defaultCenter={center} defaultZoom={11}>
                <Marker width={50} anchor={center} />
            </Map>
        </div>
    );
};

export default MyMap;