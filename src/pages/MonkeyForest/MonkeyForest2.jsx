import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import '../App.css';
import QuizModal from './QuizMonkeyForest';
import BackMonkeyForest from "../../components/MonkeyForest/BackMonkeyForest"

export default function MonkeyForest() {
    const [showQuiz, setShowQuiz] = useState(false);

    return (
        <div className="container2">
            <BackMonkeyForest />
            <MonkeyForestBox />
            <ButtonNext onClick={() => setShowQuiz(true)}>Next</ButtonNext>
            {showQuiz && <QuizModal closeQuiz={() => setShowQuiz(false)} />}

        </div>
    );
}

function MonkeyForestBox() {
    return (
        <div className='container-box'>
            <h1 className='container-h1'>Mandala Suci Wenara Wana</h1>
            <h3 className="container-h2">Fakta Menarik Lainnya:</h3>
            <p className='container-p2'>
                <ul>
                    <li>Nama "Mandala Suci Wenara Wana" berasal dari bahasa Sanskerta yang berarti "hutan suci kera ekor panjang".</li>
                    <li>Monkey Forest menjadi pusat konservasi untuk spesies kera ekor panjang (Macaca fascicularis) dan berperan penting dalam upaya pelestarian satwa liar di Bali.</li>
                    <li>Di dalam Monkey Forest, terdapat tiga kuil suci yang merupakan tempat bersembahyang dan upacara keagamaan bagi masyarakat Hindu Bali.</li>
                    <li>Selain kera, Monkey Forest juga menjadi rumah bagi lebih dari 186 spesies tumbuhan yang berbeda, menciptakan lingkungan hutan yang kaya akan keanekaragaman hayati.</li>
                </ul>
            </p>
        </div>
    );
}

function ButtonNext(props) {
    return (
        <button className="button-next" onClick={props.onClick}>
            {props.children}
        </button>
    );
}
