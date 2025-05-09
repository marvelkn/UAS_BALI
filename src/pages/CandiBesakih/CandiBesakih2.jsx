import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import '../App.css';
import QuizModal from './QuizBesakih';
import BackBesakih from "../../components/CandiBesakih/BackBesakih"

export default function CandiBesakih2() {
    const [showQuiz, setShowQuiz] = useState(false);

    return (
        <div className="container2">
            <BackBesakih />
            <CandiBesakihBox />
            <ButtonNext onClick={() => setShowQuiz(true)}>Next</ButtonNext>
            {showQuiz && <QuizModal closeQuiz={() => setShowQuiz(false)} />}

        </div>
    );
}

function CandiBesakihBox() {
    return (
        <div className='container-box'>
            <h1 className='container-h1'>Candi Pura Besakih</h1>
            <h3 className="container-h2">Fakta Menarik Lainnya:</h3>
            <p className='container-p2'>
                <ul>
                    <li>Pura Besakih dianggap sebagai perlindungan dari bencana alam, terbukti saat letusan Gunung Agung pada 1963.</li>
                    <li>Upacara "Eka Dasa Rudra" yang langka dilakukan setiap 100 tahun menarik ribuan peziarah.</li>
                    <li>Pura Besakih memiliki batu yang dianggap menentukan keberuntungan seseorang.</li>
                    <li>Arsitektur Pura Besakih mencerminkan keselarasan dengan alam, dibangun dengan prinsip-prinsip geomanti dan astronomi.</li>
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
