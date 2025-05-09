import { Link } from "react-router-dom";
import '../App.css';
import video from "../../videos/pantaiKuta.mp4"

export default function candiPura() {
    return (
        <div className="container">
            <div className="overlay"></div>
            <video className="video-pantaiKuta" src={video} autoPlay loop muted />
            <div className='container-box'>
                <h1 className='container-h1'>Pantai Kuta</h1>
                <h3 className="container-h2">Pantai Matahari Terbenam</h3>
                <p className='container-p'>
                Pantai Kuta, terletak di bagian selatan pulau Bali, adalah sebuah ikon pariwisata yang terkenal karena keindahan alamnya yang menakjubkan dan gelombangnya yang cocok untuk berselancar. Pantai ini menawarkan panorama pasir putih yang luas yang diselingi dengan barisan pohon kelapa yang menjulang tinggi, menciptakan suasana tropis yang memikat. Selain menjadi tujuan utama untuk berselancar, Pantai Kuta juga menawarkan beragam kegiatan seperti menikmati matahari terbenam yang memukau, bermain voli pantai, atau sekadar bersantai sambil menikmati hidangan lezat di warung pinggir pantai. Keindahan alamnya yang memikat dan suasana yang hidup menjadikan Pantai Kuta sebagai destinasi yang tidak boleh dilewatkan bagi wisatawan yang berkunjung ke Bali. 
                </p>
            </div>
            <Link to="/pantaikuta2">
                <button className="button-next">
                    Next
                </button>
            </Link>
        </div>
    )
}