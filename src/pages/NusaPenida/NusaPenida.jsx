import { Link } from "react-router-dom";
import '../App.css';
import video from "../../videos/nusaPenida.mp4"

export default function NusaPenida() {
    return (
        <div className="container">
            <div className="overlay"></div>
            <video className="video-pantaiKuta" src={video} autoPlay loop muted />
            <div className='container-box'>
                <h1 className='container-h1'>Nusa Penida</h1>
                <h3 className="container-h2">The Blue Paradise Island</h3>
                <p className='container-p'>
                Nusa Penida adalah sebuah pulau yang terletak di sebelah tenggara Bali, Indonesia, yang dikenal dengan keindahan alamnya yang memukau dan ekosistem laut yang kaya. Pulau ini menjadi destinasi favorit bagi wisatawan yang mencari pengalaman yang lebih tenang dan alami dibandingkan dengan keramaian Bali. Di Nusa Penida, pengunjung dapat menemukan pantai berpasir putih, tebing-tebing yang dramatis, serta titik snorkeling dan menyelam yang menakjubkan. 
                </p>
            </div>
            <Link to="/nusapenida2">
                <button className="button-next">
                    Next
                </button>
            </Link>
        </div>
    )
}