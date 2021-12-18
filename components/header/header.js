import React from 'react';
import Image from 'next/image';

const Header = (props) => {
  const { text, alt, backgroundImage } = props;
  return (
    <header className="aspect-w-16 aspect-h-9 h-1/3 overflow-hidden relative">
      <div className="px-4 py-8 lg:px-16 lg:py-16 h-full w-full absolute bg-black bg-opacity-40 z-10 flex items-center justify-center">
        <p className="text-3xl md:text-4xl text-white font-serif font-extrabold">
          {text}
        </p>
      </div>
      {backgroundImage && (
        <Image
          alt={alt}
          layout="fill"
          src={backgroundImage}
          objectFit="cover"
          objectPosition="top"
        />
      )}
    </header>
  );
};

export default Header;
