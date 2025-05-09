import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import './Modal.css';
import Card from './Card';

function Modal({ isOpen, onClose, menu, onOrder }) {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2 style={{ textAlign: "center" }}>Restaurant Menu</h2>
        <div className="menu-grid" style={{ justifyContent: 'space-between' }} data-aos="fade-down">
          {menu.map((item) => (
            <Card
              key={item.name}
              img={item.imgURL}
              name={item.name}
              description={item.description}
              price={item.price}
              onOrder={onOrder}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Modal;
