import React, {useRef} from 'react';
import {Container, Row} from 'reactstrap';
import './header.css';

const navLinks = [
  {
    display: 'Home',
    url:'#'
  },
  {
    display: 'Explore RITT',
    url:'#'
  },
  {
    display: 'Departments',
    url:'#'
  },
  {
    display: 'Courses',
    url:'#'
  },
  {
    display: 'Downloads',
    url:'#'
  },
  {
    display: 'Contact Us',
    url:'#'
  },
]

const Header = () => {
  const menuRef = useRef();
  const menuToggle = () => menuRef.current.classList.toggle('active__menu')
  return (
   <header className='header'>
    <Container>
      <div className="navigation d-flex align-items-center justify-content-between">
        <div className="logo">
          <h2 className='d-flex align-items-center'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z"/><path d="M21 21h-8V6a3 3 0 0 1 3-3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zm-10 0H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a3 3 0 0 1 3 3v15zm0 0h2v2h-2v-2z" fill="rgba(50,152,219,1)"/></svg>RITT</h2>
          
         
        </div>

        <div className="nav d-flex align-items-center gap-5">
          <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
            <ul className="nav__list">
              {navLinks.map((item, index)=>(
                 <li key={index} className="nav__item">
                 <a href={item.url}>{item.display}</a>
               </li>
              ))}
             
            </ul>
          </div>
          <div className="nav__right">
          <p className='d-flex mb-0 align-items-center gap-2'><i class="ri-phone-fill"></i>+254 733 876 498/600 766 </p>
        </div>
        </div>
       <div className="mobile__menu">
        <span><i class="ri-menu-fill" onClick={menuToggle}></i></span>
       </div>
      </div>
    </Container>    
   </header>
  )
}

export default Header