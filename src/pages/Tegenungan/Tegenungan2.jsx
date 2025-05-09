import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import '../App.css';
import QuizModal from './QuizTegenungan';
import BackTegenungan from "../../components/Tegenungan/BackTegenungan"

export default function Tegenungan() {
    const [showQuiz, setShowQuiz] = useState(false);

    return (
        <div className="container2">
            <BackTegenungan />
            <TegenunganBox />
            <ButtonNext onClick={() => setShowQuiz(true)}>Next</ButtonNext>
            {showQuiz && <QuizModal closeQuiz={() => setShowQuiz(false)} />}

        </div>
    );
}

function TegenunganBox() {
    return (
        <div className='container-box'>
            <h1 className='container-h1'>Air Terjun Tegenungan</h1>
            <h3 className="container-h2">Fakta Menarik Lainnya:</h3>
            <p className='container-p2'>
                <ul>
                    <li>Berbeda dengan banyak air terjun di Bali yang memerlukan perjalanan panjang dan melelahkan, Air Terjun Tegenungan dapat diakses dengan mudah melalui perjalanan singkat dari pusat Ubud.</li>
                    <li>Air terjun ini memiliki kolam alami di dasar air terjun yang memungkinkan pengunjung untuk berenang dan menikmati kesegaran airnya.</li>
                    <li>Terdapat beberapa platform pandang dan area yang dirancang khusus untuk pengunjung mengambil foto-foto yang instagramable dengan latar belakang air terjun.</li>
                    <li>Banyak masyarakat lokal yang meyakini bahwa air dari Air Terjun Tegenungan memiliki kekuatan spiritual yang dapat membersihkan aura negatif dan membawa ketenangan jiwa.</li>
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
