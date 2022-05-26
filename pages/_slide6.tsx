import React from 'react';
import Image from 'next/image';
import { getCurrentBreakpoint } from 'utils/get-current-breakpoint';

const Slide4 = (props: any) => {
  const currentBreakpoint = getCurrentBreakpoint();
  return (
    <div className="h-full w-full">
      <div className="h-full grid grid-rows-5 sm:grid-rows-1 sm:grid-cols-2">
        <div className="h-full relative row-start-1 row-end-2 sm:row-span-1">
          <Image src="/cigarral.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="bottom left"
          />
        </div>
        <div className="flex flex-1 flex-col justify-between row-span-5 sm:row-span-1 sm:p-4 lg:px-16 lg:py-16">
          <article className="px-4 pt-5 sm:p-0 space-y-4 sm:max-w-prose mb-2 sm:mb-12">
            <h2 className="text-gray-800 font-extrabold text-3xl font-serif">
              Cigarral Viñedos de Santa María
            </h2>
            <p className="text-md text-gray-600 font-sans mt-6 mb-6">

              Custodiando la ciudad de Toledo desde lo alto del Cerro del Emperador se encuentra
              Viñedos Cigarral Santa María.
              </p>
            <p className="text-md text-gray-600 font-sans mt-6 mb-6">
              Esperamos que os guste tanto como a nosotros, para acceder puedes hacer click en
              el siguiente enlace:
            </p>
          </article>
          {typeof window !== 'undefined' && (
            <iframe
              width="100%"
              height={!currentBreakpoint ? '50%' : '80%'}
              className="border-0"
              loading="lazy"
              allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.9052707667925!2d-4.029352584261822!3d39.842051598311976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6a0ba67c5ac745%3A0x7ce80cc9d9cd28c6!2sVi%C3%B1edos%20Cigarral%20Santa%20Mar%C3%ADa!5e1!3m2!1ses!2ses!4v1639855070593!5m2!1ses!2ses"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Slide4;
