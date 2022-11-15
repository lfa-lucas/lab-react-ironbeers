import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"
import HomeHeader from "../components/HomeHeader/HomeHeader"
import "../components/BeerDetails/Beerdetails.css" 

function BeerDetails() {
    const [beer, setBeer] = useState({})    

    useEffect(() => {        
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random")
            .then(response => {
                setBeer(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }, [])



    
    return (                
        <div>
            <div>
                <Link to={"/"}>
                <HomeHeader />
                </Link>
            </div>            
            <Container>
                <Row>
                    <Col className="text-center image">                        
                        <img src={beer.image_url} alt="Selected Beer"/>
                    </Col>
                </Row>
                <Row>
                    <Col className="beer-name">
                        {beer.name}
                    </Col>
                    <Col className="attenuation_level">
                        {beer.attenuation_level}
                    </Col>
                </Row>
                <Row>
                    <Col className="tagline">
                        {beer.tagline}
                    </Col>
                    <Col className="first_brewed">
                        {beer.first_brewed}
                    </Col>
                </Row>
                <Row><Col className="description">{beer.description}</Col></Row>
                <Row><Col className="contributed_by">{beer.contributed_by}</Col></Row>
            </Container>
        </div>
        
    )
}

export default BeerDetails