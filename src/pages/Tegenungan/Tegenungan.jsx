import { Link } from "react-router-dom";
import '../App.css';
import video from "../../videos/Tegenungan.mp4"

export default function Tegenungan() {
    return (
        <div className="container">
            <div className="overlay"></div>
            <video className="video-tanahLot" src={video} autoPlay loop muted />
            <div className='container-box'>
                <h1 className='container-h1'>Air Terjun Tegenungan</h1>
                <h3 className="container-h2">Air Terjun Kemenuh</h3>
                <p className='container-p'>
                    Air Terjun Tegenungan adalah salah satu destinasi wisata alam yang populer di Bali, terletak di Desa Kemenuh, Gianyar. Terkenal dengan keindahan alamnya, air terjun ini menawarkan pengalaman yang mempesona bagi para pengunjung dengan pemandangan air terjun yang deras dikelilingi oleh pepohonan hijau yang rimbun. 
                </p>
            </div>
            <Link to="/tegenungan2">
                <button className="button-next">
                    Next
                </button>
            </Link>
        </div>
    )
}