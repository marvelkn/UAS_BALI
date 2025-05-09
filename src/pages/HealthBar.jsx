// import React, { useState, useContext } from 'react';
// import { HealthContext } from '../contexts/HealthContext';

// const HealthBar = () => {
//   const { health, setHealth } = useContext(HealthContext)
//   // const [health, setHealth] = useState(100);

//   const decreaseHealth = () => {
//     const newHealth = (() => (health - 30 >= 0)? health-30 : 0); // Decrease health by 30
//     setHealth(newHealth);
//     if(newHealth == 0) gotojsx deadjsx
//   };

//   const replenishHealth = () => {
//     setHealth((prevHealth) => prevHealth + 15); // Increase health by 15
//   };

//   // Helper function to change color based on health
//   const getHealthColor = (health) => {
//     if (health > 70) {
//       return 'green';
//     } else if (health > 30) {
//       return 'orange';
//     } else {
//       return 'red';
//     }
//   };

//   return (
//     <div>
//       <h2>Health Bar</h2>
//       <div className="health-bar">
//         <div
//           className="health-bar-inner"
//           style={{ width: `${health}%`, backgroundColor: getHealthColor(health) }}
//         >
//           {health}%
//         </div>
//       </div>
//       <button onClick={decreaseHealth}>Decrease Health</button>
//       <button onClick={replenishHealth}>Replenish Health</button>
//     </div>
//   );
// };

// export default HealthBar;


import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HealthContext } from '../contexts/HealthContext';
import DeadScreen from './Dead';

const HealthBar = () => {
  const navigate = useNavigate()
  const { health, setHealth } = useContext(HealthContext);

  const decreaseHealth = () => {
    const newHealth = health - 30 >= 0 ? health - 30 : 0; // Decrease health by 30
    setHealth(newHealth);
  };

  const replenishHealth = () => {
    setHealth((prevHealth) => (prevHealth + 15>100)?100:prevHealth + 15); // Increase health by 15
    
  };

  // Helper function to change color based on health
  const getHealthColor = (health) => {
    if (health > 70) {
      return 'green';
    } else if (health > 30) {
      return 'orange';
    } else {
      return 'red';
    }
  };

  // Conditional rendering based on health value
  if (health === 0) {
    // setHealth(100);
    navigate("../dead");
  }

  return (
    <div>
      <div className="health-bar">
        <div
          className="health-bar-inner"
          style={{ width: `${health}%`, backgroundColor: getHealthColor(health) }}
        >
          {health}%
        </div>
      </div>
      {/* <button onClick={decreaseHealth}>Decrease Health</button>
      <button onClick={replenishHealth}>Replenish Health</button> */}
    </div>
  );
};

export default HealthBar;
