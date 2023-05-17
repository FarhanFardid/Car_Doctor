import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Service = () => {
  const [services,setServices] = useState([]);
  useEffect(()=>{
       fetch('http://localhost:5000/services')
       .then(res => res.json())
       .then (data => setServices(data))
    
    
  },[])

    return (
        <div className="text-center p-5 space-y-3">
            <h3 className="text-4xl text-orange-600 font-bold ">Services</h3>
            <h5 className="text-3xl text-slate-800 font-medium">Our Service Area</h5>
            <p className="px-20 pb-4 ">We offer a comprehensive range of services to meet all your car maintenance and repair needs. Our skilled technicians are equipped to handle various makes and models, ensuring that your vehicle receives the care it deserves.</p>


            <div className="grid md:grid-cols-3 grid-cols-1 pb-4">
                {
                    services.map(service=> <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <button className="btn bg-orange-600 ">More services</button>
        </div>
    );
};

export default Service;