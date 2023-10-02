import React from "react";
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'

const Login = () => {

    return (
            <section className="login__section">
                <Container>
                    <Row>
                        <div className="login_form">
                            <Form>
                                <h3>Please login.</h3>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className='form-group' style={{ marginTop: '2vh' }}>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                    &nbsp; <a href="/">Back to Home</a>
                            </div>
                            </Form>
                        </div>
                    </Row>
            </Container>
            </section>
        
    );
};


export default Login;