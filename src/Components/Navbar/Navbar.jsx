import React, { useRef, useState } from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Abhishek_logo from '../../assets/Abhishek_logo.svg';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import underline from '../../assets/nav_underline.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='navbar'>
      <img src={Abhishek_logo} alt="logo" className='logo' />
      <img src={menu_open} onClick={toggleMenu} alt="menu open" className='nav-mob-open' />
      <ul ref={menuRef} className={`nav-menu ${menuOpen ? 'show' : ''}`}>
        <img src={menu_close} onClick={toggleMenu} alt="menu close" className="nav-mob-close" />
        <li>
          <AnchorLink className='anchor-link' href='#home' offset={100} onClick={() => { setMenu('home'); toggleMenu(); }}>
            <p>Home</p>
          </AnchorLink>
          {menu === 'home' && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' href='#about' offset={5} onClick={() => { setMenu('about'); toggleMenu(); }}>
            <p>About Me</p>
          </AnchorLink>
          {menu === 'about' && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' href='#work' offset={30} onClick={() => { setMenu('work'); toggleMenu(); }}>
            <p>Portfolio</p>
          </AnchorLink>
          {menu === 'work' && <img src={underline} alt='' />}
        </li>
        <li>
          <AnchorLink className='anchor-link' href='#contact' offset={50} onClick={() => { setMenu('contact'); toggleMenu(); }}>
            <p>Contact</p>
          </AnchorLink>
          {menu === 'contact' && <img src={underline} alt='' />}
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' href='#contact' offset={50}>Connect With Me</AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
