import React from 'react'
import Admin_pannel from './Admin_pannel'

function Charge() {
  return (
    <div className='flex'>
        <div className='left w-[22vw] h-screen'><Admin_pannel/></div>
        <div className='right w-[78.5vw] h-screen '>
            
            <h1 className='text-3xl font-bold'>CONNECT MEDS</h1>
            <div className=' mt-24  '>
           
            <table className='w-[54vw] mt-10 ml-14'>
            <thead className='text-left text-2xl text-semibold'>
            <tr className="border-black border-t-2 border-b-2">
            <th className="w-40 py-2">CON NAME</th>
            <th className="w-36 text-left py-2 ">CODE</th>
            <th className="w-32 text-left py-2 ">HANDLE</th>
            <th className="w-32 text-left py-2 ">CHARGES</th>
            <th className="w-32 text-left py-2 ">MARK</th>
            </tr>
          </thead>
          </table>
              </div>
            </div>
            </div>
  )
}

export default Charge