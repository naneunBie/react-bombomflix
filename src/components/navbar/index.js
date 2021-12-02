import React, { useState, useEffect } from 'react';
import { Container, Form, FormControl, Navbar, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getListMovie } from '../../store/actions/movies';
import { withRouter } from 'react-router-dom';


function MyNavbar(props) {
    const [searchValue, SetSearchValue] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        props?.history?.push('/')
        if (!searchValue) return
        dispatch(getListMovie(searchValue))
    };
    return (
        <Navbar fixed="top" expand="lg" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand href="/">
                    <i className="fa fa-heart fa-spin"></i>
                    Bombomflix
                </Navbar.Brand>

                <Form onSubmit={handleSubmit} className="d-flex">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        onChange={(e) => SetSearchValue(e?.target?.value)}
                    />
                    <Button type='submit' variant="outline-success">Search</Button>
                </Form>
            </Container>
        </Navbar>
    )
}

export default withRouter(MyNavbar);

