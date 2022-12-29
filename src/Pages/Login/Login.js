import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../CommonStyle/Common.css';
import { AuthContext } from '../../contexts/AuthProvider';
import logo from '../../assets/image/99119-know-your-customer-authentication.gif'
import Swal from 'sweetalert2'
import GoogleLogin from '../Shared/GoogleLogin/GoogleLogin';

const Login = () => {
  const [error, setError] = useState('');
  const { signIn } = useContext(AuthContext);
  const [loginUserEmail, setLoginUserEmail] = useState('');
  // const [token] =useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  // if(token){
  //    navigate(from, {replace: true});
  // }

  const handleLogin = event => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(email)



        setError('')
        // toast('Login successfully')
        Swal.fire(
          'YourLogin is Successfully',
          'Welcome to our shop!',
          'success'
        )
        navigate(from, { replace: true });

      })
      .catch(error => {
        console.error(error)
        setError(error.message)
      })


    console.log(email, password);
  }
  return (
    <div className='common-w'>
      <div className="bg-base-100 mb-8">
        <div className="flex gap-5 flex-col md:flex-row">
          <div className="lg:mt-8">
            <img className='w-full lg:w-5/6' src={logo} alt="" />
          </div>
          <div className='lg:ml-8 lg:mt-8'>
            <div className=" w-full  p-6 shadow-2xl ">
              <form onSubmit={handleLogin}>
                <div>
                  <h3 className='text-2xl font-semibold text-center pb-5'>Login</h3>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input type="email" name='email' required className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Password</span>
                  </label>
                  <input type="password" name='password' required className="input input-bordered" />
                  <label className="label">
                    <span className="label-text font-semibold text-red-700">{error}</span>
                  </label>
                  <label className="label">
                    <Link to='/' className="label-text-alt link link-hover">Forgot password?</Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input type="submit" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white" value="Login" />
                </div>

              </form>
              <p className='py-2'>Don't have an account? <Link className='font-bold text-blue-800' to='/register'>Create new account</Link></p>
              <div className="flex flex-col w-full border-opacity-50">
                {/* <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div> */}
                <div className="divider">OR</div>
                {/* <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div> */}
              </div>
              <div>
                <GoogleLogin></GoogleLogin>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;