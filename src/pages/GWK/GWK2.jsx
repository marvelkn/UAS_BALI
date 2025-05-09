import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import '../App.css';
import QuizModal from './QuizGWK';
import BackGWK from "../../components/GWK/BackGWK"

export default function GWK2() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="container2">
      <BackGWK/>
      <GWKBox />
        <ButtonNext onClick={() => setShowQuiz(true)}>Next</ButtonNext>
      {showQuiz && <QuizModal closeQuiz={() => setShowQuiz(false)} />}
      
    </div>
  );
}

function GWKBox() {
  return (
    <div className='container-box'>
      <h1 className='container-h1'>Garuda Wisnu Kencana (GWK)</h1>
      <h3 className="container-h2">Fakta Menarik Lainnya:</h3>
      <p className='container-p2'>
        <ul>
          <li>Patung Garuda Wisnu Kencana memiliki tinggi total 121 meter, menjadikannya salah satu patung tertinggi di dunia, bahkan lebih tinggi dari Patung Liberty di Amerika Serikat.</li>
          <li>Pembangunan patung ini memakan waktu lebih dari 28 tahun, dimulai pada tahun 1990 dan akhirnya selesai pada tahun 2018.</li>
          <li>Patung GWK terbuat dari tembaga dan baja dengan berat total sekitar 4.000 ton. Desainnya juga tahan terhadap angin kencang dan gempa bumi, menyesuaikan dengan kondisi geografis Bali.</li>
          <li>GWK Cultural Park mencakup area seluas 60 hektar yang digunakan untuk berbagai acara budaya, konser, dan festival. Taman ini juga menyediakan ruang untuk pengunjung belajar tentang kebudayaan dan seni tradisional Bali.</li>
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
