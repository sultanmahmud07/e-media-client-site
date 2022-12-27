import React from 'react';
import PostCard from './PostCard/PostCard';
import '../../../../CommonStyle/Common.css'

const TopPost = () => {
  return (
    <div className='common-w pb-9'>
    <h1 className='py-4 text-3xl' p>Top 3 Post</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
        <PostCard></PostCard>
        <PostCard></PostCard>
        <PostCard></PostCard>
      </div>
    </div>
  );
};

export default TopPost;