import mec1 from '../../assets/images/team/1.jpg' 
import mec2 from '../../assets/images/team/3.jpg' 
import mec3 from '../../assets/images/banner/1.jpg'

const Team = () => {
    return (
        <div className="text-center p-5 space-y-3 bg-slate-500">
        <h3 className="text-4xl text-orange-600 font-bold ">Team</h3>
        <h5 className="text-3xl text-slate-800 font-medium">Meet Our Team</h5>
        <p className="px-20 pb-4 text-white">Our success is driven by our dedicated and highly skilled team of automotive professionals. Each member of our team brings a wealth of knowledge and expertise to ensure that your vehicle receives the best care possible..</p>

        <div className="grid md:grid-cols-3 grid-cols-1 pb-4 gap-2">
        <div className="card card-compact  bg-gray-200  shadow-xl p-3  ">
  <figure className='mx-auto'><img src={mec1} alt="m1" className="w-60 h-56  rounded-md  " /></figure>
  <div className="card-body mx-auto text-center ">
    <h2 className="card-title text-2xl font-medium ">John Blake</h2>
    <p className="text-lg font-bold text-orange-700 text-left">Tire Expert</p>
    
    
  </div>
</div>
<div className="card card-compact  bg-gray-200 shadow-xl p-3  ">
  <figure className='mx-auto'><img src={mec2} alt="m2" className="w-60 h-56  rounded-md  " /></figure>
  <div className="card-body mx-auto text-center">
    <h2 className="card-title text-2xl font-medium ">Peter Brown</h2>
    <p className="text-lg font-bold text-orange-700 text-left">Electrical expert</p>

    
  </div>
</div> 
  <div className="card card-compact  bg-gray-200 shadow-xl p-3  ">
  <figure className='mx-auto'><img src={mec3} alt="m3" className="w-60 h-56  rounded-md  " /></figure>
  <div className="card-body mx-auto text-center">
    <h2 className="card-title text-2xl font-medium ">Sam Edwards </h2>
    <p className="text-lg font-bold text-orange-700 text-left">Engine Expert</p>

    
  </div>
</div>
            
        </div>
        </div>
    );
};

export default Team;