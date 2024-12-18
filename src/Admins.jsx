import React from 'react'
import Admin_pannel from './Admin_pannel'

function Admins() {
  return (
    <div className='flex'>
        <div className='left w-[22vw] h-screen'><Admin_pannel/></div>
        <div className='right w-[78.5vw] h-screen mt-10 ml-10'>
            
            <h1 className='text-3xl font-bold'>CONNECT MEDS</h1>

            <div className=' mt-24 ml-10'>
           
            <table className='w-[40vw] mt-10 text-left'>
            <thead className=''>
            <tr className="border-black border-t-2 border-b-2">
            <th className="w-28 p-2">USERNAME</th>
            <th className="w-28 p-2">ROLE</th>
            </tr>
          </thead>
          </table>
              </div>
            </div>
            </div>
  )
}

export default Admins