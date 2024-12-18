import React from 'react'
import Admin_pannel from './Admin_pannel'

function Register() {
  return (
    <div className='flex'>
        <div className='left w-[22vw] h-screen'><Admin_pannel/></div>
        <div className='right w-[78.5vw] h-screen '>
            <div className='top flex gap-x-72 mt-10'>
                <h1 className='text-3xl font-bold'>CONNECT MEDS</h1>
                <div className='flex space-x-28  '>
                 <input  className='w-72 h-12 rounded-md p-4 bg-[#d9d9d9]' placeholder='SORT REFERAL/CONSULTANT'/>
                 <input className='w-60 h-12 rounded-md p-4 bg-[#d9d9d9]'placeholder='APLHBET WISE...(CITY'/>
                </div>
            </div>
            <div className='table w-screen mt-16'>
            <table className="table-auto border-collapse border  w-[72vw] ml-10 border-none p-10 text-3xl ">
            <thead className='mt-24'>
              <tr className="border-black border-t-2 border-b-2 ">
                <th className="w-40 ">NAME</th>
                <th className="w-28 ">CODE</th>
                <th className="w-28 ">Age</th>
                <th className="w-28 ">JOINED</th>
                <th className="w-48 ">PHONE</th>
                <th className="w-36 ">CITY</th>
                <th className="w-60 ">ADDRESS</th>
              </tr>
            </thead>
            {/* <tbody>
              {tableData.map((row) => (
                <tr key={row.id} className="hover:bg-gray-200">
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {row.id}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">{row.name}</td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {row.age}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">{row.role}</td>
                </tr>
              ))}
            </tbody> */}
          </table>
            </div>
        </div>
    </div>
  )
}

export default Register