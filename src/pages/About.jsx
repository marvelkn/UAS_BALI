import profiles from './AboutUs.js';
import './about.css';

function About(props) {
  return (
    <div className="page">
      <h2>Who are we?</h2>
      <div className="aboutus">
        {profiles.map((profile, index) => (
          <div key={index} className="profile">
            <div className="aib"><img src={profile.aib} alt={`${profile.name}'s profile`} /></div>
            <div className="fornow">
              <h4 className="name">{profile.name}</h4>
              <div className="nim">{profile.nim}</div>
              <div className="ig"><a href={profile.link}>{profile.ig}</a></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;