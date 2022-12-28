import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
  const {id, _id, img,} = useLoaderData();
  console.log((id));
  return (
    <div>
      <h1>This is Details page!!</h1>
    </div>
  );
};

export default PostDetails;