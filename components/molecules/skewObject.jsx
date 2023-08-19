import React, { useState, useEffect } from "react";
import { PrismicRichText } from "@prismicio/react"


const SkewObject = props => {
    

  const { background, title, body} = props

  return (
    <div className="bg-cover bg-center sm:h-screen h-screen pb-10" style={{ backgroundImage: `url(${background}`}}>
      <div className="pt-20 flex flex-col w-full text-white justify-center centrar-webkit hover:scale-110 transition duration-500">
          <div className="font-lato-black pt-2 pb-2 xl:-translate-x-60 translate-y-4 z-10 xl:text-4xl text-3xl text-center font-bold bg-[#e56608ff] -skew-x-12 xl:w-1/6 w-48 self-center">
              {title}
          </div>
          <div className="z-1 w-full">
            <div className="xl:text-2xl text-xl text-center self-center xl:w-1/2 w-4/5 text-black">
              <div className="xl:rotate-6">
                <div className="text-left xl:pr-20 xl:pl-20 pr-2 pl-2 pt-20 pb-20 xl:text-2xl text-xl text-center self-center w-auto text-black xl:-skew-y-6 -skew-y-12 background-paralelograma">
                  <div className="text-left xl:skew-y-0 skew-y-12">
                    <PrismicRichText field={body}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default SkewObject;