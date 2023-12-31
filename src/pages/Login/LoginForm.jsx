import React, { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../ReduxTk/slices/authSlice';
import { getCartData } from '../../ReduxTk/slices/cartSlice';
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function LoginForm() {
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('http://localhost:3005/users')
            .then(res => res.json())
            .then(data => setUser(data))
            .then(console.log)
    }, [])

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Please enter a valid email")
            .required("Email is required"),
        password: Yup.string()
            .required("Passwort is required")
            .min(6, "Password too short! Must be at least 6 characters.")
            .max(10, "Password too long! Must be at most 10 characters."),
    });

    const handleSubmit = (
        { email, password },
        { setFieldError }
    ) => {
        console.log("Success! Call the API Now!");
        console.log(email, password)
        const obj = user.find((u) => email == u.email && password == u.password)
        if (obj) {
            // console.log(obj.email + 's')
            dispatch(login(obj.id))

            dispatch(getCartData(obj.id));

            setTimeout(() => {
                navigator('/')

            }, 1000);
        } else {
            setTimeout(() => {
                setFieldError("password", "This password or email is wrong");
            }, 1000);
        }
    }



    return (

        <div className='container bg-dark w-75 text-light my-4'>
            <h1 className='text-center text-orange p-5 '>Login Form</h1>

            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={(values, errors) => {
                    handleSubmit(values, errors);
                }}
                validationSchema={validationSchema}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleSubmit,
                    handleChange,
                    handleBlur,
                }) => {
                    return (
                        <Row>
                            <Col lg={10} className=" mx-auto p-5">
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>

                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            name='email'
                                            value={values.email}
                                            onChange={handleChange("email")}
                                            onBlur={handleBlur("email")}
                                        />
                                        <div>{touched.email && errors.email}</div>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>

                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            name='password'
                                            value={values.password}
                                            onChange={handleChange("password")}
                                            onBlur={handleBlur("password")}
                                        />
                                        <div>{touched.password && errors.password}</div>
                                    </Form.Group>

                                    <div className='my-4'>
                                        <h5>Dont have any accounts ? <Link to={'/register'} className='text-orange'>Create a new Account </Link></h5>
                                    </div>
                                    <Button variant="warning" className=' w-50 mx-auto d-block' type="submit">Login</Button>
                                </Form>
                            </Col>
                        </Row>

                    );
                }}
            </Formik>
        </div>
    )
}
