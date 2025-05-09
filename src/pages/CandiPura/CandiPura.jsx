import { Link } from "react-router-dom";
import '../App.css';
import video from "../../videos/candiPura.mp4"

export default function candiPura() {
  return (
    <div className="container">
      <div className="overlay"></div>
      <video className="video-candiPura" src={video} autoPlay loop muted />
      <div className='container-box'>
        <h1 className='container-h1'>Candi Pura Lempuyang</h1>
        <h3 className="container-h2">Gerbang Menuju Surga di Bali</h3>
        <p className='container-p'>
        Candi Pura Lempuyang, yang terletak di Karangasem, Bali, terkenal dengan pemandangan Gunung Agung yang memukau dan dijuluki "Gerbang Surga". Dibangun oleh Raja Bali Kuno, pura ini memiliki 1.700 anak tangga yang harus didaki untuk mencapai puncaknya. Keunikan Pura Lempuyang terletak pada kolam air suci di depannya yang memantulkan bayangan Gunung Agung, menciptakan ilusi gerbang menuju surga.
        </p>
      </div>
      <Link to="/candipura2">
        <button className="button-next">
          Next
        </button>
      </Link>
    </div>
  )
}