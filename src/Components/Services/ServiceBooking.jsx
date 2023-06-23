
import { useLoaderData } from 'react-router-dom';
import bookImg from '../../assets/images/checkout/checkout.png'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
const ServiceBooking = () => {
  const {user} = useContext(AuthContext);
  const bookedService = useLoaderData();
  const {_id,title,price,img} = bookedService;
  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const email= form.email.value;
    const date= form.date.value;
    const service = form.service.value;
    const price = form.price.value;
    const bookingDetail={
      email,
      date,
      service,
      price,
    img,
    service_id: _id}

    fetch('https://car-server-alpha-one.vercel.app/bookings',{
      method: 'POST',
      headers:{
        'content-type': "application/json"
      },
      body:JSON.stringify(bookingDetail)
    })
    .then (res => res.json())
    .then(data =>{console.log(data)
    if(data.insertedId){
      alert("Service Booked Successfully")
    }})

    console.log(bookingDetail);
    
  }
    return (
        <>
        <div className="hero h-[450px]" style={{ backgroundImage: `url(${bookImg})` }}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="text-neutral-content">
          <div className="text-left">
            <h1 className="mb-5 text-5xl font-bold  text-red-700"> Service Booking</h1>
            <p className="mb-5 text-white">Streamline your car maintenance with hassle-free service bookings at our trusted car garage.<br></br>
Experience convenient and reliable service bookings for your vehicle at our renowned car garage.
</p>
            <button className="btn bg-orange-600"> Ready to Serve </button>
          </div>
        </div>
      </div>
      <form onSubmit={handleBooking} className=" p-20 bg-slate-300">
      <div className="flex flex-col w-full lg:flex-row ">
  <div className="grid flex-grow  card bg-base-300  place-items-left p-3">
  <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="Enter Email" name="email" defaultValue={user?.email
} className="input input-bordered" required />
         
        </div>
  <div className="form-control">
          <label className="label">
            <span className="label-text">Service Name</span>
          </label>
          <input type="text" placeholder="Enter Service" name="service" defaultValue={title} className="input input-bordered" required/>
         
        </div>
    </div> 

  <div className="grid flex-grow  card bg-base-300  place-items-left p-3">
  <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" placeholder="Enter date" name="date" className="input input-bordered" required />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price ($)</span>
          </label>
          <input type="text" placeholder="Enter Service " name="price" defaultValue={price} className="input input-bordered" required />
         
        </div>
  </div>
</div>
 <input type="submit" className='btn w-full mt-5' value="Book The Service" />
      </form>
     
      </>
    );
};

export default ServiceBooking;