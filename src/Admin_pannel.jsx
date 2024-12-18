import React from 'react'
import { FaUsers } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { BiSolidMessageRoundedDetail } from "react-icons/bi";
import { BsClipboard2PulseFill } from "react-icons/bs";
import { VscFeedback } from "react-icons/vsc";
import { RiAdminFill } from "react-icons/ri";
import Apps from './assets/app.png'; // Correct path 
import User from "./assets/user.png";
import { Link, NavLink } from 'react-router-dom';

function Admin_pannel() {
  return (
    <div>
      <div className='left bg-[#f8a5a5] w-[20vw] h-screen text-lg text-center'>
        <h1 className='text-3xl font-bold py-10'>ADMIN PORTAL</h1>
        <ul className='text-center text-xl'>
          <NavLink to="/register">
            {({ isActive }) => (
              <li
                className={`flex gap-4 border-t-2 border-[#ac9b9b] text-center p-2 ${
                  isActive ? 'bg-[#c28181]' : ''
                }`}
              >
                <FaUsers className='my-1.5 mx-4' />
                REGISTERED USERS
              </li>
            )}
          </NavLink>

          <NavLink to="/setting">
            {({ isActive }) => (
              <li
                className={`flex gap-4 border-t-2 border-[#ac9b9b] text-center p-2 ${
                  isActive ? 'bg-[#c28181]' : ''
                }`}
              >
                <IoSettingsSharp className='my-1.5 mx-4' />
                SETTINGS
              </li>
            )}
          </NavLink>

          <NavLink to="/">
            
              <li
                className="flex gap-4 border-t-2 border-[#ac9b9b] text-center text-[red]"
              >
                <FiLogOut className="my-1.5 mx-4 " />
                LOGOUT
              </li>
            
          </NavLink>

          <NavLink to="/message">
            {({ isActive }) => (
              <li
                className={`flex gap-4 border-t-2 border-[#ac9b9b] text-center ${
                  isActive ? 'bg-[#c28181]' : ''
                }`}
              >
                <BiSolidMessageRoundedDetail className="my-1.5 mx-4" />
                MESSAGE
              </li>
            )}
          </NavLink>

          <NavLink to="/report">
            {({ isActive }) => (
              <li
                className={`flex gap-4 border-t-2 border-[#ac9b9b] text-center ${
                  isActive ? 'bg-[#c28181]' : ''
                }`}
              >
                <BsClipboard2PulseFill className="my-1.5 mx-4" />
                REPORTS
              </li>
            )}
          </NavLink>

          <NavLink to="/feed">
            {({ isActive }) => (
              <li
                className={`flex gap-4 border-t-2 border-[#ac9b9b] text-center ${
                  isActive ? 'bg-[#c28181]' : ''
                }`}
              >
                <VscFeedback className="my-1.5 mx-4" />
                FEEDBACK
              </li>
            )}
          </NavLink>

          <NavLink to="/charge">
            {({ isActive }) => (
              <li
                className={`flex gap-4 border-t-2 border-[#ac9b9b] text-center ${
                  isActive ? 'bg-[#c28181]' : ''
                }`}
              >
                <img src={Apps} alt="cost" className="w-5 h-5 my-1.5 mx-4" />
                APP CHARGES
              </li>
            )}
          </NavLink>

          <NavLink to="/cons">
            {({ isActive }) => (
              <li
                className={`flex gap-4 border-t-2 border-b-2 border-[#ac9b9b] text-center ${
                  isActive ? 'bg-[#c28181]' : ''
                }`}
              >
                <FaUsers className="my-1.5 mx-4" />
                CONSULTANTS
              </li>
            )}
          </NavLink>

          <li className='flex gap-4 border-[#ac9b9b] text-center mt-10'></li>
          <NavLink to="/admins">
            {({ isActive }) => (
              <li
                className={`flex gap-4 border-t-2 border-b-2 border-[#ac9b9b] text-center ${
                  isActive ? 'bg-[#c28181]' : ''
                }`}
              >
                <RiAdminFill className="my-1.5 mx-4" />
                ADMINS
              </li>
            )}
          </NavLink>

          <li className='flex mt-10'></li>
          <NavLink to="/fill">
            {({ isActive }) => (
              <li
                className={`flex gap-4 border-t-2 border-b-2 border-[#ac9b9b] text-center ${
                  isActive ? 'bg-[#c28181]' : ''
                }`}
              >
                <img src={User} alt="User" className="w-5 h-5 my-1.5 mx-4" />
                APPOINTMENTS
              </li>
            )}
          </NavLink>
        </ul>
      </div>
      
    </div>
  );
}

export default Admin_pannel;
