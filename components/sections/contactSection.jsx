import React from "react";
import ContactSkewObject from "../molecules/contactSkewObject";
import Contact from "../contact";


const ContactSection = props => {

  const { contentContact} = props
  console.log(contentContact)

  return (
    <div id="contact" className="flex flex-col">
        <ContactSkewObject content={contentContact} />
    </div>
  );
}

export default ContactSection;