import React, { useEffect, useState } from 'react';
import '../../CommonStyle/Common.css'
import Spinner from '../Shared/Spinner/Spinner';
import PostCurd from './PostCurd/PostCurd';

const Media = () => {
  const  [medias, setMedias] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch('https://e-media-server-site.vercel.app/allMedia')
    .then(res => res.json())
    .then(data => {
      setMedias(data)
      setLoading(false);
    })
  },[])

  if(loading){
    return <div className='py-40'><Spinner></Spinner></div>
  }
  console.log(medias)
  return (
    <div className='common-w'>
      <h1 className='text-3xl py-9 font-bold'>People's posts</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-20'>
        {
          medias.map(media => <PostCurd
          key={media._id}
          media={media}
          ></PostCurd>)
        }
      </div>
      <div>
      <button className="btn btn-secondary my-12 text-white">See more</button>
      </div>
    </div>
  );
};

export default Media;