import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Swal from 'sweetalert2'
import '../../../CommonStyle/Common.css';

const Post = () => {
  const {user} =useContext(AuthContext)
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('')
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate =useNavigate();
  // console.log(imageHostKey);

  const handelPost = data => {
    setDisable(true)
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
                  fetch('https://e-media-server-site.vercel.app/allMedia', {
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
                    navigate('/about')
                    setDisable(false)
                  })
      }
    })

  }


  return (
    <div className='post-banner'>
      <div className='py-40 flex justify-center items-center'>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <div className="card-body">
            <form onSubmit={handleSubmit(handelPost)}>

              <div>
                <h3 className='text-4xl font-semibold text-center text-white pb-5'>Add To Your Post</h3>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-white">Text</span>
                </label>
                <input type="text" placeholder="Whats's on your mind" {...register("text", { required: true })} className="input input-bordered input-primary w-full max-w-xs" />
                {errors.name && <span className='text-red-700'>Please provited text message</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-white">Photo/Media</span>
                </label>
                <input type="file" required {...register("image", { required: true })} className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                {errors.image && <span className='text-red-700'>Please provited your photo</span>}
              </div>
              <div className="form-control mt-6">
                {
                  user?.email ? <input type="submit" disabled={disable} className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full" value="Post" /> : <Link to='/login'><input type="text" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full" value="Login Now" /></Link>
                }
              </div>
            </form>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Post;