import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Swal from 'sweetalert2'

const Post = () => {
  const {user} =useContext(AuthContext)
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('')
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  // console.log(imageHostKey);

  const handelPost = data => {

    // const text_description= data.text;
    const image = data.image[0]
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgData => {
      if (imgData.success) {
        // console.log(imgData.data.url);
        const media = {
          id: "67",
          user_name: user?.displayName ? user?.displayName : "User Name",
          user_img: user?.photoURL ? user?.photoURL : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
          img: imgData.data.url,
          live_link: "https://sq-doctors-lab.web.app/",
          address: "Dhaka, Bangladesh",
          active: user?.email,
          backup: "extra",
          likes: "0",
          comment: "0",
          text_description: data.text,

        }
        console.log(media);
                  // save product information to the database >>>>>
                  fetch('http://localhost:5000/allMedia', {
                    method: 'POST',
                    headers: {
                      'content-type': 'application/json',
                      // authorization:  `bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(media)
                  })
                  .then(res => res.json())
                  .then(result => {
                    console.log(result);
                    Swal.fire(
                      `Your Post added successfully`,
                      'You clicked the button!',
                      'success'
                    )
                    // navigate('/dashboard/myproducts')
                  })
      }
    })

  }


  return (
    <div>
      <div className='py-40 flex justify-center items-center'>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <div className="card-body">
            <form onSubmit={handleSubmit(handelPost)}>

              <div>
                <h3 className='text-2xl font-semibold text-center pb-5'>Add To Your Post</h3>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input type="text" placeholder='enter your full name' {...register("text", { required: true })} className="input input-bordered" />
                {errors.name && <span className='text-red-700'>Please provited your name</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Product image</span>
                </label>
                <input type="file" required {...register("image", { required: true })} className="input input-bordered" />
                {errors.image && <span className='text-red-700'>Please provited your photo</span>}
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white" value="Post" />
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Post;