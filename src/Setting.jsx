import React from 'react'
import Admin_pannel from './Admin_pannel'
function Setting() {
  return (
    <div className='flex'>
        <div className='left w-[22vw] h-screen'>
        <Admin_pannel/>
        </div>
        <div className='right w-[77vw] h-screen '>
            <div className='top mt-10'>
            <h1 className='text-3xl font-bold'>CONNECT MEDS</h1>
            </div>
            <div className='bottom m-24'>
                <div className='text-3xl space-y-10 '>
                 <h1>SETTINGS</h1>
                 <h1 className='font-bold'>CHANGE PASSWORD</h1>
                </div>
                <div className="text-lg mt-10 w-80 ">
  <form className="flex flex-col gap-y-4">
    {/* Username Label and Input */}
    <label htmlFor="username" className="font-semibold text-black">
      USERNAME
    </label>
    <input
      id="username"
      type="text"
      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter your username"
    />

    {/* Password Label and Input */}
    <label htmlFor="password" className="font-semibold text-black">
      NEW PASSWORD
    </label>
    <input
      id="password"
      type="password"
      className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter new password"
    />

    {/* Submit Button */}
    <button
      type="submit"
      className="w-28 mt-4 bg-black text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Submit
    </button>
  </form>
</div>


            </div>
        </div>
    </div>
  )
}

export default Setting