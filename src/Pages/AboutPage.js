import React from 'react';
import Tittle from '../Components/Tittle';
import ImageSection from './ImageSection';

function AboutPage() {
  return (
    <div className="AboutPage">
      {/* <h1>About Page</h1> */}
      {/* FIXME:最後に削除 */}
      <Tittle title={'About Me'} span={'About Me'} />
      <ImageSection />
    </div>
  );
}

export default AboutPage;
