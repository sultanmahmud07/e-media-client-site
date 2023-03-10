// import React, { useContext } from 'react';
// import toast from 'react-hot-toast';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import '../../../CommonStyle/Common.css'
import { AuthContext } from '../../../contexts/AuthProvider';
import Swal from 'sweetalert2'
import { FaSearch } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../../contexts/AuthProvider';
// import logo from '../../../Assat/phone-img/shop (1).png'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire(
          'Your LogOut is Successfully',
          '',
          'success'
        )
      })
      .catch(error => console.error(error))
    // console.log("clikd");
  }


  const manuItems = <React.Fragment>
    <li>
      <div className="relative p-0">
        <input type="text" placeholder="Search E-zoon" className="input input-bordered w-full pr-16" />
        <button className="btn bg-gray-300 text-white text-xl border-none absolute top-0 right-0 rounded-l-none"><FaSearch></FaSearch></button>
      </div>
    </li>
    <li><Link className='font-semibold' to="/home">Home</Link></li>
    <li><Link className='font-semibold' to="/media">Media</Link></li>
    <li><Link className='font-semibold' to="/about">About</Link></li>
    <li><Link className='font-semibold' to="/message">Message</Link></li>

    {/* {
    user?.uid &&  <li><Link className='font-semibold' to="/dashboard">Dashboard</Link></li>
  } */}
    {
      user?.uid ? <li><button onClick={handleSignOut} className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white text-white font-bold'>Sign Out</button></li> : <li><Link className='btn btn-primary bg-gradient-to-r from-primary to-secondary text-white text-white font-bold' to="/login">Login</Link></li>
    }
  </React.Fragment>
  return (
    <div className='shadow-lg mb-5 '>
      <div className='common-w'>
        <div className="navbar flex justify-between">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                {
                  manuItems
                }
              </ul>
            </div>
            <Link to='/'>
              <div className='flex items-end'>
                {/* <img className='w-14 h-14' src={logo} alt="" /> */}
                <div className=" text-2xl font-semibold"><span className='text-primary text-5xl font-bold'>E</span>-Media<span className='text-secondary text-4xl font-bold'>Z</span>oon</div>
              </div>
            </Link>

          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              {
                manuItems
              }
            </ul>
          </div>
          {/* <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;