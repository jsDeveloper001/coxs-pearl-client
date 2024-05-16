import { Helmet } from "react-helmet-async";
import Banner from "../../components/Header/Banner";
import MyMap from "../../components/Map/Map";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Cox's Pearl | Home</title>
            </Helmet>
            <Banner />

            <MyMap />
        </div>
    );
};

export default Home;