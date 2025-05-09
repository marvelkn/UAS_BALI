import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Assuming you put your custom styles in InputNama.css

const InputNama = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();
  
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Hello, ${name}!`);
    setName('');
    navigate('/Map'); // Replace '/next-route' with the route you want to navigate to
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="custom-card p-4">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="text-white">Name:</label>
            <input type="text" className="form-control" id="name" value={name} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-warning btn-block mt-3">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default InputNama;
