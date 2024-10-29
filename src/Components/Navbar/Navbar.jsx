import React, { useEffect, useState } from 'react'
import  './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className="logo" />
      <ul>
        <li><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link> </li>

        <li><Link to='about' smooth={true} offset={0} duration={500}>About Us</Link> </li>

        <li><Link to='program' smooth={true} offset={0} duration={500}>Programs</Link></li>

        <li><Link to='campus' smooth={true} offset={0} duration={500}>Campus</Link> </li>

        <li><Link to='testimonials' smooth={true} offset={0} duration={500}>Testimonials</Link> </li>
        <li><button className="btn">Contact Us</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
