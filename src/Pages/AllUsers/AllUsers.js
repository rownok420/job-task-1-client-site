import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import Swal from "sweetalert2";
import "./AllUsers.css";

const AllUsers = () => {
    const [users, setUsers] = useState([]);

    // fetch data from database
    useEffect(() => {
        fetch("https://obscure-chamber-37714.herokuapp.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);

    // handle delete user
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm("Are you sure!!! you want to delete user?");
        if (proceed) {
            fetch(`https://obscure-chamber-37714.herokuapp.com/users/${id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.deletedCount) {
                        Swal.fire(
                            "Sorry to say!",
                            "Successfully deleted!",
                            "success"
                        );
                        const remainingUser = users?.filter(
                            (user) => user._id !== id
                        );
                        setUsers(remainingUser);
                    }
                });
        }
    };

    // add spinner
    if (users.length === 0) {
        return (
            <div
                className="d-flex my-5 justify-content-center align-items-center"
            >
                <Spinner animation="border" variant="info" />
            </div>
        );
    }

    return (
        <div className="text-center">
            <div className="all-users-banner">
                <div className="container">
                    <h1 className="banner-heading">All Users</h1>
                </div>
            </div>
            <div className="my-5">
                <Container>
                    <div>
                        <h1 className="heading ">Know About Users</h1>
                        <hr className="dotted-hr mb-5" />
                    </div>
                    <div>
                        <Row xs={1} md={2} lg={3} className="g-4">
                            {users.map((user) => {
                                return (
                                    <Col key={user._id}>
                                        <Card className="h-100 card-style">
                                            <Card.Body>
                                                <Card.Title className="fs-2 mt-3">
                                                    {user.title}{" "}
                                                    {user.firstName}{" "}
                                                    {user.lastName}
                                                </Card.Title>
                                                <h6 className="mb-5 text-muted">
                                                    {user.email}
                                                </h6>
                                                <p>Date of Birth: {user.dob}</p>
                                                <p>Phone: {user.contact}</p>
                                                <p className="text-muted">
                                                    {user.address}
                                                </p>
                                            </Card.Body>
                                            <Card.Footer className="text-center">
                                                <button
                                                onClick={() =>
                                                    handleDeleteOrder(user?._id)
                                                }
                                                className="btn btn-warning fw-bold py-2 px-4 my-2">
                                                    Delete User
                                                </button>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                );
                            })}
                        </Row>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default AllUsers;
