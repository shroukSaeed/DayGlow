import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";



// {flag ?
//     (
//         <>
//             {isError ?
//                 (
//                     <Alert className='w-50  text-center d-block mx-auto' variant='danger'>
//                         Failed
//                     </Alert>
//                 ) :
//                 (
//                     <Alert className='w-50 text-center d-block mx-auto ' variant='success'>
//                         Successful
//                     </Alert>
//                 )
//             }
//         </>
//     )
//     : (
//         <>

//         </>
//     )
// }


const submitHandler = (e) => {
    e.preventDefault()
    // console.log({ ...user, isAdmin: isAdmin });
    const obj = user.find((u) => form.email == u.email && form.password == u.password)
    if (obj) {
        // setIsError(false)
        // setFlag(true)
        // console.log(obj.email + 's')
        setTimeout(() => {
            // setFlag(false)
            dispatch(login(obj.id))
            dispatch(getCartData(obj.id));
            navigator('/')
        }, 1000);
    } else {
        // console.log(obj + 'err')

        // setIsError(true)
        // setFlag(true)
        setTimeout(() => {
            setFlag(false)

            // navigator('/')
        }, 1000);
    }

}

const LoginForm = () => {

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Please enter a valid email")
            .required("Email is required"),
        password: Yup.string()
            .required("Passwort is required")
            .min(6, "Password too short! Must be at least 6 characters.")
            .max(10, "Password too long! Must be at most 10 characters."),
        // acceptTOS: Yup.bool().oneOf(
        //     [true],
        //     "You must accept our Terms and Conditions!"
        // ),
    });

    const navigator = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (
        //, acceptTOS 
        { email, password },
        { setFieldError }
    ) => {
        console.log("Success! Call the API Now!");
        setTimeout(() => {
            setFieldError("email", "This email is already taken");
        }, 1000);
    };

    // useEffect(() => {
    //     fetch('http://localhost:3005/users')
    //         .then(res => res.json())
    //         .then(data => setUser(data))
    // }, [])

    return (
        <div className='container bg-dark w-75 text-light my-4'>
            <h1 className='text-center text-warning p-5 '>Login Form</h1>

            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    // acceptTOS: false,
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
                                    <div>
                                        {/* <input
                                    type="checkbox"
                                    checked={values.acceptTOS}
                                    onChange={handleChange("acceptTOS")}
                                    onBlur={handleBlur("acceptTOS")}
                                />{" "}
                                I accept TOS
                                <div>
                                    {touched.acceptTOS && errors.acceptTOS}
                                </div> */}
                                    </div>

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
    );
};

export default LoginForm;