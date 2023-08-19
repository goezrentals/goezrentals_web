import React from "react";
import SkewObject from "../molecules/skewObject";


const ShareSection = props => {

  const { backgroundUrl, titleText, bodyText} = props

  return (
    <div id="share">
        <SkewObject background={backgroundUrl} title={titleText} body={bodyText}/>
    </div>
  );
}

export default ShareSection;