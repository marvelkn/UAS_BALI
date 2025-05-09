import { Link } from "react-router-dom";
import '../App.css';
import video from "../../videos/monkeyForest.mp4"

export default function MonkeyForest() {
    return (
        <div className="container">
            <div className="overlay"></div>
            <video className="video-pantaiKuta" src={video} autoPlay loop muted />
            <div className='container-box'>
                <h1 className='container-h1'>Mandala Suci Wenara Wana</h1>
                <h3 className="container-h2">Monkey Forest Ubud</h3>
                <p className='container-p'>
                Monkey Forest, atau Mandala Suci Wenara Wana, merupakan salah satu tujuan wisata yang populer di Bali yang terkenal karena keberadaan kera ekor panjangnya dan hutan tropis yang mempesona. Terletak di Ubud, Monkey Forest menyajikan pengalaman unik berinteraksi dengan lebih dari 700 ekor kera yang hidup bebas di dalamnya. Selain menjadi habitat alami bagi kera, tempat ini juga memiliki nilai spiritual bagi masyarakat setempat dan digunakan sebagai tempat upacara keagamaan. 
                </p>
            </div>
            <Link to="/monkeyforest2">
                <button className="button-next">
                    Next
                </button>
            </Link>
        </div>
    )
}