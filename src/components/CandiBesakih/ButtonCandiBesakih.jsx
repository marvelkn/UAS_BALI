import { Link } from "react-router-dom";


function ButtonCandiBesakih() {
    return (
        <div className="App">
            <Link to="/candibesakih">
                <button>Candi Pura Besakih</button>
            </Link>
        </div>
    );
}

export default ButtonCandiBesakih;