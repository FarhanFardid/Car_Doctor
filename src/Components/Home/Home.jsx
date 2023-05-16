import About from "./About";
import Banner from "./Banner";
import Products from "./Products";
import Service from "./Service";
import Team from "./Team";


const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Products></Products>
            <Team></Team>
        </div>
    );
};

export default Home;