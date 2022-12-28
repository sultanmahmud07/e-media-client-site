import React from 'react';
import { BiLike } from 'react-icons/bi';
import { CgComment } from 'react-icons/cg';
import { FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../../../CommonStyle/Common.css'
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
  const { id, _id, img, likes, comment, user_name, user_img, address, text_description } = useLoaderData();
  console.log((id));
  return (
  <div className='common-w'>
      <div className="card card-compact w-full bg-base-100 shadow-2xl">
      <div>
        <div className='flex justify-start'>
          <div class="avatar online w-14">
            <div class="w-24 rounded-full">
              <img src={user_img} />
            </div>
          </div>
          <div className='pl-2'>
            <h3>{user_name}</h3>
            <p className='text-sm text-gray-500'>{address}</p>
          </div>
        </div>
        <img className='w-full' src={img} alt="Shoes" /></div>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>{text_description}</p>
        <div className="card-actions justify-between items-center">
        <div className="card-actions justify-between items-center w-1/2">
            <div className='flex items-center gap-2'><BiLike className='text-3xl cursor-pointer '></BiLike><span>{likes}</span></div>
            <div className='flex items-center gap-2'><CgComment className='text-3xl cursor-pointer'></CgComment><span>{comment}</span></div>
            
            <FaShare className='text-3xl cursor-pointer'></FaShare>
          </div>
          <Link to={`/details/${_id}`}>
            <button className="btn btn-primary text-white">Details</button>

          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PostDetails;