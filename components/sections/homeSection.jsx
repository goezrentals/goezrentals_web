import React from "react";


const HomeSection = props => {

  const { backgroundUrl, topText, bottomText} = props

  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: `url(${backgroundUrl}`}}>
      <div className="flex flex-col w-full text-white justify-center h-screen">
          <div className="text-2xl text-center xl:hidden mb-28 font-bold">
              Renting a car is so easy!
          </div>
          <div className="text-4xl text-center font-bold">
              {topText}
          </div>
          <div className="pr-5 pl-5 h-12 text-6xl bg-[#e56608ff] text-center self-center -skew-y-12 rotate-12 font-extrabold">
            <div className="-translate-y-2">
              {bottomText}
            </div>
          </div>
      </div>
    </div>
  );
}

export default HomeSection;