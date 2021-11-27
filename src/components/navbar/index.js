import React from 'react';
import { Container, Form, FormControl, Navbar, Button } from 'react-bootstrap';


function MyNavbar() {

    return (
        <Navbar fixed="top" expand="lg" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand href="#">
                    <i className="fa fa-heart fa-spin"></i>
                    Bombomflix
                </Navbar.Brand>

                <Form className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;

