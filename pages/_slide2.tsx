import React from 'react';
  import Image from 'next/image';

  const Slide2 = () => {
  return (
<div className="slide">
  <div className="h-full w-full p-4 lg:px-16 lg:py-16 bg-gray-000">

    <div className="h-full grid grid-cols-1 gap-4 lg:grid-cols-3 lg:h-1/3">
      <div className="h-full lg:col-span-2">
        <div className="items-center justify-center h-full lg:h-1/3 w-full">
          <h3 className="text-gray-800 text-3xl sm:text-5xl lg:text-xl lg:text-5xl font-extrabold font-serif">
            Servicio de autobuses
          </h3>

          <p className="text-gray-800 text-md text-white font-sans mt-4 mb-10">
            Existe un servicio de autobuses exclusivo para nuestros invitados. Este autobús será de la marca DEMETRIO ALVAREZ y hará dos trayectos:
            <ul>
              <li>Al salir de misa, subida al restaurante. El autobús estará esperando en la plaza de <strong className="text-bold">Zocodover a las 19.45</strong></li>
              <li>Al finalizar la barra libre, vuelta a la plaza de Zocodover con parada en la rotonda de la estación para quienes hayan aparcado en el parking de la estación. El autobus esperará en el aparcamiento del restaurante al finalizar la barra libre.</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="h-full flex flex-row-reverse lg:flex-col">
        <div className="h-full w-1/2 relative ">
          <Image
            src="/demetrio.jpeg"
            layout="fill"
            objectFit="fill"
            objectPosition="center"
          />
        </div>
      </div>
    </div>


  </div>
</div>
  );
  };

  export default Slide2;
