import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Col, Container, Row } from "react-bootstrap"
import HomeHeader from "../HomeHeader/HomeHeader"
import "./Beerdetails.css" 

function BeerDetails({ apiURL }) {
    const [beer, setBeer] = useState({})
    const { beerId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {        
        axios.get(`${apiURL}/${beerId}`)
            .then(response => {
                setBeer(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }, [])



    
    return (                
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
                   <Row className="button">
                    <Button 
                        variant="primary" 
                        className="mt-5 fw-bold" 
                        onClick={() => navigate(-1) }>Voltar
                    </Button>
                   </Row>             
                
            </Container>
        
    )
}

export default BeerDetails