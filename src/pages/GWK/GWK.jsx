import { Link } from "react-router-dom";
import "../App.css";
import video from "../../videos/GWK.mp4";

export default function GWK() {
  return (
    <div className="container">
      <div className="overlay"></div>
      <video className="video-candiPura" src={video} autoPlay loop muted />
      <div className="container-box">
        <h1 className="container-h1">Garuda Wisnu Kencana (GWK)</h1>
        <h3 className="container-h2">ᬧᬢᬸᬂ​ᬕᬭᬸᬤ​ᬯᬶᬲ᭄ᬦᬸ​ᬓᬾᬜ᭄ᬘᬦ</h3>
        <p className="container-p">
        Garuda Wisnu Kencana (GWK) adalah sebuah taman budaya dan ikon wisata yang terletak di Bukit Ungasan, Bali. Taman ini dikenal dengan patung raksasa Dewa Wisnu yang sedang menunggangi Garuda, yang merupakan lambang kebijaksanaan dan perlindungan. GWK tidak hanya menjadi daya tarik wisata karena ukurannya yang megah, tetapi juga karena makna budaya dan spiritual yang terkandung di dalamnya.
        </p>
      </div>
      <Link to="/GWK2">
        <button className="button-next">Next</button>
      </Link>
    </div>
  );
}
