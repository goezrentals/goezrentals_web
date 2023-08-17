import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';
import { PrismicNextLink } from '@prismicio/next';

const RentSection = props => {

  const { backgroundUrl, titleText, bodyText} = props

  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${backgroundUrl}`}}>
      <div className="flex flex-col w-full h-screen text-white justify-center">
          <div className="text-4xl text-center font-bold">
              {titleText}
          </div>
          {/* <div className="text-6xl bg-[#e56608ff] text-center w-min self-center paralelograma2 font-extrabold">
              {bodyText}
          </div> */}
      </div>
    </div>
  );
}

export default RentSection;