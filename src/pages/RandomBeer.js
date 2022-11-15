import { Link } from "react-router-dom"
import HomeHeader from "../components/HomeHeader/HomeHeader"

function RandomBeer() {
    return (
        <div className="container">
            <Link to={"/"}>
            <HomeHeader />
            </Link>
        <>Random Beer</>
            


        </div>
        
    )
}

export default RandomBeer