import { Link } from "react-router-dom";
import "../pages/App.css";

function Button() {
  return (
    <div className="App">
      <Link to="/Nama">
      <button className="button-intro">Mulai Permainan</button>
      </Link>
    </div>
  );
}

export default Button;
