import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../CommonStyle/Common.css';
import { AuthContext } from '../../contexts/AuthProvider';
import Swal from 'sweetalert2'

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
        navigate(from, {replace: true});
        
      })
      .catch(error => {
        console.error(error)
        setError(error.message)
      })


    console.log(email, password);
  }
  return (
    <div className='common-w'>
      <div className="bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/2">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;