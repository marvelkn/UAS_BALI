import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import '../App.css';
import QuizModal from './QuizNusaPenida';
import BackNusaPenida from "../../components/NusaPenida/BackNusaPenida"

export default function NusaPenida() {
    const [showQuiz, setShowQuiz] = useState(false);

    return (
        <div className="container2">
            <BackNusaPenida />
            <NusaPenidaBox />
            <ButtonNext onClick={() => setShowQuiz(true)}>Next</ButtonNext>
            {showQuiz && <QuizModal closeQuiz={() => setShowQuiz(false)} />}

        </div>
    );
}

function NusaPenidaBox() {
    return (
        <div className='container-box'>
            <h1 className='container-h1'>Nusa Penida</h1>
            <h3 className="container-h2">Fakta Menarik Lainnya:</h3>
            <p className='container-p2'>
                <ul>
                    <li>Angel's Billabong dan Broken Beach: Dua tempat ini adalah formasi batuan alami yang menciptakan kolam renang alami dan sebuah pantai dengan lubang besar di tengah tebing, memberikan pemandangan yang sangat spektakuler.</li>
                    <li>Nusa Penida adalah salah satu lokasi terbaik di dunia untuk menyelam bersama pari manta, yang dapat dilihat sepanjang tahun di Manta Point dan Manta Bay.</li>
                    <li>Tebing Kelingking: Tebing ini memiliki bentuk unik yang menyerupai kepala T-Rex jika dilihat dari atas, menjadikannya salah satu spot foto paling ikonik di Nusa Penida.</li>
                    <li>Pulau ini memiliki pura-pura penting seperti Pura Goa Giri Putri, sebuah pura yang terletak di dalam gua, yang sering dikunjungi oleh penduduk setempat untuk sembahyang dan ritual keagamaan.</li>
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
