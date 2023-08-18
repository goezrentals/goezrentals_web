import React from "react";
import SkewObject from "../molecules/skewObject";


const AboutSection = props => {

  const { backgroundUrl, titleText, bodyText} = props

  return (
    <div>
        <SkewObject background={backgroundUrl} title={titleText} body={bodyText}/>
    </div>
  );
}

export default AboutSection;