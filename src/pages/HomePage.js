import "./HomePage.css"
import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import beers from "../assets/beers.png"
import randomBeer from "../assets/random-beer.png"
import NewBeer from "../assets/new-beer.png"
import { Link } from "react-router-dom";


function HomePage() {
    return (
        
        <Container>
            <Row>
                <Col>                
                <Card style={{ width: '80vw', margin: "20px 0 20px 0" }}>
                <Link to={`/beers`} className="text-link">
                    <Card.Img variant="top" src={beers} />
                    <Card.Body>
                        <Card.Title className="card-title">All Beers</Card.Title>
                        <Card.Text className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Card.Text>                        
                    </Card.Body>
                </Link>
                </Card>
                </Col>

                <Col>
                <Card style={{ width: '80vw', margin: "0 0 20px 0" }}>
                <Link to={`/random-beer`} className="text-link">
                    <Card.Img variant="top" src={randomBeer}/>
                    <Card.Body>
                        <Card.Title className="card-title">Random Beer</Card.Title>
                        <Card.Text className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Card.Text>                        
                    </Card.Body>
                </Link>
                </Card>
                </Col>

                <Col>
                <Card style={{ width: '80vw', margin: "0 0 20px 0" }}>
                <Link to={`/new-beer`} className="text-link">
                    <Card.Img variant="top" src={NewBeer} />
                    <Card.Body>
                        <Card.Title className="card-title">New Beer</Card.Title>
                        <Card.Text className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Card.Text>                        
                    </Card.Body>
                </Link>
                </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage