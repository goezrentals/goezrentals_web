import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';
import { PrismicNextLink } from '@prismicio/next';
import { PrismicRichText } from "@prismicio/react"


const RentSection = props => {

  const { backgroundUrl, titleText, bodyText} = props

  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${backgroundUrl}`}}>
      <div className="flex flex-col w-full h-screen text-white justify-center centrar-webkit">

          <div className="pt-2 pb-2 xl:-translate-x-60 translate-y-4 z-10 text-2xl text-center font-bold bg-[#e56608ff] -skew-x-12 xl:w-1/6 w-1/3 h-auto self-center">
              {titleText}
          </div>
          <div className="z-1 w-full">
            <div className="xl:text-2xl text-xl text-center self-center xl:w-1/2 w-4/5 text-black">
              {/* <div className="z-10 text-black pr-20 pl-20 text-left translate-y-20">
                  <PrismicRichText field={bodyText}/>
              </div> */}
              <div className="xl:rotate-6">
                <div className="text-left pr-20 pl-20 pt-20 pb-20 xl:text-2xl text-xl text-center self-center xl:w-auto w-auto text-black -skew-y-6 background-paralelograma">
                  <div className="text-left xl:-skew-y-0 skew-y-6">
                    {/* I used this PrismicRichTect para saber el espacio que ocupa */}
                    <PrismicRichText field={bodyText}/>
                  </div>
                </div>

              </div>
            </div>

          </div>

      </div>
    </div>
  );
}

export default RentSection;