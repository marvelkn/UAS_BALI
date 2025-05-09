import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import '../App.css';
import QuizModal from './QuizTanahLot';
import BackTanahLot from "../../components/TanahLot/BackTanahLot"

export default function TanahLot() {
    const [showQuiz, setShowQuiz] = useState(false);

    return (
        <div className="container2">
            <BackTanahLot />
            <TanahLotBox />
            <ButtonNext onClick={() => setShowQuiz(true)}>Next</ButtonNext>
            {showQuiz && <QuizModal closeQuiz={() => setShowQuiz(false)} />}

        </div>
    );
}

function TanahLotBox() {
    return (
        <div className='container-box'>
            <h1 className='container-h1'>Tanah Lot</h1>
            <h3 className="container-h2">Fakta Menarik Lainnya:</h3>
            <p className='container-p2'>
                <ul>
                    <li>Nama "Tanah Lot" berasal dari bahasa Bali yang berarti "Tanah di Laut," mencerminkan posisi pura yang berada di atas batu besar di tepi laut.</li>
                    <li>Menurut legenda, pura ini didirikan oleh seorang brahmana dari Jawa bernama Dang Hyang Nirartha pada abad ke-16. Ia terinspirasi oleh keindahan tempat tersebut dan memutuskan untuk membangun pura di sana setelah bermeditasi di atas batu karang tersebut.</li>
                    <li>Di bawah pura, terdapat mata air tawar yang diyakini suci oleh penduduk setempat. Mata air ini muncul dari batu karang dan dianggap sebagai berkah dari Dewa laut. Pengunjung dapat meminum air ini setelah memberikan donasi.</li>
                    <li>Tanah Lot juga dikenal dengan ular laut suci yang hidup di gua di dekat pura. Ular ini dianggap sebagai penjaga pura dan dipercaya membawa keberuntungan serta melindungi pura dari roh jahat dan bahaya.</li>
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
