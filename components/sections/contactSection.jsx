import React from "react";
import SkewObject from "../molecules/skewObject";


const ContactSection = props => {

  const { backgroundUrl, titleText, bodyText} = props

  return (
    <div id="contact">
        <SkewObject background={backgroundUrl} title={titleText} body={bodyText}/>
    </div>
  );
}

export default ContactSection;