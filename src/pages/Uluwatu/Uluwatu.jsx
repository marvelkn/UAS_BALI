import { Link } from "react-router-dom";
import '../App.css';
import video from "../../videos/Uluwatu.mp4"

export default function Uluwatu() {
    return (
        <div className="container">
            <div className="overlay"></div>
            <video className="video-pantaiKuta" src={video} autoPlay loop muted />
            <div className='container-box'>
                <h1 className='container-h1'>Pura Luhur Uluwatu</h1>
                <h3 className="container-h2">Pura laut Hindu Bali ( Pura Segara )</h3>
                <p className='container-p'>
                    Pura Luhur Uluwatu adalah salah satu pura laut yang paling terkenal di Bali, yang terletak di ujung tebing yang curam menghadap Samudera Hindia. Pura ini tidak hanya menawarkan pemandangan matahari terbenam yang menakjubkan tetapi juga menjadi pusat kegiatan budaya dan spiritual yang penting bagi masyarakat setempat. 
                </p>
            </div>
            <Link to="/Uluwatu2">
                <button className="button-next">
                    Next
                </button>
            </Link>
        </div>
    )
}