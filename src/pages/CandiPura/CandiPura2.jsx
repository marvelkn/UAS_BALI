import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import '../App.css';
import QuizModal from './QuizCandiPura';
import BackCandiPura from "../../components/CandiPura/BackCandiPura"

export default function CandiPura2() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="container2">
      <BackCandiPura/>
      <CandiPuraBox />
        <ButtonNext onClick={() => setShowQuiz(true)}>Next</ButtonNext>
      {showQuiz && <QuizModal closeQuiz={() => setShowQuiz(false)} />}
      
    </div>
  );
}

function CandiPuraBox() {
  return (
    <div className='container-box'>
      <h1 className='container-h1'>Candi Pura Lempuyang</h1>
      <h3 className="container-h2">Fakta Menarik Lainnya:</h3>
      <p className='container-p2'>
        <ul>
          <li>Candi Pura Lempuyang merupakan pura Hindu yang suci dan memiliki makna spiritual yang mendalam.</li>
          <li>Pengunjung diwajibkan untuk mengenakan pakaian sopan saat mengunjungi pura.</li>
          <li>Pura Lempuyang buka setiap hari dari jam 6 pagi hingga 6 sore.</li>
          <li>Di sekitar pura terdapat berbagai pilihan akomodasi dan transportasi untuk memudahkan pengunjung.</li>
        </ul>
        Pura Lempuyang adalah tempat yang sempurna bagi mereka yang ingin merasakan ketenangan dan kedamaian, serta menikmati keindahan alam Bali yang menakjubkan.
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
