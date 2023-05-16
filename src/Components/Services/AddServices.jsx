import serviceBan1 from '../../assets/images/banner/4.jpg'

const AddServices = () => {
    return (
        <>
        <div className="hero h-[450px]" style={{ backgroundImage: `url(${serviceBan1})` }}>
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="text-neutral-content">
          <div className="text-left">
            <h1 className="mb-5 text-5xl font-bold  text-red-700">Add New Service</h1>
            <p className="mb-5 text-white">Enhancing your driving experience with our exceptional car garage service.
</p>
            <button className="btn bg-slate-500"> Car Service </button>
          </div>
        </div>
      </div>
      <form className=" p-20 bg-slate-300">
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
      </form>
     
      </>
    );
};

export default AddServices;