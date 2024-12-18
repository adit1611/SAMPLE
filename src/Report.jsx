import React from 'react'
import Admin_pannel from './Admin_pannel'

function Report() {
  return (
    <div className='flex'>
        <div className='left w-[22vw] h-screen'><Admin_pannel/></div>
        <div className='right w-[78.5vw] h-screen '>
            <div className='top  gap-x-72 mt-10'>
                <h1 className='text-3xl font-bold'>REFERAL</h1>
                <div className='flex space-x-28  '>
                    <div className='relative top-10 left-10'>
                        <p>NO. OF INSTALLATION</p>
                        <p>NO. OF ADDED CONSULTANTS</p>
                    </div>
                    <table className='w-[54vw]'>
                    <thead className='mt-24 border-black border-2'>
                    <tr className="border-black border-2">
                      <th className="w-28 border-2 border-black">MBBS</th>
                      <th className="w-28 border-2 border-black ">BHMS</th>
                      <th className="w-28 border-2 border-black ">BAMS</th>
                      <th className="w-28 border-2 border-black ">RWA</th>
                      <th className="w-28 border-2 border-black ">CORPORATE</th>
                      <th className="w-28 border-2 border-black ">RURAL</th>
                      <th className="w-28 border-2 border-black ">CORPORATE</th>
                      <th className="w-28 border-2 border-black ">CHEMIST</th>
                    </tr>
                  </thead>
                  <tbody className='border-2 border-black'>
                        <tr className=''>
                        <td className='border-r-2 border-black text-center'>5</td>
                        <td className='border-r-2 border-black text-center'>5</td>
                        <td className='border-r-2 border-black text-center'>5</td>
                        <td className='border-r-2 border-black text-center'>5</td>
                        <td className='border-r-2 border-black text-center'>5</td>
                        <td className='border-r-2 border-black text-center'>5</td>
                        <td className='border-r-2 border-black text-center'>5</td>
                        <td className='border-r-2 border-black text-center'>5</td>
                        </tr>
                        <tr className=''>
                        <td className='border-r-2 border-black text-center'>5</td>
                        <td className='border-r-2 border-black text-center'>5</td>
                        <td className='border-r-2 border-black text-center'>5</td>
                        <td className='border-r-2 border-black text-center'>5</td>
                        <td className='border-r-2 border-black text-center'>5</td>
                        <td className='border-r-2 border-black text-center'>5</td>
                        <td className='border-r-2 border-black text-center'>5</td>
                        <td className='border-r-2 border-black text-center'>5</td>
                        
                        </tr>
                  </tbody>
                    </table>
                 </div>
            </div>
            <div className='table w-screen mt-[8vh] space-y-10'>
            <div className='space-y-6'>
                <h3 className='text-xl font-bold ml-10'>ENTER THE CONSULTANTS CODE TO SEE THE APPOINTMENTS REPORT</h3>
                <div className='flex gap-x-10 ml-14'>
                <input  className='w-72 h-12 rounded-md p-4 bg-[#d9d9d9]' placeholder='ENTER CODE......'/>
                <button
                type="submit"
                className="w-28 h-12 bg-black text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >SUBMIT</button>
                </div>
            </div>
                <div className='space-y-4'>
                    <h3>{``}</h3> {/* REFERED DETAILS */}
                    <table className="table-auto border-collapse border  w-[72vw] ml-10 border-none p-10 text-xl ">
            <thead className='mt-24'>
              <tr className="border-black border-t-2 border-b-2 ">
                <th className="w-40 text-left ">REFERAL</th>
                <th className="w-32 ">PROFILE</th>
                <th className="w-96 ">TOTAL APPOINTMENTS</th>
                <th className="w-32 ">CITY</th>
                <th className="w-48 ">RF PHONE</th>
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
    </div>
  )
}

export default Report