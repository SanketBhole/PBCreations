import React from 'react';
import './NotFound.css';
import { useNavigate } from 'react-router-dom'; 
import notfoundimg from '../../images/NotFound.png'

const NotFoundImage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="not-found-image-container">
      <img src={notfoundimg} alt="Camera Icon" className="not-found-image " />
      <button className="go-to-home-button" onClick={goToHome}>
        Go to Home
      </button>
    </div>
  );
};

export default NotFoundImage;
