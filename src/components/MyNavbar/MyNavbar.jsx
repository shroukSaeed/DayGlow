import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../../ReduxTk/slices/authSlice';

export default function MyNavbar() {
    const isAuth = useSelector(state => state.authReducer.isAuth);
    const dispatch = useDispatch();

    function handleLogout() {
        dispatch(logout())
    }


    return (
        <>

            <Navbar sticky="top" expand="xl" bg='dark' data-bs-theme="dark" className="text-light bg-gradient bg-opacity-75 px-5 " >
                <Navbar.Brand href="#home" className='text-orange fw-bolder fs-4 hover-effect'><i className="bi bi-fire mx-1"></i>DayGlow</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">

                    {isAuth ?
                        <Nav className="me-auto d-flex justify-content-between  w-100 ">

                            <div className=' d-flex pt-2 justify-content-between  '>
                                <NavLink className=' text-light nav-link' to='/' >
                                    Home
                                </NavLink>
                                <NavLink className=' text-light nav-link' to='/menue' >
                                    Menue
                                </NavLink>

                                <NavLink className='text-light nav-link' to='/contact' >Contact Us</NavLink>
                                <NavLink className=' text-light nav-link' to='/' >
                                    {/* <div class="dropdown">
                                            <button className="dropbtn">Pages<i className="bi bi-chevron-down mx-2"  ></i></button>
                                            <div className="dropdown-content">
                                                <Link to={'/'}>Link 1</Link>
                                                <Link to={'/'}>Link 2</Link>
                                                <Link to={'/'}>Link 3</Link>
                                            </div>
                                        </div> */}
                                </NavLink>
                                
                            </div>

                            <div className='d-flex  justify-content-between  mt-0 '>
                                <div className='d-flex me-5'>
                                    <i className="bi bi-clock text-orange hover-effect m-1 fs-2"></i>
                                    <h4 className='my-0  '>Call For Order:<br /><strong><Link to={'/'} className='text-light text-decoration-none'>+869 526 212</Link></strong></h4>
                                </div>

                                {/* <div className=' rounded-circle pt-3 ms-5'>
                                <Link> <i className="fs-3 fw-bolder bi bi-search text-orange hover-effect"></i></Link>

                                </div >*/}
                                <div className=' rounded-circle pt-2  mx-5'>
                                    <Link to={'/cart'}><i className="fs-3 fw-bolder bi bi-cart3 text-orange hover-effect"></i></Link>
                                </div>
                                <div className='d-flex justify-content-center align-items-ceter m-2'>
                                    <button className='btn btn-warning text-light' onClick={handleLogout}>log Out</button>

                                </div>

                            </div>
                        </Nav>
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
