import { Link } from "react-router-dom";
import '../App.css';
import video from "../../videos/candiBesakih.mp4"

export default function candiBesakih() {
  return (
    <div className="container">
      <div className="overlay"></div>
      <video className="video-candiBesakih" src={video} autoPlay loop muted />
      <div className='container-box'>
        <h1 className='container-h1'>Candi Pura Besakih</h1>
        <h3 className="container-h2">Mother of Temple</h3>
        <p className='container-p'>
        Candi Pura Besakih adalah kompleks kuil Hindu terbesar dan paling suci di Pulau Bali, Indonesia. Terletak di lereng Gunung Agung, candi ini dianggap sebagai "Pura Agung Besakih" atau "Pura Suci Besakih", dan merupakan pusat keagamaan bagi umat Hindu Bali. Kompleks ini terdiri dari sekitar 23 candi yang tersebar di atas ketinggian 1.000 meter di atas permukaan laut. Pura Besakih juga terdiri dari tujuh teras yang masing-masing mewakili tujuh lapisan alam semesta dalam ajaran Hindu. Selain itu, kompleks ini memiliki arsitektur yang menakjubkan dengan detail ukiran dan relief yang memukau, mencerminkan warisan budaya Hindu yang kaya di Bali.
        </p>
      </div>
      <Link to="/candibesakih2">
        <button className="button-next">
          Next
        </button>
      </Link>
    </div>
  )
}