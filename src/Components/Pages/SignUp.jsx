import { Link, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import google from '../../assets/images/team/google Icon.png'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {
const navigate = useNavigate();
  const {createUser,userUpdate,googleUser} = useContext(AuthContext);
   const signUpHandle = event =>{
    event.preventDefault();
    const form = event.target;
    const name= form.name.value;
    const email= form.email.value;
    const password = form.password.value;
    console.log(name,email,password);

    createUser(email,password)
    .then(res => {
      const signedUser = res.user;
      userUpdate(signedUser,name)
      console.log(signedUser);
      form.reset()
      navigate('/login')
  })
  .catch(error=>console.log(error))
}
const googleHandle=()=>{
  googleUser()
  .then(res=>{
    const signedUser = res.user;
    console.log(signedUser);
    navigate('/')
  })
}

    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
<div className="hero-content flex-col items-center justify-center lg:flex-row p-20">
 <div className="mx-auto p-3 ">
     <img src={login} alt="login img" />

 </div>
 <div className="card  w-full max-w-sm shadow-2xl bg-base-100 mx-auto  ml-10 ">
   <form onSubmit={signUpHandle} className="card-body ">
     <h3 className='text-2xl font-bold text-center p-3'>Sign Up Please</h3>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Name</span>
       </label>
       <input type="text" placeholder="your name" name="name" className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Email</span>
       </label>
       <input type="text" placeholder="your email" name="email" className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Password</span>
       </label>
       <input type="password" placeholder="your password" name="password" className="input input-bordered" required/>
      
     </div>
     <div className="form-control mt-6">
       <input  type="submit" className="btn bg-orange-600" value="Sign Up"></input>
  
     </div>
   </form>
   <div className='text-center '>
   <p className='text-center pb-1'>or Sign Up with</p>
   <button onClick={googleHandle} className="btn btn-circle btn-outline h-5 w-15">
<img src={google} alt="" />
</button>

<p className='p-2 text-sm'>Already Have an Account? <Link className='font-medium text-blue-800' to='/login'>Sign In</Link></p>
   </div>
 
 </div>
</div>
</div>
     </div>
    );
};

export default SignUp;