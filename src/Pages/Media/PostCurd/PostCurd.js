import React from 'react';
import { BiLike } from 'react-icons/bi';
import { CgComment } from 'react-icons/cg';
import { FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PostCurd = ({ media }) => {
  const { _id, img, likes, comment, text_description, user_name, user_img, address } = media;
  return (
    <div className="card relative card-compact w-full bg-base-100 shadow-2xl">
      <div>
        <div className='flex justify-start p-3'>
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
        {/* <h2 className="card-title">Shoes!</h2> */}
        <p className='p-3'>{
          text_description.length > 100 ? <span>{text_description.slice(0, 100) + '...'} <span className='text-bold text-blue-500'><Link to={`/details/${_id}`}>Read more</Link></span></span> : <span>{text_description}</span>
        }</p>
        <img className='w-full' src={img} alt="Shoes" /></div>
      <div className="card-body">

        <div className="card-actions justify-between items-center pt-6 border-b-2 pb-2 mb-16">
          <div className="card-actions justify-between items-center w-1/2">
            <div className='flex items-center gap-2'><BiLike className='text-3xl cursor-pointer '></BiLike><span>{likes}</span></div>
            <div className='flex items-center gap-2'><CgComment className='text-3xl cursor-pointer'></CgComment><span>{comment}</span></div>

            <FaShare className='text-3xl cursor-pointer'></FaShare>
          </div>
          <Link to={`/details/${_id}`}>
            <button className="btn bg-gray-500 text-white">Details</button>

          </Link>
        </div>
        <div className='absolute bottom-0 left-0 w-full p-5'>
          <div className="relative w-full">
            <input type="text" placeholder="Add your comment" className="input input-bordered w-full pr-16" />
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white absolute top-0 right-0 rounded-l-none">Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCurd;