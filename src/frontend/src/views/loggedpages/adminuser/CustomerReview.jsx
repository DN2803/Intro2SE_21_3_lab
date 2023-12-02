import React from "react";
import '../../../styles/CustomerReview.scss'
import { Container } from "reactstrap";
const CustomerReview = () =>{
    const title = [
        {Header: "ID", accessor: 'id'},
        {Header: "Họ Tên", accessor: 'name'},
        {Header: "Email", accessor: 'email'},
        {Header: "Điện thoại", accessor: 'phone'},
        {Header: "Mô tả"},
        {Header: "Đánh giá"}
    ];
    return (
        <>
        <Container>
        <div className="table-customer">
            <table>
                <thead>
                    {
                        title.map(t => {
                            return (<td key={t}>{t.Header}</td>)
                        })
                    }
                </thead>
            </table>
        
        </div>
        </Container>
        
        </>
    )
} 
export default CustomerReview