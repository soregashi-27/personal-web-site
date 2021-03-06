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
          <span>杉山友啓</span>
          です。
        </h4>
        <p>自己紹介を追加します。只今編集中です。</p>
        <div className="about-details"></div>
      </div>
    </div>
  );
}

export default ImageSection;
