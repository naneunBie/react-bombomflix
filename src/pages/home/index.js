import React, { useState, useEffect } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import MyCard from '../../components/card';
import { NO_RESULT } from '../../configs';
import { getListMovie } from '../../store/actions/movies';
import './index.css';


function Home() {
    const [whoAmI, setWhoAmI] = useState("Noobie");
    const data = useSelector((state) => state?.movies?.result?.Search);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getListMovie("Batman"));
    // }, [])

    const sayHello = () => {
        return (
            <h1>Hello, {whoAmI}</h1>
        )
    }

    const setMovieList = () => {
        return (
            <>
                <Row>
                    {

                        data?.length > 0 && data?.map((item, key) =>
                            <div className="col-md-3 card-body" key={key}>
                                <Col>
                                    <MyCard data={{ ...item }} />
                                </Col>
                            </div>
                        )

                    }
                </Row>
                <div className="d-flex justify-content-center mt-5 images-home">
                    <Image src={NO_RESULT} />
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="col-md-12 page-header" >
                {sayHello()}
            </div>

            <div className="col-md-12 page-body">
                {setMovieList()}
            </div>
        </div>
    )
}

export default Home;