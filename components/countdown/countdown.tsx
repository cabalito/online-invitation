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
    <div className="flex justify-center sm:items-center md:justify-start mb-8 md:mr-8 md:mb-0">
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
              <div className="flex flex-grow-0 border-4 rounded-md border-red-400 space-x-4 max-w-min px-2">
                {items.map((item, i) => (
                  <div key={item.value} className="flex flex-col space-y-2">
                    <span
                      className={`text-3xl font-extrabold font-serif text-center sm:text-5xl ${
                        item.accent ? 'text-red-400' : 'text-gray-800'
                      }`}
                    >
                      {/* @ts-ignore */}
                      {countdownOptions[item.value]}
                    </span>
                    <span
                      className={`text-lg font-extrabold font-serif text-center sm:text-1xl ${
                        item.accent ? 'text-red-400' : 'text-gray-800'
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            );
          }
        }}
      />
    </div>
  );
};

export default Countdown;
