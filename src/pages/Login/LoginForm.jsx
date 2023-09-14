import React, { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../ReduxTk/slices/authSlice';

export default function LoginForm() {

    const [user, setUser] = useState([])
    const [form, setForm] = useState({
        email: '',
        password: ''
    })
    const [isError, setIsError] = useState(false)
    const [flag, setFlag] = useState(false)
    // const [isAdmin, setIsAdmin] = useState(false)

    const navigator = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        fetch('http://localhost:3005/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])


    const submitHandler = (e) => {
        e.preventDefault()
        // console.log({ ...user, isAdmin: isAdmin });
        const obj = user.find((u) => form.email == u.email && form.password == u.password)
        if (obj) {
            setIsError(false)
            setFlag(true)
            // console.log(obj.email + 's')
            setTimeout(() => {
                setFlag(false)
                dispatch(login(obj.id))
                // dispatch(getCartData(obj.id));
                navigator('/')
            }, 1000);
        } else {
            // console.log(obj + 'err')

            setIsError(true)
            setFlag(true)
            setTimeout(() => {
                setFlag(false)
                
                // navigator('/')
            }, 1000);
        }

    }

    const changeHandler = (e) => {
        //استخدمنا قوس  [] لييه
        // عشان اوضح ان دا متغيير

        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        // setPassword(e.target.value)
    }

    // const getAdminValue = (e) => {
    //     setIsAdmin(e.target.checked)

    // }



    return (
        <div className='container bg-dark w-75 text-light my-4'>
            <h1 className='text-center text-warning p-5 '>Login Form</h1>
            {flag ?
                (
                    <>
                        {isError ?
                            (
                                <Alert className='w-50  text-center d-block mx-auto' variant='danger'>
                                    Failed
                                </Alert>
                            ) :
                            (
                                <Alert className='w-50 text-center d-block mx-auto ' variant='success'>
                                    Successful
                                </Alert>
                            )
                        }
                    </>
                )
                : (
                    <>

                    </>
                )
            }
            <div className="row">
                <div className="col-lg-10 mx-auto p-5 ">
                    <Form onSubmit={submitHandler}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={user.email} placeholder="Enter email" name='email' onChange={changeHandler} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name='password' onChange={changeHandler} value={user.password} />
                        </Form.Group>




                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check onChange={getAdminValue} type="checkbox" label="Admin" name="admin" checked={isAdmin} />
                        </Form.Group> */}

                        <div className='my-4'>
                            <h5>Dont have any accounts ? <Link to={'/register'} className='text-orange'>Create a new Account </Link></h5>
                        </div>

                        <Button variant="warning" className=' w-50 mx-auto d-block' type="submit">
                            Login
                        </Button>
                    </Form>
                </div>
            </div>


        </div>

    )
}
