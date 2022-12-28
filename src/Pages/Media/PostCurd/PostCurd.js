import React from 'react';
import { BiLike } from 'react-icons/bi';
import { CgComment } from 'react-icons/cg';
import { FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PostCurd = ({media}) => {
  const {_id, img, likes, text_description} = media;
  return (
    <div className="card card-compact w-full bg-base-100 shadow-2xl">
      <div>
        <div className='flex justify-start'>
          <div class="avatar online w-14">
            <div class="w-24 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className='pl-2'>
            <h3>Sultan Mahmud</h3>
            <p className='text-sm text-gray-500'>Manikganj, Dhaka</p>
          </div>
        </div>
        <img className='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes" /></div>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>{
            text_description.length > 100? <span>{text_description.slice(0, 100) + '...'} <Link>Read more</Link></span> : <span>{text_description}</span>
            }</p>
        <div className="card-actions justify-between items-center">
          <div className="card-actions justify-between items-center w-1/2">
            <BiLike className='text-3xl cursor-pointer '></BiLike>
            <CgComment className='text-3xl cursor-pointer'></CgComment>
            <FaShare className='text-3xl cursor-pointer'></FaShare>
          </div>
          <Link to={`/details/${_id}`}>
          <button className="btn btn-primary text-white">Details</button>

          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCurd;