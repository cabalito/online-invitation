import React from 'react';
import Header from 'components/header';
import Countdown from 'components/countdown';

const Slide1 = () => {
  return (
    <div className="h-full w-full">
      <Header
        alt="vista panorámica de toledo"
        backgroundImage="/toledo-view.jpg"
        text="Bienvenidos a la boda del año!"
      />
      <div>
      <div className="px-4 py-8 lg:px-16 lg:py-16 h-2/3 md:flex md:justify-center md:items-center">
        <Countdown />
      </div>
      <div className="px-6 py-8 lg:px-16 lg:py-16 h-2/3 md:flex md:justify-center md:items-center">
        <article className="space-y-4 sm:max-w-prose text-left">
          <p className="text-md text-gray-600 font-sans">
            Os esperamos en la {' '}
            <strong className="font-bold">
              <a href="https://goo.gl/maps/37Q55nhqoFUasfyGA"> Capilla de San Pedro de la Catedral de Toledo </a>
            </strong>
            (entrada junto al ayuntamiento bajo el arco)
            a las {'  '}
            <strong className="font-bold">
              18:00 horas.
            </strong>
          </p>
          <p className="text-md text-gray-600 font-sans">
            A continuación, seguiremos disfrutando en el{' '}
            <strong className="font-bold">
              <a href="https://g.page/CigarralSantaMaria?share"> Santa María de Toledo a las 20:30. </a>
            </strong>

          </p>
        </article>
      </div>
      </div>
    </div>
  );
};

export default Slide1;
