import React from 'react'
import Admin_pannel from './Admin_pannel'

function Fill() {
  return (
    <div className='flex'>
        <div className='left w-[22vw] max-h-full'><Admin_pannel/></div>
        <div className='right w-[78.5vw] h-screen mt-10 ml-10'>
            
        <div className='top flex gap-x-72 mt-10'>
        <h1 className='text-3xl font-bold'>CONNECT MEDS</h1>
        <div className="absolute top-10 right-10 m-4">
  <input
    className="w-72 h-12 rounded-md p-4 bg-[#d9d9d9] text-gray-800 placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="ENTER TYPE..."
  />
</div>

         </div>

            <div className=' mt-24 ml-10'>
           
            <table className='w-[66vw] mt-10 text-left '>
            <thead className='text-xl'>
            <tr className="border-black border-t-2 border-b-2">
            <th className="w-40 py-4 text-left">PT NAME</th>
            <th className="w-38 py-4 text-left">APPOINTED</th>
            <th className="w-38 py-4 text-left">REFERED</th>
            <th className="w-40 py-4 text-left">PHONE</th>
            <th className="w-32 py-4 text-left">DATE</th>
            <th className="w-28 py-4 text-left">TYPE</th>
            </tr>
          </thead>
          </table>
              </div>
            </div>
            </div>
  )
}

export default Fill