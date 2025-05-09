import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import '../App.css';
import QuizModal from './QuizUlunDanu';
import BackUlunDanu from "../../components/UlunDanu/BackUlunDanu"

export default function UlunDanu() {
    const [showQuiz, setShowQuiz] = useState(false);

    return (
        <div className="container2">
            <BackUlunDanu />
            <UlunDanuBox />
            <ButtonNext onClick={() => setShowQuiz(true)}>Next</ButtonNext>
            {showQuiz && <QuizModal closeQuiz={() => setShowQuiz(false)} />}

        </div>
    );
}

function UlunDanuBox() {
    return (
        <div className='container-box'>
            <h1 className='container-h1'>Pura Ulun Danu Beratan Bedugul</h1>
            <h3 className="container-h2">Fakta Menarik Lainnya:</h3>
            <p className='container-p2'>
                <ul>
                    <li>Pura Ulun Danu Beratan tampak seolah mengapung di atas permukaan air saat danau sedang tinggi, menciptakan pemandangan yang sangat memukau.</li>
                    <li>Kompleks ini terdiri dari beberapa pura, termasuk Pura Lingga Petak, Pura Teratai Bang, Pura Penataran Agung, dan Pura Dalem Purwa, masing-masing memiliki fungsi dan cerita sejarah tersendiri.</li>
                    <li>Gambar Pura Ulun Danu Beratan pernah diabadikan pada uang kertas Indonesia pecahan Rp 50.000, menunjukkan pentingnya pura ini dalam budaya dan pariwisata Indonesia.</li>
                    <li>Pura ini menjadi pusat kegiatan upacara penting seperti Piodalan, yang dirayakan setiap enam bulan sekali dalam kalender Bali, di mana masyarakat berdoa dan memberikan persembahan untuk menghormati Dewi Danu.</li>
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
