import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import '../App.css';
import QuizModal from './QuizKuta';
import BackPantaiKuta from "../../components/PantaiKuta/BackPantaiKuta"

export default function PantaiKuta() {
    const [showQuiz, setShowQuiz] = useState(false);

    return (
        <div className="container2">
            <BackPantaiKuta />
            <PantaiKutaBox />
            <ButtonNext onClick={() => setShowQuiz(true)}>Next</ButtonNext>
            {showQuiz && <QuizModal closeQuiz={() => setShowQuiz(false)} />}

        </div>
    );
}

function PantaiKutaBox() {
    return (
        <div className='container-box'>
            <h1 className='container-h1'>Pantai Kuta</h1>
            <h3 className="container-h2">Fakta Menarik Lainnya:</h3>
            <p className='container-p2'>
                <ul>
                    <li>Pantai Kuta dikenal sebagai tempat pelarian bagi para backpacker pada tahun 1960-an, tetapi sekarang telah berkembang menjadi salah satu tujuan liburan paling populer di Bali.</li>
                    <li>Setiap tahun, sebelum perayaan Hari Raya Nyepi, Pantai Kuta menjadi lokasi upacara Ngrupuk, di mana patung-patung raksasa yang terbuat dari bambu dan kertas dinyalakan untuk mengusir roh jahat.</li>
                    <li>Pantai Kuta juga menyimpan kekayaan alam lain, seperti hutan bakau yang berfungsi sebagai habitat bagi berbagai spesies unik, termasuk burung-burung langka</li>
                    <li>Pantai Kuta juga terkenal dengan kehidupan malamnya yang semarak, dengan berbagai klub malam, bar, dan restoran yang menyajikan hiburan langsung dan makanan lezat hingga larut malam.</li>
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
