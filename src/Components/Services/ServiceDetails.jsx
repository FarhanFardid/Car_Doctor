import { useLoaderData } from "react-router-dom";


const ServiceDetails = () => {
    const loadedService = useLoaderData();
    const {_id,title,img,price,description,facility
    } = loadedService;
    console.log(loadedService);
    return (
        <div className="hero h-[650px]" style={{ backgroundImage: `url(${img})` }}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="text-neutral-content ">
          <div className="text-left p-8">
            <h1 className="mb-5 text-5xl font-bold  text-red-700"> Service Details</h1>
            <h3 className="text-3xl font-medium my-2">{title}</h3>
            <p className="mb-5 text-white">{description}

</p>
<div>
    <h5 className="text-2xl font-bold text-orange-700 p-2">Facilities We Provide: </h5>
    {
        facility.map(fcs => <li className="p-1">  {fcs.name}  </li> )
    }
</div>
            <button className="btn bg-orange-600 mt-5 hover:bg-red-700"> ${price}  </button>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetails;