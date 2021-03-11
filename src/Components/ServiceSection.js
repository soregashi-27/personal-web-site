import React from 'react';

export default function ServiceSection({ image, title, text }) {
  return (
    <div className="ServiceSection">
      <div className="service">
        <div className="service-content">
          <img src={image} alt="" />
          <h5 className="service-title">{title}</h5>
          <p className="service-text">{text}</p>
        </div>
      </div>
    </div>
  );
}
