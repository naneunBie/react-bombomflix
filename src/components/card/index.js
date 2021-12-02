import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './index.css';

function MyCard(props) {
    const { data } = props;

    return (
        <div className="d-flex">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.Poster} />
                <Card.Body>
                    <Card.Title>{data.Title}</Card.Title>
                    <Card.Text>
                        <p>{data.Year}</p>
                    </Card.Text>

                    <Link
                        to={{
                            pathname: '/detail-movie',
                            state: { detail: data }
                        }} >
                        <Button variant="outline-success">
                            Go To Bom</Button></Link>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MyCard;
