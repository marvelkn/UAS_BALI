import { Link } from "react-router-dom";

function ButtonPantaiKuta() {
    return (
        <div className="App">
            <Link to="/pantaikuta">
                <button>Pantai Kuta</button>
            </Link>
        </div>
    );
}

export default ButtonPantaiKuta;