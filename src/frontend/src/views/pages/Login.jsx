import React, { useState } from "react";
import { Container, Row, Col, Form } from 'reactstrap';
import "../../styles/Login.scss";
import { submitForm } from "../../utils/fetchFromAPI";
import { RiErrorWarningFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState("");
    const [isLogged, setIsLogged] = useState(true);
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        let user = submitForm(event.target);
        setData(user);
        console.log("data login", data);
        if (!data){
            setIsLogged(false);
        } 
        else {
            let usertype = data.loginName;
            navigate(`./${usertype}`)
        }
        console.log("done ?", isLogged);
    
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
                                    <input type="text" className="form-control" id="exampleInputEmail1" />
                                    
                                </div>
                                <div className="form-group ">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                </div>
                                {
                                !isLogged && <div className="error">
                                    <p><RiErrorWarningFill /> Đăng nhập thất bại, sai tài khoản hoặc mật khẩu</p>
                                </div>
                                }
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