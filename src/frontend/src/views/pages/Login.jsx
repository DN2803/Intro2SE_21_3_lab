<<<<<<< HEAD
import React from "react";
import { Container, Row, Col, Form } from 'reactstrap';
import "../../styles/Login.scss";
import { submitForm } from "../../utils/fetchFromAPI";

=======
import React, { useState } from "react";
import { Container, Row, Col, Form } from 'reactstrap';
import "../../styles/Login.scss";
import { submitForm } from "../../utils/fetchFromAPI";
import { RiErrorWarningFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
>>>>>>> df1b76e81900ad8c9ea567125c44711175c403c3
const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState("");
    const [isLogged, setIsLogged] = useState(true);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Assuming submitForm returns a Promise
            let user = await submitForm(event.target);
            user = user.loginName;
            console.log(user);
            setData(user);
            if (!user) {
                setIsLogged(false);
            } else {
                setIsLogged(true);
                localStorage.setItem('isAuth', true.toString());
                navigate(`./${user}`);

            }
        } catch (error) {
            // Handle any errors that occurred during form submission
            console.error("Error during form submission:", error);
            setIsLogged(false);
        }

    };
    

    

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