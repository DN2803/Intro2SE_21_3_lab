import React from "react";
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'


import "../../styles/Login.scss"
const Login = () => {

    return (
            <section className="login__section">
                <Container>
                    <Row lg ='3'>
                    <Col lg ='8' className='m-auto'>
                        <div className="login_form d-flex align-items-center justify-content-center">
                            <Form>
                                <h3>Please login.</h3>
                                <div className="form-group ">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className='form-group' style={{ marginTop: '2vh' }}>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                    &nbsp; <a href="/">Back to Home</a>
                            </div>
                            </Form>
                        </div>
                        </Col>
                    </Row>
            </Container>
            </section>
        
    );
};


export default Login;