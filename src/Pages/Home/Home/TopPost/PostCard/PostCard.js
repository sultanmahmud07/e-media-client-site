// import React from 'react';

// const PostCard = () => {
//   return (
//     <div className="card card-compact w-full bg-base-100 shadow-2xl">
//       <div>
//         <div className='flex justify-start'>
//           <div className="avatar online w-14">
//             <div className="w-24 rounded-full">
//               <img src={user_img} />
//             </div>
//           </div>
//           <div className='pl-2'>
//             <h3>{user_name}</h3>
//             <p className='text-sm text-gray-500'>{address}</p>
//           </div>
//         </div>
//         <img className='w-full' src={img} alt="Shoes" /></div>
//       <div className="card-body">
//         <h2 className="card-title">Shoes!</h2>
//         <p>{
//           text_description.length > 100 ? <span>{text_description.slice(0, 100) + '...'} <Link>Read more</Link></span> : <span>{text_description}</span>
//         }</p>
//         <div className="card-actions justify-between items-center">
//           <div className="card-actions justify-between items-center w-1/2">
//             <div className='flex items-center gap-2'><BiLike className='text-3xl cursor-pointer '></BiLike><span>{likes}</span></div>
//             <div className='flex items-center gap-2'><CgComment className='text-3xl cursor-pointer'></CgComment><span>{comment}</span></div>

//             <FaShare className='text-3xl cursor-pointer'></FaShare>
//           </div>
//           <Link to={`/details/${_id}`}>
//             <button className="btn btn-primary text-white">Details</button>

//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostCard;