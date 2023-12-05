import React from "react";
import { Container, Row, Col, Form } from 'reactstrap';
import "../../styles/Login.scss";
import { submitForm } from "../../utils/fetchFromAPI";

const Login = () => {

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        submitForm(event.target);
    };

    return (
        <section className="login__section">
            <Container>
                <Row lg='3'>
                    <Col lg='8' className='m-auto'>
                        <div className="login_form d-flex align-items-center justify-content-center">
                            <Form onSubmit={handleSubmit}>
                                <h3>Please login.</h3>
                                <div className="form-group ">
                                    <label htmlFor="exampleInputEmail1">Username</label>
                                    <input type="text" className="form-control"  />
                                    
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