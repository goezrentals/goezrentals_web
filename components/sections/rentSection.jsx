import React from "react";
import SkewObject from "../molecules/skewObject";


const RentSection = props => {

  const { backgroundUrl, titleText, bodyText} = props

  return (
    <div id="rent">
        <SkewObject background={backgroundUrl} title={titleText} body={bodyText}/>
    </div>
  );
}

export default RentSection;