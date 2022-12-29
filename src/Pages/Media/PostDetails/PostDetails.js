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
      <div className="card relative card-compact w-full bg-base-100 shadow-2xl  pb-28">
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
          <img className='w-full' src={img} alt="Shoes" /></div>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>{text_description}</p>
          <div className="card-actions justify-between items-center border-t-2 pb-10">
            <div className="card-actions justify-between items-center w-1/2">
              <div className='flex items-center gap-2'><BiLike className='text-3xl cursor-pointer '></BiLike><span>{likes}</span> Link</div>
              <div className='flex items-center gap-2'><CgComment className='text-3xl cursor-pointer'></CgComment><span>{comment}</span> Comment</div>

              <div className='flex items-center gap-2'><FaShare className='text-3xl cursor-pointer'></FaShare><span>23</span> Share</div>
            </div>
            <Link className='text-2xl font-semibold hover:text-blue-600' to={`/details/${_id}`}>
              All Comments

            </Link>

          </div>
          <div className=' bottom-0 left-0 w-full p-5'>
            <div className="relative w-full">
              <input type="text" placeholder="Add your comment" className="input input-bordered w-full pr-16" />
              <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white absolute top-0 right-0 rounded-l-none">Comment</button>
            </div>
          </div>
        </div>
        {/* comment section  */}
        <div className='p-10'>
          <div className='flex gap-5 flex-col'>
            <div className='flex'>
              <div className="avatar">
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                </div>
              </div>
              <div className='pl-5'>
                <p className='pb-2 font-bold text-xl'>Rasel Ahamed</p>
                <p>Wow! This is very effective post</p>
              </div>
            </div>
            <div className='flex'>
              <div className="avatar">
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                </div>
              </div>
              <div className='pl-5'>
                <p className='pb-2 font-bold text-xl'>Md Nazmul</p>
                <p>On the flip side, when a customer gushes over your company publicly, are you liable to do your happy dance?</p>
              </div>
            </div>
            <div className='flex'>
              <div className="avatar">
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <div className='pl-5'>
                <p className='pb-2 font-bold text-xl'>Alom Khan</p>
                <p>If you want to generate more positive reviews, it helps to know what an excellent review really looks like. You might be thinking, “Duh, I know this already, people say nice things about my business.”</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;