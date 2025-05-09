import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../pages/App.css";

export const InputNama = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello, ${name}!`);
    setName('');
    navigate('/Map', { state: { name } });
  };
  

  return (
    <div className="container-nama">
    <form onSubmit={handleSubmit}>
        <div class="input-groups">
          <input type="text" value={name} className="input-nama" onChange={handleChange} />
          <label class="label-nama">Name</label>
        </div>
      <button type="submit" className='button-32'>Submit</button>
    </form>
    </div>
  );
};

export const name = ''; // Export the name variable containing the user-inputted name

export default InputNama; // Default export the InputNama component
