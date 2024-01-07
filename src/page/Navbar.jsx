import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <>
   
    <nav className="navbar">
      <div className='dd'>
        <a className='h5'href='/'>ッتعلم بابتسامة</a>
      
   </div>
   
      <Link to="/">الصفحة الرئيسة</Link>
      <Link to="/contact">تواصلوا معنا</Link>
      <Link to="/signup">تسجيل</Link>
      <Link to="/login">دخول</Link>

      </nav></>
  )
}

export default Navbar;
