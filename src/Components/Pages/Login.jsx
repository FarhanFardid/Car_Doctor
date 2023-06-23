import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../assets/images/login/login.svg";
import google from "../../assets/images/team/google Icon.png";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
const Login = () => {
  const { loginUser, googleUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const loginHandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((res) => {
        const loggedUser = res.user;
        const user = {
          email: loggedUser.email
        }
        console.log(loggedUser);
        // jwt post
        fetch('http://localhost:5000/jwt',{
          method: 'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then (res => res.json())
        .then(data => {
          console.log('jwt token ', data)
        localStorage.setItem('car-access-token', data.token)
        navigate(from, { replace: true });
        })
        form.reset();
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const googleHandle = () => {
    googleUser()
      .then((res) => {
        const loggedUser = res.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col items-center justify-center lg:flex-row p-20">
          <div className="mx-auto p-3 ">
            <img src={login} alt="login img" />
          </div>
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100 mx-auto  ml-10 ">
            <form onSubmit={loginHandle} className="card-body ">
              <h3 className="text-2xl font-bold text-center p-3">
                Sign In Please
              </h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="your email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="your password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn bg-orange-600"
                  value="Sign In"
                ></input>
              </div>
            </form>
            <div className="text-center ">
              <p className="text-center pb-1">or Sign In with</p>
              <button
                onClick={googleHandle}
                className="btn btn-circle btn-outline h-5 w-15"
              >
                <img src={google} alt="" />
              </button>

              <p className="p-2 text-sm">
                Don`t Have an Account?{" "}
                <Link className="font-medium text-blue-800" to="/signUp">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
