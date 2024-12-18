import React from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

function Login() {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='container bg-[#f8a5a5] h-[70vh] w-[30vw] mt-32 rounded-xl'>
        {/* Heading Section */}
        <div className='heading mt-8 text-center'>
          <h1 className='text-4xl font-semibold'>ADMIN Pannel</h1>
          <br />
          <h1 className='-my-4 text-sm'>CONNECT MEDS</h1>
        </div>

        {/* Form Section */}
        <div className='form mx-28 my-16 space-y-4'>
          <label className='text-xl'>Email</label>
          <br />
          <input className='email w-64 h-9 rounded-lg border border-gray-300' />
          <br />
          <label className='py-4 text-xl'>Password</label>
          <br />
          <input className='password w-64 h-9 rounded-lg border border-gray-300' />
          <br />
          {/* Centered Button */}
          <Link to="/admin-pannel" className='mx-2 my-60 relative top-8'><button className='bg-black text-white items-center px-4 py-2 w-full h-12 rounded-lg '>
          ADMIN LOGIN
        </button></Link>
        </div>
        <div className='text-center relative -bottom-4'>
        <Link to="/signup" className=' font-semibold'>
          CREATE ADMIN
        </Link>
      </div>
      </div>
      
      {/* Using Link to go to the Signup page */}
      
    </div>
  );
}

export default Login;
