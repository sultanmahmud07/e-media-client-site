import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Spinner from '../Shared/Spinner/Spinner';
import MyMedia from './MyMedia/MyMedia';
import Swal from 'sweetalert2'
import Post from '../Home/Post/Post';

const About = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([])
  const [mediaData, setMediaData] = useState([])
  const navigation = useNavigation();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  // const url = `https://final-project-server-zeta.vercel.app/bookings?email=${user?.email}`
  const url = `https://e-media-server-site.vercel.app/users/${user?.email}`

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
  }, [])


  // user all post data loaded 
  const urlTow = `https://e-media-server-site.vercel.app/allMedias?email=${user?.email}`
  useEffect(() => {
    fetch(urlTow)
      .then(res => res.json())
      .then(data => {
        setMediaData(data)
        setLoading(false)
      })
  }, [])

  // console.log(data);
  // console.log(mediaData);

  const handleUpdateProfules = event => {
    event.preventDefault();
    const form = event.target;
    const userName = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const university = form.university.value;
    const location = form.address.value;
    const newData = {
      userName,
      email,
      photoURL,
      university,
      location
    }
    console.log(newData);
    // console.log('object');
    fetch(`https://e-media-server-site.vercel.app/users/${data._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire(
            'YourLogin is Successfully',
            'Welcome to our shop!',
            'success'
          )
          navigate('/')
          setLoading(false)
        }
        console.log(data);
      })

  }

  if (loading) {
    return <div className='py-28'><Spinner></Spinner></div>
  }

  return (
    <div className='common-w'>
      {/* <h1>This is About section</h1> */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pb-24'>
        <div className='w-full'>
          <div className='flex justify-end bg-base-300'> <label htmlFor="my-modal-3" className="btn btn-accent">Edit</label></div>
          <div className='flex flex-col bg-base-300 items-center justify-center'>
            <div className='w-full'>
              <div className="avatar justify-center w-full">
                <div className="w-1/2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img className='w-full' src={data.photoURL} alt="" />
                </div>
              </div>
            </div>
            <div className='py-3 text-center '>
              <p className='text-xl font-semibold'>Name: <span className='font-normal'>{data.userName}</span></p>
              <p className='text-xl font-semibold'>Email: <span className='font-normal'>{data.email}</span></p>
              <p className='text-xl font-semibold'>Address: <span className='font-normal'>{data.location}</span></p>
              <p className='text-xl font-semibold'>University/Collage: <span className='font-normal'>{data.university}</span></p>
            </div>
          </div>
          {/* The button to open modal */}
          {/* <label htmlFor="my-modal-3" className="btn btn-accent">Edit</label> */}

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="text-lg font-bold">Update your profiles information</h3>
              {/* <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> */}
              <div>
                <form onSubmit={handleUpdateProfules} className='grid grid-cols-1 gap-3 mt-10'>
                  <span className='p-0 m-0 font-semibold'>Full name</span>
                  <input name="name" type="text" defaultValue={data.userName} placeholder="Your Name" className="input w-full input-bordered" required />
                  <span className='p-0 m-0 font-semibold'>Email</span>
                  <input name="email" type="email" defaultValue={user?.email} readOnly placeholder="Email Address" className="input w-full input-bordered" required />
                  <span className='p-0 m-0 font-semibold'>University/Collage</span>
                  <input name="university" type="text" defaultValue={data.university} placeholder="Your University" className="input w-full input-bordered" required />
                  <span className='p-0 m-0 font-semibold'>Address</span>
                  <input name="address" type="text" defaultValue={data.location} placeholder="Your address" className="input w-full input-bordered" required />
                  <span className='p-0 m-0 font-semibold'>Profile URL</span>
                  <input name="photoURL" type="url" defaultValue={data.photoURL} placeholder="Your address" className="input w-full input-bordered" required />
                  {/* <textarea name="location" placeholder="Your Meeting location" className="textarea w-full textarea-bordered" required ></textarea> */}
                  <br />
                  {
                    user?.email ? <input className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full' type="submit" value="Update Now" /> : <Link to='/login'><input className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full' type="text" value="Please login before the booking" /></Link>
                  }
                </form>
              </div>
            </div>
          </div>
          {/* Friends section  */}
          <div className=''>
            <p className='p-5 w-full text-2xl font-bold'>All friends</p>
            <div className='grid grid-cols-3 gap-5'>

              <div className='flex flex-col w-full gap-3'>
                <div className='w-full'>
                  <img className='w-full' src="https://us.123rf.com/450wm/mialima/mialima1603/mialima160300025/mialima160300025.jpg?ver=6" alt="" />
                </div>
                <p>User Name</p>
              </div>
              <div className='flex flex-col w-full gap-3'>
                <div className='w-full'>
                  <img className='w-full' src="https://us.123rf.com/450wm/mialima/mialima1603/mialima160300025/mialima160300025.jpg?ver=6" alt="" />
                </div>
                <p>User Name</p>
              </div>
              <div className='flex flex-col w-full gap-3'>
                <div className='w-full'>
                  <img className='w-full' src="https://us.123rf.com/450wm/mialima/mialima1603/mialima160300025/mialima160300025.jpg?ver=6" alt="" />
                </div>
                <p>User Name</p>
              </div>
              <div className='flex flex-col w-full gap-3'>
                <div className='w-full'>
                  <img className='w-full' src="https://us.123rf.com/450wm/mialima/mialima1603/mialima160300025/mialima160300025.jpg?ver=6" alt="" />
                </div>
                <p>User Name</p>
              </div>
              <div className='flex flex-col w-full gap-3'>
                <div className='w-full'>
                  <img className='w-full' src="https://us.123rf.com/450wm/mialima/mialima1603/mialima160300025/mialima160300025.jpg?ver=6" alt="" />
                </div>
                <p>User Name</p>
              </div>
              <div className='flex flex-col w-full gap-3'>
                <div className='w-full'>
                  <img className='w-full' src="https://us.123rf.com/450wm/mialima/mialima1603/mialima160300025/mialima160300025.jpg?ver=6" alt="" />
                </div>
                <p>User Name</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Post></Post>
          <h1 className='p-5 font-bold text-3xl'>Recently post</h1>
          {
            mediaData.length !== 0 ?
              <div className='grid grid-cols-1 gap-8'>
                {
                  mediaData.map(media => <MyMedia
                    key={media._id}
                    media={media}
                  ></MyMedia>)
                }
              </div>
              :
              <p className='text-primary pt-6 text-4xl font-bold text-center'>You have no posts</p>
          }
        </div>
      </div>
    </div>
  );
};

export default About;