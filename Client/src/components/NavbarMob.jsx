import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Button,} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/Makaan_logo.jpg'
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from "../redux/user/userSlice";


function NavbarMob() {
  const {currentUser,loading,error} = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const [isOffcanvasVisible, setIsOffcanvasVisible] = useState(false);

  const handleLogout = () => {
    // Display a confirmation popup
    const isConfirmed = window.confirm('Are you sure you want to Logout?');

    if (!isConfirmed) {
      // If the user cancels the deletion, do nothing
      return;
    }
      dispatch(logout())
 }
 useEffect(() => {
  const handleOffcanvasShow = () => {
    setIsOffcanvasVisible(true);
  };

  const handleOffcanvasHide = () => {
    setIsOffcanvasVisible(false);
  };

  const offcanvasElement = document.getElementById('offcanvasNavbar');
  offcanvasElement.addEventListener('show.bs.offcanvas', handleOffcanvasShow);
  offcanvasElement.addEventListener('hidden.bs.offcanvas', handleOffcanvasHide);

  return () => {
    offcanvasElement.removeEventListener('show.bs.offcanvas', handleOffcanvasShow);
    offcanvasElement.removeEventListener('hidden.bs.offcanvas', handleOffcanvasHide);
  };
}, []);

useEffect(() => {
  document.body.style.overflow = isOffcanvasVisible ? 'hidden' : '';
}, [isOffcanvasVisible]);
 
  return (
    <Wrapper>
    <nav className="navbar bg-light fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand mx-3" to='/'><img src={logo} height={35} width={35} alt="" /></Link>
    
    <button className="navbar-toggler mx-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" onClick={() => setIsOffcanvasVisible(!isOffcanvasVisible)}>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`offcanvas offcanvas-start${isOffcanvasVisible ? ' show' : ''}`} tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" >
      <div className="offcanvas-header">
      <span className="offcanvas-title d-flex gap-1" id="offcanvasNavbarLabel"><img src={logo} height={30} width={30} alt="" /><span className='mt-1'>Bharatroofers</span></span>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <Nav className="navbar-nav justify-content-end flex-grow-1 pe-3">
         
   
         <Nav.Link  as={Link} to="/" className='li'>Home</Nav.Link>
          <Nav.Link  as={Link} to="/about" className='li'>About</Nav.Link>
          <Nav.Link  as={Link} to="/contact" className='li'>Contact</Nav.Link>
          <Nav.Link  as={Link} to="/blog" className='li'>Blog</Nav.Link>

          {currentUser
           ? 
           ( <>
            <NavDropdown title={currentUser.user.name} id="navbarScrollingDropdown" className='text-white me-5'>
              <NavDropdown.Item href="#action3" onClick={handleLogout}>Logout</NavDropdown.Item>
              
             
            
            </NavDropdown>
            
           

          
           </>)
          
          :
          (
            <>
             <Nav.Link  as={Link} to="/register" className='li'> Register</Nav.Link>
          <Nav.Link  as={Link} to="/login" className='li'> Login</Nav.Link>
            </>
          )
          }
         
          
        </Nav>
        </ul>
       
      
      </div>
    </div>
  </div>
</nav>
    
    </Wrapper>
  )
}

export default NavbarMob
const Wrapper = styled.div`

#offcanvasNavbar{
    @media screen and (max-width: 768px) {
      width: 70%;
    }
  }
  .dropdown-toggle::after {
 
 margin-left: 1rem;
   
}

.li{
    color: black;
         font-weight: 800;
         text-decoration: none;
         font-family: "Playpen Sans", cursive;
         padding: 1rem;
  }
  .li:hover{
    color: #712cf9;
  }
  
  .btn{
    font-weight: bold;
         text-decoration: none;
         font-family: "Playpen Sans", cursive;
  }
  .navbar{
    width: 100vw;
  }
`