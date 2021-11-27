import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import MyCard from '../../components/card';
import MyNavbar from '../../components/navbar';
import DetailMovie from '../detail-movie';
import { getListMovie } from '../../store/actions/movies';
import './index.css';


function Home() {
    const [whoAmI, setWhoAmI] = useState("Noobie");
    const [movie, setMovie] = useState([]);
    const data = useSelector((state) => state?.movies?.result?.Search);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getListMovie("Batman"));

    }, [])

    const sayHello = () => {
        return (
            <h1>Hello, {whoAmI}</h1>
        )
    }

    const setMovieList = () => {
        return (
            <>
                {
                    data?.map((item, key) =>
                        <div className="col-md-3 card-body" key={key}>
                            <Col>
                                <MyCard data={{ ...item }} />
                            </Col>
                        </div>
                    )

                }
            </>
        )
    }

    return (
        <div>
            <div className="col-md-12 page-header" >
                {sayHello()}
            </div>

            <div className="col-md-12 page-body">
                <Row>
                    {setMovieList()}
                </Row>
            </div>
        </div>
    )
}

export default Home;