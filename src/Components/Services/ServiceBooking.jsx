
import bookImg from '../../assets/images/checkout/checkout.png'
const ServiceBooking = () => {
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
            <button className="btn bg-slate-500"> Ready to Serve </button>
          </div>
        </div>
      </div>
      <form className=" p-20 bg-slate-300">
      <div className="flex flex-col w-full lg:flex-row ">
  <div className="grid flex-grow  card bg-base-300  place-items-left p-3">
  <div className="form-control">
          <label className="label">
            <span className="label-text"> Name</span>
          </label>
          <input type="text" placeholder="Enter  Name" name="name" className="input input-bordered" />
         
        </div>
  <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input type="text" placeholder="Enter Phone" name="phone" className="input input-bordered" />
         
        </div>
    </div> 

  <div className="grid flex-grow  card bg-base-300  place-items-left p-3">
  <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="Enter Email" name="email" className="input input-bordered" />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Service </span>
          </label>
          <input type="text" placeholder="Enter Service " name="service" className="input input-bordered" />
         
        </div>
  </div>
</div>
 <input type="submit" className='btn w-full mt-5' value="Book a Service" />
      </form>
     
      </>
    );
};

export default ServiceBooking;