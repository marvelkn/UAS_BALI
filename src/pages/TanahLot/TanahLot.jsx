import { Link } from "react-router-dom";
import '../App.css';
import video from "../../videos/tanahLot.mp4"

export default function TanahLot() {
    return (
        <div className="container">
            <div className="overlay"></div>
            <video className="video-tanahLot" src={video} autoPlay loop muted />
            <div className='container-box'>
                <h1 className='container-h1'>Tanah Lot</h1>
                <h3 className="container-h2">aksara Bali: ᬧᬸᬭ​ᬢᬦᬄᬮᭀᬢ᭄</h3>
                <p className='container-p'>
                Tanah Lot adalah salah satu destinasi wisata paling terkenal di Bali, Indonesia, yang terkenal dengan pemandangan pura yang megah di atas batu karang besar yang menjorok ke laut. Pura ini didedikasikan untuk dewa laut dan menjadi tempat penting bagi umat Hindu untuk berdoa dan melakukan ritual keagamaan. Keindahan Tanah Lot tidak hanya terletak pada arsitektur pura dan sejarahnya, tetapi juga pada pemandangan matahari terbenam yang spektakuler yang dapat dinikmati dari pantai atau tebing di sekitarnya. 
                </p>
            </div>
            <Link to="/tanahlot2">
                <button className="button-next">
                    Next
                </button>
            </Link>
        </div>
    )
}