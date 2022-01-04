import React from 'react';
import Header from 'components/header';
import Countdown from 'components/countdown';

const Slide1 = () => {
  return (
    <div className="h-full w-full">
      <Header
        alt="vista panorámica de toledo"
        backgroundImage="/toledo-view.jpg"
        text="¡Bienvenidos a la boda del año!"
      />
      <div>
      <div className="px-4 py-8 lg:px-16 lg:py-16 h-2/3 md:flex md:justify-center md:items-center">
        <Countdown />
      </div>
      <div className="px-6 py-8 lg:px-16 lg:py-16 h-2/3 md:flex md:justify-center md:items-center">
        <article className="space-y-4 sm:max-w-prose text-left">
          <p className="text-lg text-gray-600 font-sans">
            Os esperamos en la {' '}
            <strong className="font-bold  text-blue">
              Capilla de San Pedro de la Catedral de Toledo
            </strong>

            (entrada junto al ayuntamiento bajo el arco)
            a las {'  '}
            <strong className="font-bold">
              18:00 horas.
            </strong>
            <em className="text-blue-600"><a href="https://goo.gl/maps/37Q55nhqoFUasfyGA"> Cómo llegar </a></em>
          </p>
          <p className="text-lg text-gray-600 font-sans">
            A continuación, seguiremos disfrutando en el cigarral{' '}
            <strong className="font-bold">
              Viñedos de Santa María de Toledo a las 20:30.
            </strong>
            <em className="text-blue-600"> <a href="https://g.page/CigarralSantaMaria?share"> Cómo llegar </a></em>
          </p>
        </article>
      </div>
      </div>
    </div>
  );
};

export default Slide1;
