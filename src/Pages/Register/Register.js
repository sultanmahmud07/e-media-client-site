import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';
import registerImg from '../../assets/image/register.gif'
import { Link, useNavigate } from 'react-router-dom';
import GoogleLogin from '../Shared/GoogleLogin/GoogleLogin';

const Register = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('')
  const navigate =useNavigate();


  const handleSigiUp = (data) => {
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user
        console.log(user);
        navigate('/');
        setError('')
        const userInfo = {
          displayName: data.name
        }
        updateUser(userInfo)
          .then(() => {
            toast.success("Your Register Successfully")

            saveUser(data.name, data.email, data.photo_url, data.university, data.address)

          })
          .catch(err => console.log(err))
      })
      .catch(error => {
        console.error(error)
        setError(error)
      })
  }

  // const userData = {
  //   userName: data.name,
  //   email: data.email,
  //   password: data.password,
  //   photoURL: data.photo_url,
  //   university: data.university,
  //   location: data.address
  // }
  // console.log(userData);





  // Post user information in database >>>>>>>
  const saveUser = (userName, email, photoURL, university, location) => {
    const user = { userName, email, photoURL, university, location };
    fetch('https://e-media-server-site.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log('save user', data);
        // setCreateUserEmail(email)
        // getUserToken(email)


      })
    // console.log(user);
  }

  return (
    <div className='common-w pb-40'>
      <h1 className='text-center text-4xl p-5 font-bold'>Register Now</h1>
      <div className='flex lg:flex-row flex-col gap-5'>
        <div className='w-full'>
          <img className='w-full' src={registerImg} alt="" />
        </div>
        <div className='w-full px-6'>
          
          <form onSubmit={handleSubmit(handleSigiUp)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Name</span>
              </label>
              <input type="text" placeholder='enter your full name' {...register("name", { required: true })} className="input input-bordered" />
              {errors.name && <span className='text-red-700'>Please provited your name</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input type="email" placeholder='enter your email' {...register("email", { required: true })} className="input input-bordered" />
              {errors.email && <span className='text-red-700'>Please provited your email</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input type="password" placeholder='enter your password' {...register("password", { required: "passwrod in required", minLength: { value: 8, message: "password must be 8 cherecters long" }, pattern: { value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/, message: 'password must be strong and induce one capital letter' } })} className="input input-bordered" />
              {errors.password && <span className='text-red-700'>{errors.password.message}</span>}
              <label className="label">
                <span className="label-text font-semibold text-red-700">{error}</span>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">PhotoURL</span>
              </label>
              <input type="url" placeholder='enter your profileURL' {...register("photo_url", { required: true })} className="input input-bordered" />
              {errors.name && <span className='text-red-700'>Please provited your profile URL</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">University/Collage</span>
              </label>
              <input type="text" placeholder='enter your university' {...register("university", { required: true })} className="input input-bordered" />
              {errors.name && <span className='text-red-700'>Please provited your University/Collage/School</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Address</span>
              </label>
              <input type="text" placeholder='enter your location' {...register("address", { required: true })} className="input input-bordered" />
              {errors.name && <span className='text-red-700'>Please provited your location</span>}
              <span className='text-red-700'>{error}</span>
            </div>


            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white" value="SignUp" />
            </div>

          </form>
          <p className='py-2'>Already have an account? <Link className='font-bold text-blue-800' to='/login'>Please login</Link></p>
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
  );
};

export default Register;