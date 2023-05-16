import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <>    <p className='text-4xl font-bold text-red-700 text-center p-3 bg-base-200'>About Us</p>
        <div className="hero p-3 bg-base-300">
        
        <div className="hero-content flex-col lg:flex-row items-center">
            <div className='w-full relative'>
            <img src={person} className="max-w-sm rounded-lg shadow-2xl mx-auto" />
            <img src={parts} alt="parts img" className='absolute h-[200px] w-[220px] border-4 border-white rounded-md top-[107px] left-[300px]' />
            </div>
         
          <div className='w-full p-14' >
            
            <h1 className="text-4xl font-medium ">We are qualified & of experience in this field</h1>
            <p className="py-6">At Car Doctor, we take pride in providing exceptional car maintenance and repair services. Our team of highly skilled technicians is dedicated to ensuring your vehicle receives top-notch care, keeping it in optimal condition for years to come.</p>
            <button className="btn bg-orange-600">Get More Info</button>
          </div>
        </div>
      </div></>
        
    );
};

export default About;