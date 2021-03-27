import React from 'react';
import ContactItem from '../Components/ContactItem';

function ContactPage() {
  return (
    <div className="ContactPage">
      <div className="map-sect"></div>
      <div className="contact-sect">
        <ContactItem />
        <ContactItem />
        <ContactItem />
      </div>
    </div>
  );
}

export default ContactPage;
