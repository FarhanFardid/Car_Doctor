import ban1 from '../../assets/images/homeCarousel/1.jpg'
import ban2 from '../../assets/images/homeCarousel/2.jpg'
import ban3 from '../../assets/images/homeCarousel/3.jpg'
import ban4 from '../../assets/images/homeCarousel/4.jpg'

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full h-full  ">
          <img src={ban1} className="w-full h-fit rounded-xl" />
          <div className="absolute h-full flex items-center  left-0 top-0  rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-12 w-2/3 h-full pt-20  '>
                <h2 className='text-5xl text-white p-2 font-bold'>Affordable Price For Car Servicing</h2>
                <p className='p-2'>Take care of your car in the garage, and the car will take care of you on the road</p>
                <div>   <button className="btn bg-red-700 mx-3">Discover More</button>
                <button className="btn btn-outline text-white border border-4 border-white">Latest Projects</button></div>
             
            </div>
            </div>
            <div className="absolute flex   right-11 bottom-1">
            <a href="#slide4" className="btn btn-circle mr-4 bg-orange-500">❮</a> 
            <a href="#slide2" className="btn btn-circle bg-orange-500">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full h-full  ">
          <img src={ban2} className="w-full h-fit rounded-xl" />
          <div className="absolute h-full flex items-center  left-0 top-0  rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-12 w-2/3 h-full pt-20  '>
                <h2 className='text-5xl text-white p-2 font-bold'>Affordable Price For Car Servicing</h2>
                <p className='p-2'>Take care of your car in the garage, and the car will take care of you on the road</p>
                <div>   <button className="btn bg-red-700 mx-3">Discover More</button>
                <button className="btn btn-outline text-white border border-4 border-white">Latest Projects</button></div>
             
            </div>
            </div>
            <div className="absolute flex   right-11 bottom-1">
            <a href="#slide1" className="btn btn-circle mr-4 bg-orange-500">❮</a> 
            <a href="#slide3" className="btn btn-circle bg-orange-500">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full h-full  ">
          <img src={ban3} className="w-full h-fit rounded-xl" />
          <div className="absolute h-full flex items-center  left-0 top-0  rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-12 w-2/3 h-full pt-20  '>
                <h2 className='text-5xl text-white p-2 font-bold'>Affordable Price For Car Servicing</h2>
                <p className='p-2'>Take care of your car in the garage, and the car will take care of you on the road</p>
                <div>   <button className="btn bg-red-700 mx-3">Discover More</button>
                <button className="btn btn-outline text-white border border-4 border-white">Latest Projects</button></div>
             
            </div>
            </div>
            <div className="absolute flex   right-11 bottom-1">
            <a href="#slide2" className="btn btn-circle mr-4 bg-orange-500">❮</a> 
            <a href="#slide4" className="btn btn-circle bg-orange-500">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full h-full  ">
          <img src={ban4} className="w-full h-fit rounded-xl" />
          <div className="absolute h-full flex items-center  left-0 top-0  rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className='text-white space-y-7 pl-12 w-2/3 h-full pt-20  '>
                <h2 className='text-5xl text-white p-2 font-bold'>Affordable Price For Car Servicing</h2>
                <p className='p-2'>Take care of your car in the garage, and the car will take care of you on the road</p>
                <div>   <button className="btn bg-red-700 mx-3">Discover More</button>
                <button className="btn btn-outline text-white border border-4 border-white">Latest Projects</button></div>
             
            </div>
            </div>
            <div className="absolute flex   right-11 bottom-1">
            <a href="#slide3" className="btn btn-circle mr-4 bg-orange-500">❮</a> 
            <a href="#slide1" className="btn btn-circle bg-orange-500">❯</a>
          </div>
        </div> 
      </div>
    );
};

export default Banner;