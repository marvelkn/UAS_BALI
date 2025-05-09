import { Link } from "react-router-dom";
import "../pages/App.css";

function ButtonAbout() {
    return (
        <div className="App">
            <Link to="/about">
                <button className="button-intro2">About US</button>
            </Link>
        </div>
    );
}

export default ButtonAbout;
