import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Navigataion = () => {
  const {user,logout} = useContext(AuthContext);

  const handleLogout =() =>{
    logout()
    .then(()=>{
      localStorage.removeItem('car-access-token');
    })
    .catch(error=>console.log(error))
  }
  return (
    <div className="navbar bg-slate-300">
      <div className="navbar-start">
   
        <div className="dropdown navbar-center">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold"
          >
            <li>
             <Link to="/"> <a>Home</a></Link>
            </li>
           
            <li>
            <Link to='/services'> <a > Services</a></Link>
             
            </li>

            {
              user ?  <li>
              <Link to="/serviceCart"><button>My Bookings</button></Link></li> : <li></li>
              
            }
          
         
          </ul>
        </div>
        <a className=" normal-case text-xl p-1 ml-4"> <img src={logo} alt="logo" className='w-20 h-24 md:pl-4 pl-5' /> </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
          <Link to="/"><a>Home</a></Link>
           
          </li>
         
          <li>
          <Link to='/services'> <a > Services</a></Link>
            
          </li>

          {
              user ?  <li>
              <Link to="/serviceCart"><button>My Bookings</button></Link></li> : <li></li>
              
            }
        
        </ul>
      </div>
      <div className="navbar-end">
       {/* <Link to="/serviceCart"><a className="btn">Appointment</a></Link>  */}{
        user? <Link ><button className="btn bg-red-600" onClick={handleLogout}>Logout</button></Link> :
        <Link to="/login"><button className="btn bg-orange-600" >Login</button></Link>
       }
      
      </div>
    </div>
  );
};

export default Navigataion;
