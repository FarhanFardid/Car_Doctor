

const ServiceCard = ({service}) => {
    const {title,img,price} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-3">
  <figure ><img src={img} alt="services" className="w-full h-48  rounded-md border " /></figure>
  <div className="card-body">
    <h2 className="card-title text-2xl font-medium">{title}</h2>
    <p className="text-lg font-bold text-orange-500 text-left">Price: ${price}</p>
    <button className="btn w-36 mx-auto bg-orange-500">Service Details</button>
    
  </div>
</div>
    );
};

export default ServiceCard;