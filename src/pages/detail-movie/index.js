import React from 'react';
import { Button, Col, Row, Image, Card } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './index.css';


function DetailMovie(props) {
    const { detail } = props?.location?.state;
    console.log(detail);
    return (
        <Row className="content-padding">
            <Col md={3} >
                <Image src={detail.Poster} thumbnail />
            </Col>
            <Col md={7}>
                <Card>
                    <Card.Title><h1>{detail.Title}</h1>
                    </Card.Title>
                    <Card.Text>
                        <p className="text-paragraf">Year   :   {detail.Year}</p>
                        <p className="text-paragraf">Type   :   {detail.Type}</p>
                    </Card.Text>
                </Card>
            </Col>
        </Row>
    )
}

export default withRouter(DetailMovie);