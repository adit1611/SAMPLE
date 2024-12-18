import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import Tailwind CSS
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Admin_pannel from './Admin_pannel';
import Register from './Register';
import Setting from './Setting';
import Report from './Report';
import Feed from './Feed';
import Charge from './Charge';
import Cons from './Cons';
import Fill from './Fill';
import Admins from './Admins';
import Message from './Message';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin-pannel" element={<Admin_pannel />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Message" element={<Message />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Report" element={<Report/>} />
        <Route path="/Feed" element={<Feed />} />
        <Route path="/Charge" element={<Charge />} />
        <Route path="/Cons" element={<Cons />} />
        <Route path="/Admins" element={<Admins />} />
        <Route path="/Fill" element={<Fill />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
