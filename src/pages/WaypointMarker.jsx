import React from 'react';
import { Link } from 'react-router-dom';
import pointmarker from '../pics/pointmarker.png';
import "./Stats.css"

const WaypointMarker = ({ waypoint, decrease }) => {
  const handleClick = () => {
    decrease();
  };

  return (
    <Link
      to={waypoint.link}
      className="waypoint-marker"
      style={{ left: waypoint.x, top: waypoint.y }}
      onClick={handleClick}
    >
      <img className="waypoint-marker" src={pointmarker} alt={waypoint.name}/>
      <div className="waypoint-tooltip">{waypoint.info}</div>
    </Link>
  );
};

export default WaypointMarker;
