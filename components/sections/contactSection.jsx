import React from "react";
import ContactSkewObject from "../molecules/contactSkewObject";
import Contact from "../contact";


const ContactSection = props => {

  const { contentContact} = props

  return (
    <div id="contact" className="overflow-y-hidden">
        <ContactSkewObject content={contentContact} />
    </div>
  );
}

export default ContactSection;