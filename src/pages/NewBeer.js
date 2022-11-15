import { Link } from "react-router-dom"
import HomeHeader from "../components/HomeHeader/HomeHeader"

function NewBeer() {
    return (
        <div className="container">
        <Link to={"/"}>
        <HomeHeader />
        </Link>
        
        <>New Beer</>


        </div>
        
    )
}

export default NewBeer