import React from "react";
import { PrismicNextLink } from '@prismicio/next'
import Image from "next/image"

const CatalogSection = ({ vehiclesList, bookNowText }) => {

    let vehiclesComponents = []
    if (vehiclesList !== undefined) {
        vehiclesList.forEach((element, index, array)  => {
    
        // Uso esta lógica del IF para poder manipular el último elemento. 
        // En este caso necesito que, si el número de elementos es impar, el elemento final lo centre en pantalla en pantallas Desktop.

          if(index  === (array.length - 1) && !(array.length % 2 === 0)) {
            vehiclesComponents.push(
                <div className="flex justify-center col-span-2 padding hover:scale-110 transition duration-500" key={index}>
                    <div className="flex flex-col">
                        <PrismicNextLink href={element.data.turo_url} className="">
                        <Image
                            className=""
                            src={element.data.vehicle_image.url}
                            width="350"
                            height="350"
                            alt="Car"
                        />
                        </PrismicNextLink>
                        <div>
                            <PrismicNextLink href={element.data.turo_url} className="">
                                <div className="mr-6 ml-auto text-white h-auto text-center text-xl font-bold bg-[#e56608ff] -skew-x-12 w-1/3">
                                    {bookNowText}
                                </div>
                            </PrismicNextLink>
                        </div>
                    </div>
              </div>
            )
          }
          else {
            vehiclesComponents.push(
                <div className="flex justify-center padding hover:scale-110 transition duration-500" key={index}>
                    <div className="flex flex-col ">
                        <PrismicNextLink href={element.data.turo_url} className="">
                        <Image
                            className=""
                            src={element.data.vehicle_image.url}
                            width="350"
                            height="350"
                            alt="Car"
                        />
                        </PrismicNextLink>
                        <div>
                            <PrismicNextLink href={element.data.turo_url} className="">
                                <div className="mr-6 ml-auto text-white h-auto text-center text-xl font-bold bg-[#e56608ff] -skew-x-12 w-1/3">
                                    {bookNowText}
                                </div>
                            </PrismicNextLink>
                        </div>
                    </div>
              </div>
            )
          }
        }
        )
      }

  return (
    <div id="catalog" className="centrar-webkit">
        <div className="xl:w-3/4 w-full h-full xl:grid xl:grid-cols-2 flex-col mt-20 ">
            {vehiclesComponents}
        </div>
    </div>
  );
}

export default CatalogSection;
