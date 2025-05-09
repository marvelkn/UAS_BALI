import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import '../App.css';
import QuizModal from './QuizUluwatu';
import BackUluwatu from "../../components/Uluwatu/BackUluwatu"

export default function Uluwatu() {
    const [showQuiz, setShowQuiz] = useState(false);

    return (
        <div className="container2">
            <BackUluwatu />
            <UluwatuBox />
            <ButtonNext onClick={() => setShowQuiz(true)}>Next</ButtonNext>
            {showQuiz && <QuizModal closeQuiz={() => setShowQuiz(false)} />}

        </div>
    );
}

function UluwatuBox() {
    return (
        <div className='container-box'>
            <h1 className='container-h1'>Pura Luhur Uluwatu</h1>
            <h3 className="container-h2">Fakta Menarik Lainnya:</h3>
            <p className='container-p2'>
                <ul>
                    <li>Pura Luhur Uluwatu dibangun di atas tebing setinggi 70 meter yang menghadap langsung ke laut, memberikan pemandangan yang spektakuler dan sensasi spiritual yang kuat bagi pengunjung.</li>
                    <li>Setiap hari, di pura ini diselenggarakan tarian Kecak yang menggambarkan kisah epik Ramayana. Pertunjukan ini berlangsung di arena terbuka dengan latar belakang matahari terbenam, menambah keindahan dan keunikan pengalaman.</li>
                    <li>Di sekitar Pura Luhur Uluwatu, banyak terdapat monyet yang dipercaya oleh penduduk setempat sebagai penjaga pura. Meskipun lucu, pengunjung diingatkan untuk berhati-hati karena monyet-monyet ini sering mengambil barang-barang pribadi.</li>
                    <li>Pura ini dianggap sebagai salah satu dari sembilan pura penguasa arah mata angin di Bali, yang bertujuan untuk melindungi pulau dari roh jahat. Keberadaan pura ini sangat penting dalam sistem kepercayaan dan spiritualitas Hindu Bali.</li>
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
