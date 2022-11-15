import { Link } from "react-router-dom"
import HomeHeader from "../components/HomeHeader/HomeHeader"
const imgURL = "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/404.gif";

function ErrorPage() {
  return (
    <div className="container">

        <div>
          <Link to={"/"}>
          <HomeHeader />
          </Link>
        </div>

        <div className="error-page">          
          <img src={imgURL} alt="404 error gif" className="page-img" />
        </div>

    </div>

  );
}

export default ErrorPage;