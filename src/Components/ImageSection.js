import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          このサイトにお越しいただきありがとうございます！
          <span>Tomohiro</span>
          です。
        </h4>
        <p className="about-text">自己紹介を追加します。只今編集中です。</p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationalty</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Countries</p>
          </div>
          <div className="right-section">
            <p>: Tomohiro Sugiyama</p>
            <p>: 27</p>
            <p>: Japan</p>
            <p>: Japanese, English</p>
            <p>: Hakata-ku, Fukuoka city</p>
            <p>: Japan</p>
          </div>
        </div>
        <button className="btn">Download My Cv</button>
      </div>
    </div>
  );
}

export default ImageSection;
