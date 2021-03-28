import React from 'react';
import ContactItem from '../Components/ContactItem';
import Tittle from '../Components/Tittle';
import email from '../img/emailme.svg';
import location from '../img/location.svg';

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Tittle title={'Contact'} span={'Contact'} />
      </div>
      <div className="ContactPage">
        <div className="map-sect"></div>
        {/* FIXME:map-sectは削除 */}
        <div className="contact-sect">
          {/* FIXME: change name at contact-section */}
          <ContactItem
            icon={email}
            title={'e-mail'}
            text1={'test@sample.com'}
            text2={'textAdd'}
          />
          <ContactItem
            icon={location}
            title={'Location'}
            text1={'Based on JP'}
            text2={'textAdd'}
          />
          {/* contact-formを設置してもいいかも。（google form or original） */}
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
