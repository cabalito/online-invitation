import React from 'react';
import Image from 'next/image';
import { getCurrentBreakpoint } from 'utils/get-current-breakpoint';

const Slide3 = (props: any) => {
  const currentBreakpoint = getCurrentBreakpoint();
  return (
    <div className="h-full w-full">
      <div className="h-full grid grid-rows-5 sm:grid-rows-1 sm:grid-cols-2">
        <div className="h-full relative row-span-2 sm:row-span-1">
          <Image src="/capilla.jpg" layout="fill" objectFit="cover" />
        </div>
        <div className="flex flex-col justify-between row-span-3 sm:row-span-1 sm:p-4 lg:px-16 lg:py-16">
          <article className="px-4 pt-5 sm:p-0 space-y-4 sm:max-w-prose mb-2 sm:mb-8">
            <h2 className="text-gray-800 font-extrabold text-3xl font-serif">
              Capilla de San Pedro
            </h2>
            <p className="text-md text-gray-600 font-sans">
              La ceremonia se celebrará en la capilla de San Pedro, en la catedral de
              Toledo.
            </p>
            <p className="text-md text-gray-600 font-sans">
              Se accede a través de la{' '}
              <strong className="font-bold">calle Arco del Palacio</strong>{' '}
              (bajo el arco de palacio junto a la plaza del ayuntamiento de
              Toledo).
            </p>
          </article>
          <p className="text-md text-gray-600 font-sans">
            Como llegar a la capilla </p>
          {typeof window !== 'undefined' && (
            <iframe
              width="100%"
              height={!currentBreakpoint ? '50%' : '100%'}
              className="border-0"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d992.003690095388!2d-4.025028170761653!3d39.857455828201985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6a0ba689676e9f%3A0x6ed9df9400d342f1!2sC.%20Arco%20de%20Palacio%2C%202%2C%2045002%20Toledo!5e1!3m2!1ses!2ses!4v1639854227969!5m2!1ses!2ses"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Slide3;
