"use client"

import { useContext, useState } from 'react';
import { FaSkullCrossbones,FaEye,FaEyeSlash } from "react-icons/fa";
import { UserContext } from '../context/Contextapi';
import Link from 'next/link';
import { postUsers } from './Constant';




const Signup = () => {
   const { setEmail,email,password,setPassword} = useContext(UserContext)
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

 

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email,
      password
    }
    const apipoint = "/api/postAuth"
    postUsers(apipoint,data)

  };


  return (
    <div className="min-h-screen  flex items-center justify-center">
        
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 mt-20">
            
          <div className="drawer-content bg-white rounded-lg p-8 w-[85%] sm:w-[80%] lg:w-[60%] sm:flex  justify-between  ">
          <div className='sm:mr-10'>
          <h2 className="text-2xl font-bold mb-4">Sign-Up-Here</h2>

            <p className='font-roboto text-blue-700'>Get access to your Orders, Wishlist and Recommendations</p>
            <img src='/img/card-trolly-image.jpg' alt='Trolley Image' className='mt-5 sm:mt-10 lg:mt-20 mb:5 object-contain  relative bottom-0 rounded-full h-40 '/>
          </div>
          <div className=''>
          <span
              className="close-btn sm:relative sm:top-1 sm:right-2 absolute top-44 right-12 cursor-pointer sm:flex sm:justify-end"
            >
               <Link href="/"> <FaSkullCrossbones /></Link>
            </span>

            <form className="mb-4 w-full" onSubmit={handleSubmit}>
              {error && <p className="text-red-500 mb-4">{error}</p>}

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  required= {true}
                  className="w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                  
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-600 text-sm font-semibold mb-2">
                  Password:
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    className=" w-full border rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                    required={true}
                  />
                  <button
                    type="button"
                    onClick={()=>setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2"
                  >
                    {showPassword ? <FaEye/> : <FaEyeSlash/>}
                  </button>
                </div>
              </div>
                <p className='text-xs pb-5'>By continuing, you agree to E-Shop's <span className='text-blue-600'>Terms of Use</span > and <span className='text-blue-600'>Privacy Policy</span>.</p>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Signup
              </button>
            </form>
            <p className='font-roboto text-blue-600 text-center'>Existing User?<Link href={"/login"} >Log In</Link></p>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Signup;

