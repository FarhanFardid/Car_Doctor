import prod1 from '../../assets/images/products/1.png'
import prod2 from '../../assets/images/products/4.png'
import prod3 from '../../assets/images/products/3.png'
import prod4 from '../../assets/images/products/2.png'

const Products = () => {
    return (
        <div className="text-center p-5 space-y-3 bg-slate-300">
        <h3 className="text-4xl text-orange-600 font-bold ">Popular Products</h3>
        <h5 className="text-3xl text-slate-800 font-medium">Browse Our Products</h5>
        <p className="px-20 pb-4">We not only provide top-notch car maintenance and repair services but also offer a selection of high-quality products to enhance your driving experience and keep your vehicle in optimal condition.</p>


        <div className="grid md:grid-cols-4 grid-cols-1 pb-4 gap-2">
        <div className="card card-compact  bg-gray-400 shadow-xl p-3  ">
  <figure className='mx-auto'><img src={prod1} alt="p1" className="w-60 h-44  rounded-md  " /></figure>
  <div className="card-body mx-auto text-center ">
    <h2 className="card-title text-2xl font-medium ">Brake Disk</h2>
    <p className="text-lg font-bold text-orange-700 text-left">Price: $40.00</p>
    <button className="btn w-28 mx-auto bg-orange-500">Buy Now</button>
    
  </div>
</div>
<div className="card card-compact  bg-gray-400 shadow-xl p-3  ">
  <figure className='mx-auto'><img src={prod2} alt="p2" className="w-60 h-44  rounded-md  " /></figure>
  <div className="card-body mx-auto text-center">
    <h2 className="card-title text-2xl font-medium ">Battery</h2>
    <p className="text-lg font-bold text-orange-700 text-left">Price: $50.00</p>
    <button className="btn w-28 mx-auto bg-orange-500">Buy Now</button>
    
  </div>
</div> 
  <div className="card card-compact  bg-gray-400 shadow-xl p-3  ">
  <figure className='mx-auto'><img src={prod3} alt="p3" className="w-60 h-44  rounded-md  " /></figure>
  <div className="card-body mx-auto text-center">
    <h2 className="card-title text-2xl font-medium ">Air Filter</h2>
    <p className="text-lg font-bold text-orange-700 text-left">Price: $25.00</p>
    <button className="btn w-28 mx-auto bg-orange-500">Buy Now</button>
    
  </div>
</div>
   <div className="card card-compact  bg-gray-400 shadow-xl p-3  ">
  <figure className='mx-auto'><img src={prod4} alt="p4" className="w-60 h-44  rounded-md " /></figure>
  <div className="card-body mx-auto text-center">
    <h2 className="card-title text-2xl font-medium ">Suspension</h2>
    <p className="text-lg font-bold text-orange-700 text-left">Price: $150.00</p>
    <button className="btn w-28 mx-auto bg-orange-500">Buy Now</button>
    
  </div>
</div>
        </div>
        <button className="btn bg-orange-600 ">More Products</button>
    </div>
    );
};

export default Products;