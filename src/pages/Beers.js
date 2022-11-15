import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom"
import HomeHeader from "../components/HomeHeader/HomeHeader"
import "./HomePage.css" 

function Beers() {

    const [beers, setBeers] = useState([])
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        axios.get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
            setBeers(response.data)
            setFetching(false)
            
        })
        .catch((error) => console.log(error))
    }, [])    

    const renderBeers = beers.map((beer) => {
        return (
                <Link className="text-link" to={`/beers/${ beer._id }`}>
            <div className="row beer-card" key={ beer._id }>            
                <div className="col-2 beer-image">
                    <img src={ beer.image_url} alt="a beer" />
                </div>
                <div className="col-10 beer-description">
                    <p className="beer-name">{ beer.name }</p>
                    <span className="beer-tag">{ beer.tagline }</span>
                    <span className="beer-creator"><b>Created by: </b> { beer.contributed_by }</span>
                </div>
            </div>
                </Link>
        )
    })

    return (
        <div className="container">
            <div>
            <Link to={"/"}>
            <HomeHeader />
            </Link>
            </div>
            
                { fetching && <Spinner animation="border" /> }
                { renderBeers }
            
        </div>
        
        
    )
}

export default Beers