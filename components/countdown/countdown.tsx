import React from 'react';
import ReactCountdown from 'react-countdown';
import fromUnixTime from 'date-fns/fromUnixTime';

const date = new Date(2022, 5, 18, 18, 0, 0, 0);

const Countdown = () => {
  const items = [
    { value: 'days', label: 'Días' },
    { value: 'hours', label: 'Horas' },
    { value: 'minutes', label: 'Minutos' },
    { value: 'seconds', label: 'Segundos', accent: true }
  ];
  return (
    <div className="flex justify-center sm:items-center md:justify-start md:mr-8 md:mb-0">
      <ReactCountdown
        autoStart
        daysInHours={false}
        date={date}
        renderer={(countdownOptions) => {
          if (countdownOptions.completed) {
            // Render a completed state
            return null;
          } else {
            // Render a countdown

            return (
              <div className="flex flex-grow-0 rounded-md  space-x-8  ">
                    <h2
                      className={`text-xl font-bold text-gray-600 font-sans`}
                    >
                    {/* @ts-ignore */}
                    ¡Sólo faltan <strong className="font-bold"> {countdownOptions['days']}</strong> días
                    , <strong className="font-bold">{countdownOptions['hours']}</strong> horas
                    y <strong className="font-bold">{countdownOptions['minutes']}</strong> minutos!
                    </h2>
              </div>
            );
          }
        }}
      />
    </div>
  );
};

export default Countdown;
