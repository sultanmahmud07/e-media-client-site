import React from 'react';
import '../../CommonStyle/Common.css';
import Spinner from '../Shared/Spinner/Spinner';

const Message = () => {
  return (
    <div className='common-w'>
      <div className='flex justify-center items-center mt-9 py-32'>
      <h1 className='flex text-secondary font-bold text-7xl items-end'>C<Spinner></Spinner>ming S<Spinner></Spinner>ne!</h1>
      </div>
      
    </div>
  );
};

export default Message;