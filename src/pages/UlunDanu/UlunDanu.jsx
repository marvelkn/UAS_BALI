import { Link } from "react-router-dom";
import '../App.css';
import video from "../../videos/ulunDanu.mp4"

export default function UlunDanu() {
    return (
        <div className="container">
            <div className="overlay"></div>
            <video className="video-tanahLot" src={video} autoPlay loop muted />
            <div className='container-box'>
                <h1 className='container-h1'>Pura Ulun Danu Beratan Bedugul</h1>
                <h3 className="container-h2">Danu Beratan ᬤᬦᬸᬩ᭄ᬭᬢᬦ᭄</h3>
                <p className='container-p'>
                Pura Ulun Danu Beratan Bedugul adalah salah satu pura ikonik di Bali yang terletak di tepi Danau Beratan, dataran tinggi Bedugul. Pura ini dibangun pada abad ke-17 dan didedikasikan untuk Dewi Danu, dewi air, danau, dan sungai. Terkenal karena pemandangan indahnya yang sering diselimuti kabut, pura ini seolah-olah mengapung di atas air saat permukaan danau naik. Kombinasi arsitektur tradisional Bali dan latar belakang pegunungan menjadikannya tempat favorit bagi wisatawan dan fotografer. 
                </p>
            </div>
            <Link to="/ulundanu2">
                <button className="button-next">
                    Next
                </button>
            </Link>
        </div>
    )
}