import { Link } from "react-router-dom";

function ButtonMonkeyForest() {
    return (
        <div className="App">
            <Link to="/monkeyforest">
                <button>Monkey Forest</button>
            </Link>
        </div>
    );
}

export default ButtonMonkeyForest;