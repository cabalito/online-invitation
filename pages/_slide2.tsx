import React from 'react';
import Image from 'next/image';

const Slide2 = () => {
  return (
    <div className="slide">
      <div className="h-full w-full p-4 lg:px-16 lg:py-16 bg-gray-800">
        <div className="h-full grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="h-full lg:col-span-2">
            <div className="aspect-w-16 aspect-h-9 h-full overflow-hidden relative">
              <Image
                src="/proposal.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
          <div className="h-full flex flex-row-reverse lg:flex-col">
            <div className="h-full w-full h-2/3 relative">
              <Image
                src="/couple.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="items-center justify-center h-full lg:h-1/3 w-full">
              <h3 className="text-white text-3xl sm:text-5xl lg:text-xl lg:text-5xl font-extrabold font-serif">
                Nuestra Historia
              </h3>
              <p className="text-md text-white font-sans mt-6 mb-10">
                El sol se ponía desde el desierto del Sahara donde por fin nos dabamos el
                <strong className="font-bold"> ¡Sí, quiero! </strong>
              </p>
              <p className="text-md text-white font-sans mt-2">
                Han pasado más de 12 años desde que se cruzaron nuestros caminos. Estamos deseando
                que el 18 de junio sigáis formando parte de nuestra historia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
