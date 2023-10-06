import React from "react";
import { Button, Col, Container, Row } from "reactstrap";

import '../../styles/Home.scss'
import { Link } from "react-router-dom";


const Home = () => {
    return (
    <>
    <section className="intro">
        <Container>
            <Row>
                <Col lg = '6' md ='12'>
                    <div className="intro-content">
                        
                        <h1>
                            TAKE CARE <br></br><span className="hightlight">OF YOUR EYES</span>
                        </h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae deserunt dolorum tempora, consequatur delectus veritatis exercitationem ipsa suscipit quaerat dignissimos! Porro veritatis eligendi hic sit rerum similique a esse est.
                        </p>
                        <Button className="btn primary__btn d-flex gap-3">
                            <Link to = '/booking'>Đặt chỗ ngay</Link>
                        </Button>

                    </div>
                </Col>
            </Row>
            
        </Container>
    </section>
    </>
    )
} 
export default Home