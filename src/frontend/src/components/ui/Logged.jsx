import React from "react";

import { Outlet, useParams} from "react-router-dom";

import { Row, Col, Container } from "reactstrap";
import Sidebar from "../sidebar/SideBar";
import img1 from "../../assets/images/1.png"
// after check in database 
// get user from data base 
const users = 
[{
    username: 'username1',
    type: 1,
    avatar: img1
},
{
    username: 'usename2',
    type: 2,
    avatar:img1
},
{
    username: 'usename3',
    type:3,
    avatar: img1
}
]

const Logged = () => {
    const id = useParams().id
    return(
        <>
        <Container>
            <Row>
                <Col lg = '3' sm='12'>
                    <Sidebar user={users[id-1]}></Sidebar>
                </Col>
                <Col lg = '9' sm = '12'>
                    <Outlet/>
                </Col>
            </Row>
            
        </Container>
        </>
    )
} 
export default Logged