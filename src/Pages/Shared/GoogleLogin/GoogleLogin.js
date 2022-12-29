import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
// import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
// import useToken from '../../../hooks/UseToken';

const GoogleLogin = () => {
  const {googleSignIn} =useContext(AuthContext);
  const [googlUserEmail, setGoogleUserEmail] = useState('');
  // const [token] =useToken(googlUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  // if(token){
  //   navigate(from, {replace: true});
  // }
  const handleGoogle = () => {
    googleSignIn()
    .then(result => {
      const user = result.user;
      console.log(user);
      // setGoogleUserEmail(user?.email)
      const name =user.displayName
      const email =user.email
      const photoURL =user.photoURL
      const university ="No University/Collage set"
      const address ="No address set"
      // saveUser(name, email, role)
      saveUser(name, email, photoURL, university, address)
      
      toast('Google Login Successfully')
      navigate(from, {replace: true});
    })
    .catch(error => {
      console.log(error)
    })
  }



  // Post user information in database >>>>>>>
  const saveUser = (userName, email, photoURL, university, location) => {
    const user = { userName, email, photoURL, university, location };
    fetch('https://e-media-server-site.vercel.app/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log('save user', data);
        // setCreateUserEmail(email)
        // getUserToken(email)


      })
    // console.log(user);
  }


  return (
    <div>
      <button onClick={handleGoogle} className="btn btn-outline btn-primary w-full">CONTINUE WITH GOOGLE</button>
    </div>
  );
};

export default GoogleLogin;