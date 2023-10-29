import React, { useState } from 'react'
import { Button, Col, Form, Row } from "react-bootstrap";

import { Link, useNavigate } from 'react-router-dom';
import { Formik } from "formik";
import * as Yup from "yup";


export default function RegisterForm() {
  const navigator = useNavigate();

  const signUpSchema = Yup.object({
    fname: Yup.string().min(2).max(25).required("Please enter your name"),
    lname: Yup.string().min(2).max(25).required("Please enter your name"),
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
    confirm_password: Yup.string()
      .required()
      .oneOf([Yup.ref("password"), null], "Password must match"),
  });


  const register = async (values) => {
    console.log(values)
    // console.log('hi')
    const savedUserResponse = await fetch('http://localhost:3005/users',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(values)
      })

    const savedUser = await savedUserResponse.json();

      if(savedUser){
        console.log('Saved User')
        navigator('/login')
      }

  }



  const handleSubmit = async(values) => {
    // delete user.confirm_password;
    console.log(values)
    await register(values)
  }

  return (
    <div className='container bg-dark w-75 text-light my-4'>
      <h1 className='text-center text-orange p-5 '>Register Form</h1>

      <Formik
        initialValues={{
          fname: "",
          lname: "",
          email: "",
          password: "",
          confirm_password: "",
        }}
        onSubmit={(values, errors) => {
          handleSubmit(values, errors);
        }}
        validationSchema={signUpSchema}
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

            <Row >
              <Col lg={10} className=" mx-auto p-5 ">
                <Form onSubmit={handleSubmit}>

                  <Row className="mb-3">
                    <Form.Group as={Col} md="6" >
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        type="name"
                        autoComplete="off"
                        name="fname"
                        placeholder="Name"
                        value={values.fname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="6" >
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        type="name"
                        autoComplete="off"
                        name="lname"
                        placeholder="Last Name"
                        value={values.lname}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>

                  </Row>

                  <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required
                      type="email"
                      placeholder="Enter email"
                      name='email'
                      value={values.email}
                      onChange={handleChange("email")}
                      onBlur={handleBlur("email")}
                    />
                    <div>{touched.email && errors.email}</div>

                  </Form.Group>

                  <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                      placeholder="Password"
                      name='password'
                      value={values.password}
                      onChange={handleChange("password")}
                      onBlur={handleBlur("password")} />
                    <div>{touched.password && errors.password}</div>
                  </Form.Group>


                  <Form.Group className="mb-3" >
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password"
                      autoComplete="off"
                      name="confirm_password"
                      id="confirm_password"
                      placeholder="Confirm Password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur} />
                    {errors.confirm_password && touched.confirm_password ? (
                      <p className="form-error">{errors.confirm_password}</p>
                    ) : null}
                  </Form.Group>


                  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check onChange={getAdminValue} type="checkbox" label="Admin" name="admin" checked={isAdmin} />
            </Form.Group> */}


                  <div className='my-4'>
                    <h5>Already have an Account ? <Link to={'/login'} className='text-orange'>Login Now </Link></h5>
                  </div>


                  <Button variant="warning" className=' w-50 mx-auto d-block' type="submit">
                    Register
                  </Button>
                </Form>
              </Col>
            </Row>


          );
        }}
      </Formik>
    </div>
  )
}

