import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './MyNavbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../../ReduxTk/slices/authSlice';
import { Container } from 'react-bootstrap';

export default function MyNavbar() {
    const isAuth = useSelector(state => state.authReducer.isAuth);
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(logout())
    }


    return (
        <>

            <Navbar sticky="top" expand="md" bg='dark' data-bs-theme="dark" className="text-light bg-gradient px-2 " >
                <Navbar.Brand href="#home" className='text-orange fw-bolder fs-4 hover-effect'><i className="bi bi-fire mx-1"></i>DayGlow</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="basic-navbar-nav">

                    {isAuth ?
                        <>
                            <Nav className="me-auto my-2   d-flex    w-100 " navbarScroll>

                                <div className=' d-flex pt-2    justify-content-between'>
                                    <NavLink className=' text-light nav-link me-3' to='/' >
                                        Home
                                    </NavLink>
                                    <NavLink className=' text-light nav-link mx-3' to='/menue' >
                                        Menue
                                    </NavLink>

                                    <NavLink className='text-light nav-link ms-3' to='/contact' >ContactUs</NavLink>
                                    {/* <NavLink className=' text-light nav-link' to='/' > */}
                                    {/* <div class="dropdown">
                <button className="dropbtn">Pages<i className="bi bi-chevron-down mx-2"  ></i></button>
                <div className="dropdown-content">
                    <Link to={'/'}>Link 1</Link>
                    <Link to={'/'}>Link 2</Link>
                    <Link to={'/'}>Link 3</Link>
                </div>
            </div> */}
                                    {/* </NavLink> */}




                                </div>


                            </Nav>

                            <div className="container d-flex justify-content-end  ">
                                <div className='d-flex  nav-half pt-1  px-3  '>
                                    <Link className='text-decoration-none d-flex' to={'/'}> <i className="bi bi-clock text-orange hover-effect  fs-3"></i>
                                        <p className=' text-light pt-2 ms-1 '>Call For Order</p></Link>
                                </div>

                                <div className='pt-1   px-3  '>
                                    <Link className=' cart-icon text-decoration-none text-light d-flex' to={'/cart'}><i className="fs-3 fw-bolder bi bi-cart3 text-orange hover-effect"></i><p className='ms-1 pt-2'>Cart</p></Link>

                                </div>
                                <div className='d-flex  justify-content-end  px-3 '>
                                    <button className='cstm-btn btn btn-warning ' onClick={handleLogout}>log Out</button>

                                </div>
                            </div>
                        </>
                        :

                        <Nav className="me-auto ">

                            <NavLink className=' text-light nav-link' to='/login' >
                                Login
                            </NavLink>
                            <NavLink className=' text-light nav-link' to='/register' >
                                New User
                            </NavLink>
                        </Nav>

                    }



                </Navbar.Collapse>
            </Navbar>

        </>
    )
}
