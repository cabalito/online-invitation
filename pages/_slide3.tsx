import React from 'react';
  import Image from 'next/image';

  const Slide2 = () => {
  return (
<div className="slide">
  <div className="h-full w-full p-4 lg:px-16 lg:py-16 bg-gray-000">

    <div className="h-full grid grid-cols-1 lg:grid-cols-3 lg:h-1/3">
      <div className="h-full lg:col-span-2">
        <div className="items-center justify-center h-full lg:h-1/3 w-full">
          <h3 className="text-gray-800 text-3xl sm:text-5xl lg:text-xl lg:text-5xl font-extrabold font-serif">
            Acceso en coche
          </h3>

          <p className="text-gray-800 text-md text-white font-sans mt-4 mb-5">
            Además de nuestra boda, ese día Toledo se encuentra en las fiestas del Corpus.
            <p>La parte positiva es que todas las calles y patios están decorados, os animamos a que os deis un paseo por las calles del casco para visitarlo.</p>
            <p>La parte negativa es que el aparcamiento para acceder a la catedral estará complicado; por ello, os damos un par de consejos:</p>
            <ol className=" mt-6 mb-10">
              <li>1. Aparcar en el parking gratuito de la estación de autobuses <a className="text-blue-600" href="https://goo.gl/maps/CuxzPUwTAKeAvX1JA">(Pincha aquí para saber cómo llegar)</a> y subir utilizando las escaleras mecánicas. Al salir de misa podreis utilizar el servicio de autobuses.</li>
              <li>2. Aparcar en el restaurante. El restaurante se encuentra alejado del casco histórico por lo que tendrá aparcamiento de sobra; desde aquí, podreis tomar un taxi para llegar a la catedral(apróximadamente 10€)</li>
              <li>3. Los autobuses de linea que realizan parada en Zocodover son: Linea 5, 12, 61, 62, 511</li>
            </ol>
          </p>
        </div>
      </div>
      <div className="h-2/3 flex flex-row-reverse ">
        <div className="w-1/2 relative ">
          <Image
            src="/parking.jpeg"
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
