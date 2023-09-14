import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from 'react-bootstrap';


export default function RegisterForm() {

  const [user, setUser] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [isError, setIsError] = useState(false)
  // const [isAdmin, setIsAdmin] = useState(false)
  const [flag, setFlag] = useState(false)


  const navigator = useNavigate();


  const changeHandler = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
    // setPassword(e.target.value)
  }
  function submitHandler(e) {
    e.preventDefault();
    if (
      user.fname != "" &&
      user.lname != "" &&
      user.email != "" &&
      user.password != "" &&
      user.password === user.confirmPassword
    ) {
      delete user.confirmPassword;
      handleAddUser(user);
      setIsError(false)
      setFlag(true)
      setTimeout(() => {
        setFlag(false)
        navigator('/login')
      }, 1000);
    } else {
      setIsError(true)
      setFlag(true)
      setTimeout(() => {
        setFlag(false)
      }, 1000);
    }
  }

  function handleAddUser(data) {
    fetch('http://localhost:3005/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    // navigator('/login')
  }

  // const getAdminValue = (e) => {
  //   setIsAdmin(e.target.checked)

  // }



  return (
    <div className='container bg-dark w-75 text-light my-4'>
      <h1 className='text-center text-warning p-5 '>Register Form</h1>
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

            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  name='fname' onChange={changeHandler}
                  value={user.fname}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  name='lname' onChange={changeHandler}
                  value={user.lname}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

            </Row>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control required type="email" value={user.email} placeholder="Enter email" name='email' onChange={changeHandler} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control required type="password" placeholder="Password" name='password' onChange={changeHandler} value={user.password} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword1">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control required type="password" placeholder="confirm Password" name='confirmPassword' onChange={changeHandler} value={user.confirmPassword} />
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
        </div>
      </div>


    </div>
  )
}

