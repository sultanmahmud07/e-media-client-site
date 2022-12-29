import React from 'react';
import PostCard from './PostCard/PostCard';
import '../../../../CommonStyle/Common.css'
import { BiLike } from 'react-icons/bi';
import { CgComment } from 'react-icons/cg';
import { FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import img  form '../../../../assets/top-post/Screenshot_1.jpg'
import img1 from '../../../../assets/top-post/Screenshot_1.jpg'
import img2 from '../../../../assets/top-post/Screenshot_2.jpg'
import img3 from '../../../../assets/top-post/Screenshot_3.jpg'

const TopPost = () => {
  return (
    <div className='common-w pb-20 pt-10'>
      <div className='flex justify-between py-3'>
      <h1 className='py-4 text-3xl' p>Top 3 Post</h1>
      <button className='btn btn-secondary'>See more</button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <div className="card card-compact w-full bg-base-100 shadow-2xl">
          <div>
            <div className='flex justify-start'>
              <div class="avatar online w-14">
                <div class="w-24 rounded-full">
                  <img src='https://img.freepik.com/premium-photo/man-glasses-with-pierced-nose-afro-hairstyle-smiling-joyfully-feeling-positive-standing-against-gray_176420-43314.jpg?w=2000' />
                </div>
              </div>
              <div className='pl-2'>
                <h3>Abdulla Hossain</h3>
                <p className='text-sm text-gray-500'>Bhola, Barishal</p>
              </div>
            </div>
            <img className='w-full' src={img2} alt="Shoes" /></div>
          <div className="card-body">
            <h2 className="card-title">Contain</h2>

            <p>Whether you want to add text to photos, collages, or designs, the right font will bring attention to your text and give your project a cohesive look. That's why the Text Editor in our online app comes packed with a diverse collection of fonts to</p>
            <div className="card-actions justify-between items-center">
              <div className="card-actions justify-between items-center w-1/2">
                <div className='flex items-center gap-2'><BiLike className='text-3xl cursor-pointer '></BiLike><span>21K</span></div>
                <div className='flex items-center gap-2'><CgComment className='text-3xl cursor-pointer'></CgComment><span>780</span></div>

                <FaShare className='text-3xl cursor-pointer'></FaShare>
              </div>
              <Link>
                <button className="btn btn-primary text-white">Details</button>

              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-2xl">
          <div>
            <div className='flex justify-start'>
              <div class="avatar online w-14">
                <div class="w-24 rounded-full">
                  <img src='https://images.unsplash.com/photo-1592234403516-69d83a03f96b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHw%3D&w=1000&q=80' />
                </div>
              </div>
              <div className='pl-2'>
                <h3>Mohammad Ali</h3>
                <p className='text-sm text-gray-500'>Harirampur, Jhitka</p>
              </div>
            </div>
            <img className='w-full' src={img3} alt="Shoes" /></div>
          <div className="card-body">
            <h2 className="card-title">Contain</h2>

            <p>Whether you want to add text to photos, collages, or designs, the right font will bring attention to your text and give your project a cohesive look. That's why the Text Editor in our online app comes packed with a diverse collection of fonts to</p>
            <div className="card-actions justify-between items-center">
              <div className="card-actions justify-between items-center w-1/2">
                <div className='flex items-center gap-2'><BiLike className='text-3xl cursor-pointer '></BiLike><span>19K</span></div>
                <div className='flex items-center gap-2'><CgComment className='text-3xl cursor-pointer'></CgComment><span>454</span></div>

                <FaShare className='text-3xl cursor-pointer'></FaShare>
              </div>
              <Link>
                <button className="btn btn-primary text-white">Details</button>

              </Link>
            </div>
          </div>
        </div>
        <div className="card card-compact w-full bg-base-100 shadow-2xl">
          <div>
            <div className='flex justify-start'>
              <div class="avatar online w-14">
                <div class="w-24 rounded-full">
                  <img src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80' />
                </div>
              </div>
              <div className='pl-2'>
                <h3>Shamim Molla</h3>
                <p className='text-sm text-gray-500'>Harirampur, Manikganj</p>
              </div>
            </div>
            <img className='w-full' src={img1} alt="Shoes" /></div>
          <div className="card-body">
            <h2 className="card-title">Contain</h2>

            <p>Whether you want to add text to photos, collages, or designs, the right font will bring attention to your text and give your project a cohesive look. That's why the Text Editor in our online app comes packed with a diverse collection of fonts to</p>
            <div className="card-actions justify-between items-center">
              <div className="card-actions justify-between items-center w-1/2">
                <div className='flex items-center gap-2'><BiLike className='text-3xl cursor-pointer '></BiLike><span>23K</span></div>
                <div className='flex items-center gap-2'><CgComment className='text-3xl cursor-pointer'></CgComment><span>980</span></div>

                <FaShare className='text-3xl cursor-pointer'></FaShare>
              </div>
              <Link>
                <button className="btn btn-primary text-white">Details</button>

              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPost;