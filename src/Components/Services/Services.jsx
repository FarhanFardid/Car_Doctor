import serviceBan1 from '../../assets/images/banner/4.jpg'
import { useEffect, useState } from "react";
import ServiceCard from '../Home/ServiceCard';


const Services = () => {
  const [services,setServices] = useState([]);
  useEffect(()=>{
       fetch('https://car-server-alpha-one.vercel.app/services')
       .then(res => res.json())
       .then (data => setServices(data))
    
    
  },[])
    return (
        <>
        <div className="hero h-[450px]" style={{ backgroundImage: `url(${serviceBan1})` }}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="text-neutral-content">
          <div className="text-left">
            <h1 className="mb-5 text-5xl font-bold  text-red-700">Our Services</h1>
            <p className="mb-5 text-white">Enhancing your driving experience with our exceptional car garage service.
</p>
            <button className="btn bg-slate-500"> Car Service </button>
          </div>
        </div>
      </div>
      <div className="text-center p-5 space-y-3" id="services">
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
      
      {/* <form className=" p-20 bg-slate-300">
      <div className="flex flex-col w-full lg:flex-row ">
  <div className="grid flex-grow  card bg-base-300  place-items-left p-3">
  <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input type="text" placeholder="Enter Service Name" name="Name" className="input input-bordered" />
         
        </div>
  <div className="form-control">
          <label className="label">
            <span className="label-text">Service Price</span>
          </label>
          <input type="text" placeholder="Enter Service Price" name="price" className="input input-bordered" />
         
        </div>
    </div> 

  <div className="grid flex-grow  card bg-base-300  place-items-left p-3">
  <div className="form-control">
          <label className="label">
            <span className="label-text">Service Category</span>
          </label>
          <input type="text" placeholder="Enter Service Category" name="category" className="input input-bordered" />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service Details</span>
          </label>
          <input type="text" placeholder="Enter Service Details" name="details" className="input input-bordered" />
         
        </div>
  </div>
</div>
 <input type="submit" className='btn w-full mt-5' value="Add service" />
      </form> */}
     
      </>
    );
};

export default Services;