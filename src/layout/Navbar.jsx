import React from 'react'
import { NavLink } from 'react-router-dom'
import navlogo from '../../public/images/navlogo.png'
import './navbar.css'
import LogoSvg from '../components/logo/LogoSvg'
import Button from '../components/button/Button'
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate();
  let HandleNavlogo = ()=>{
    navigate("/")
  }
  let HandleContactUs = ()=>{
    navigate("/contact")
  }
  return (
    // ====== Navbar section ======
    <nav className=' bg-primary text-white py-4 '>
        <div className='w-container my-0 mx-auto'>
          <div className='nav_wrapper flex items-center justify-between'>
            <div className="nav_logo cursor-pointer" onClick={HandleNavlogo}>
              <LogoSvg/>
            </div>
              <div className="nav_menu flex items-center justify-between gap-12">
                <ul className='flex items-center justify-center gap-8'>
                    <li>
                      <NavLink to="/" className='nav_anchor'>home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/aboutus" className='nav_anchor'>about us</NavLink>
                    </li>
                    <li>
                      <NavLink to="/features" className='nav_anchor'>features</NavLink>
                    </li>
                    <li>
                      <NavLink to="/pricing" className='nav_anchor'>pricing</NavLink>
                    </li>
                    <li>
                      <NavLink to="/faq" className='nav_anchor'>FAQ</NavLink>   
                    </li>
                    <li>
                      <NavLink to="/blog" className='nav_anchor'>blog</NavLink>
                    </li>
                </ul>
                <div className='btn'>
                  <Button className='nav_btn' text='contact us' onClick={HandleContactUs}/>
                </div>
              </div>
          </div>
        </div>
    </nav>
  )
}

export default Navbar