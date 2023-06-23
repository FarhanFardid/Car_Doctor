import { Outlet } from "react-router-dom";

import Footer from "../Shared/Footer";
import Navigation from "../Shared/Navigation";


const PageLayout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
      <Footer></Footer>
        </div>
    );
};

export default PageLayout;