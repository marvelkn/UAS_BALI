import { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./App.css"
import { HealthContext } from '../contexts/HealthContext';

const DeadScreen = () => {
    const { health, setHealth } = useContext(HealthContext);
    return (
        <div className="dead">
            <div className="dead-inside">
                <h2>You are dead!</h2>
                <p>Game Over</p>
                <Link to="/">
                <button className="dead-button" onClick={setHealth(100)}>
                    RETRY!
                </button>
                </Link>
            </div>
        </div>
    );
};

export default DeadScreen;
