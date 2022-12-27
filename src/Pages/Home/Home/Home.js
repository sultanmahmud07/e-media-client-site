import React from 'react';
import Banner from '../Banner/Banner';
import Post from '../Post/Post';
import TopPost from './TopPost/TopPost';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Post></Post>
      <TopPost></TopPost>
    </div>
  );
};

export default Home;