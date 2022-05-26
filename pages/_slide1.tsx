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
      <div className="px-6 py-8 lg:px-16 lg:py-5 h-2/3 md:flex md:justify-center md:items-center">
        <article className="space-y-4 sm:max-w-prose text-left">
          <strong  className="font-bold text-red-600">
            Aviso: Ha habido un cambio en la hora y la puerta de acceso
          </strong>
          <p className="text-lg text-gray-600 font-sans">
            Os esperamos el próximo {' '} <strong className="font-bold"> Sábado 18 de Junio </strong>
            en la {' '} <strong className="font-bold">
            Capilla de San Pedro de la Catedral de Toledo
            </strong>
            (Entrada por puerta del Reloj)
            <strong className="font-bold"> a las 17:30 horas
            </strong>
            <em className="text-blue-600"><a href="https://goo.gl/maps/nm5jp9iQzExDqfb79"> Cómo llegar </a></em>
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
