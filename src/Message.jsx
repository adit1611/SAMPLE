import React from 'react'
import Admin_pannel from './Admin_pannel'

function Message() {
  return (
    <div className='flex'>
        <div className='left w-[22vw] h-screen'>
        <Admin_pannel/>
        </div>
        <div className='right w-[77vw] h-screen '>
            <div className='top mt-10'>
            <h1 className='text-3xl font-bold'>CONNECT MEDS</h1>
            </div>
            <div className='bottom mx-24 my-10'>
                <div className='text-3xl space-y-10 '>
                 <h1>SEND MESSAGE</h1>
                 <h1 className='font-bold'>ENTER MESSAGE</h1>
                </div>
                <div className="text-lg mt-10 w-80 ">
                <form className="flex flex-col gap-y-2">
                 {/* Username Label and Input */}
                <label htmlFor="username" className="font-semibold text-black">
                 TITTLE
                </label>
                <input
                    id="username"
                    type="text"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="DR NAME.."
                    />

                    {/* Password Label and Input */}
                    <label htmlFor="address" className="font-semibold text-black">
                    ADDRESS
                    </label>
                    <input
                    id="address"
                    type="text"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="CLINIC ADDRESSS...."
                    />
                    <label htmlFor="description" className="font-semibold text-black">
                    DESCRIPTION
                    </label>
                    <input
                    id="description"
                    type="text"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="MAX 50 WORDS"
                    />
                    <label htmlFor="link" className="font-semibold text-black">
                    LINK
                    </label>
                    <input
                    id="link"
                    type="url"
                    className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="MAX 50 WORDS"
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

export default Message