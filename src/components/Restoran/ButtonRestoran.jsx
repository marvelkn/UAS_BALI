import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menu from './Menu'; // Import menu dari Menu.jsx
import Card from './Card';
import './Modal.css';

function ButtonRestoran({ onOrder }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className="button-restoran" onClick={openModal}>🍴Restoran🍝</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            {menu.map((item, index) => (
              <Card
                key={index}
                name={item.name}
                img={item.imgURL}
                description={item.description}
                price={item.price}
                onOrder={onOrder}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ButtonRestoran;
