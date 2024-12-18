import React from 'react'

function Signup() {
  return (
    <div className='flex justify-center items-center'>
      <div className='container bg-[#f8a5a5] h-[70vh] w-[30vw] mt-32 rounded-xl'>
        {/* Heading Section */}
        <div className='heading mt-8 text-center'>
          <h1 className='text-4xl font-semibold'>CREATE ADMIN</h1>
          <br />
          <h1 className='-my-4 text-lg'>CONNECT MEDS</h1>
        </div>

        {/* Form Section */}
        <div className='form mx-28 my-16 space-y-2 '>
          <label className='text-xl '>Email</label>
          <br/>
          <input className='email w-64 h-9 rounded-lg border border-gray-300' />
          <br/>
          <label className='py-40 text-xl'>Password</label>
          <br/>
          <input className='password w-64 h-9 rounded-lg border border-gray-300' />
          <br/>
          {/* Centered Button */}
          <button className='bg-black text-white  items-center px-4 py-2 w-full h-12 rounded-lg mx-2 relative top-10'>
            CREATE ADMIN
          </button>
        </div>
      </div>
    </div>
  )
}

export default Signup;
