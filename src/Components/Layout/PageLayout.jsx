import { Outlet } from "react-router-dom";
import Navigataion from "../Shared/Navigataion";
import Footer from "../Shared/Footer";


const PageLayout = () => {
    return (
        <div>
            <Navigataion></Navigataion>
            <Outlet></Outlet>
      <Footer></Footer>
        </div>
    );
};

export default PageLayout;