import React from 'react'
import Admin_pannel from './Admin_pannel'

function Feed() {
  return (
    <div className='flex'>
        <div className='left w-[22vw] h-screen'><Admin_pannel/></div>
        <div className='right w-[78.5vw] h-screen '>
            
            <h1 className='text-3xl font-bold'>CONNECT MEDS</h1>
            <div className=' mt-24  '>
            <h1 className='text-5xl font-semibold'>FEEDBACK</h1>
            <table className='w-[54vw] mt-10 ml-14'>
            <thead className='text-left'>
            <tr className="border-black border-t-2 border-b-2">
            <th className="w-28 p-4">AS</th>
            <th className="w-28 ">FEEDBACK</th>
            </tr>
          </thead>
          </table>
              </div>
            </div>
            </div>
                 
  )
}

export default Feed