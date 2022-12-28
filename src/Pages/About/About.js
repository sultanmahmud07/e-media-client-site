import React, { useContext, useEffect, useState } from 'react';
import { useNavigation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const About = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState([])
  const navigation = useNavigation();
  // const url = `https://final-project-server-zeta.vercel.app/bookings?email=${user?.email}`
  const url = `http://localhost:5000/users/${user?.email}`

  // const { data: bookings = [] } = useQuery({
  //   queryKey: ['bookings', user?.email],
  //   queryFn: async () => {
  //     const res = await fetch(url, {
  //       headers: {
  //         authorization: `bearer ${localStorage.getItem('accessToken')}`
  //       }
  //     });
  //     const data = await res.json();
  //     // console.log(data);
  //     return data;
  //   }
  // })

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setData(data))
  }, [])

  console.log(data);
  if(navigation.state === "loading"){
    return <p>Loading.....</p>
  }
  return (
    <div className='common-w'>
      {/* <h1>This is About section</h1> */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 pb-24'>
        <div className='w-full'>
          <div className='flex justify-end'><button className="btn btn-secondary">Edit</button></div>
          <div className="avatar w-full">
            <div className="w-1/2 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img className='w-full' src={data.photoURL} alt="" />
            </div>
          </div>
          <div className='py-3'>
            <p className='text-xl font-semibold'>Name: <span className='font-normal'>{data.userName}</span></p>
            <p className='text-xl font-semibold'>Address: {data.location}</p>
            <p className='text-xl font-semibold'>University/Collage: {data.university}</p>
          </div>
        </div>
        <div>
          <h1>My Post</h1>
        </div>
      </div>
    </div>
  );
};

export default About;