import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const Register = () => {
  const {createUser, updateUser} =useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('')


  const handleSigiUp = (data) => {
    createUser(data.email, data.password)
    .then(result => {
      const user = result.user
      console.log(user);

      const userInfo = {
        displayName: data.name
      }
      updateUser(userInfo)
        .then(() => {
          toast.success("Your user name updated successfully")
         
          // saveUser(data.name, data.email, data.role)

        })
        .catch(err => console.log(err))
    })
    .catch(error => {
      console.error(error)
    })


    const userData = {
      userName: data.name,
      email: data.email,
      password: data.password,
      photoURL: data.photo_url,
      university: data.university,
      location: data.address
    }
    console.log(userData);

  }

  return (
    <div className='common-w pb-40'>
      <div className='flex lg:flex-row flex-col'>
        <div className='w-full'>
          <h1>img</h1>
        </div>
        <div className='w-full'>
          <h1 className='text-center text-4xl font-bold'>Register Now</h1>
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
            </div>


            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white" value="SignUp" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;