import './App.css';
import Button from '../components/Button';
import ButtonAbout from '../components/ButtonAbout';
import logobali from '../pics/logobali.png';
import logoumn from '../pics/logoumn.png';
import video from "../videos/intro.mp4"


function App() {
  return (
    <div className="App">
      <video className="video-intro" src={video} autoPlay loop muted />
      <div className='App-header-container'>
        <img src={logobali} className="App-logo" alt="logobali" />
        <img src={logoumn} className="App-logo-umn" alt="logobali" />
      </div>
      <div className='App-header'>
        <h1 className="color1 display-1">
          Tentukan Perjalananmu di Bali!!
        </h1>
        <div className='button-container'>
          <Button />
          <ButtonAbout />
        </div>
      </div>
    </div>
  );
}

export default App;