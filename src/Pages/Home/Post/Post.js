import React from 'react';
import { Link } from 'react-router-dom';

const Post = () => {

  const handelPost = event => {
    event.preventDefault()
    const form = event.target
    const text =form.text.value;
    const media =form.media.value;
    console.log(text, media);
    // form.reset()

  }


  return (
    <div>
      <div className='py-40 flex justify-center items-center'>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
          <div className="card-body">
            <form onSubmit={handelPost}>
              <div>
                <h3 className='text-2xl font-semibold text-center pb-5'>Add To Your Post</h3>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Text</span>
                </label>
                <input type="text" name='text' placeholder="What's your mind" required className="input input-bordered input-accent w-full max-w-xs" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Photo</span>
                </label>
                <input type="file" name='media' required className="file-input file-input-bordered file-input-accent w-full max-w-xs" />
                <label className="label">
                  {/* <span className="label-text font-semibold text-red-700">{error}</span> */}
                </label>
               
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white" value="Post" />
              </div>
            </form>
            
          </div>

        </div>
      </div>
    </div>
  );
};

export default Post;