import service from '../../assets/images/services/2.jpg'

const ServiceCart = () => {
    return (
        <div className="hero h-[450px]" style={{ backgroundImage: `url(${service})` }}>
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="text-neutral-content">
          <div className="text-left">
            <h1 className="mb-5 text-5xl font-bold  text-red-700">Service Cart</h1>
            <p className="mb-5 text-white">Enhancing your driving experience with our exceptional car garage service.
</p>
            <button className="btn bg-slate-500"> Car Service </button>
          </div>
        </div>
      </div>
    );
};

export default ServiceCart;