
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import google from '../../assets/images/team/google Icon.png'
const Login = () => {
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col items-center justify-center lg:flex-row p-20">
    <div className="mx-auto p-3 ">
        <img src={login} alt="login img" />
 
    </div>
    <div className="card  w-full max-w-sm shadow-2xl bg-base-100 mx-auto  ml-10 ">
      <form className="card-body ">
        <h3 className='text-2xl font-bold text-center p-3'>Sign In Please</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="your email" name="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="your password" name="password" className="input input-bordered" />
         
        </div>
        <div className="form-control mt-6">
          <input  type="submit" className="btn bg-orange-600" value="Sign In"></input>
     
        </div>
      </form>
      <div className='text-center '>
      <p className='text-center pb-1'>or Sign In with</p>
      <button className="btn btn-circle btn-outline h-5 w-15">
 <img src={google} alt="" />
</button>

<p className='p-2 text-sm'>Don`t Have an Account? <Link className='font-medium text-blue-800' to='/signUp'>Sign Up</Link></p>
      </div>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;