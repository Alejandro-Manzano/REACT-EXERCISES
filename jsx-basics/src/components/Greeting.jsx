import React from 'react';

function Greeting() {
  const currentHour = new Date().getHours();

  let greeting;
  if (currentHour >= 6 && currentHour < 12) {
    greeting = 'Buenos días';
  } else if (currentHour >= 12 && currentHour < 20) {
    greeting = 'Buenas tardes';
  } else {
    greeting = 'Buenas noches';
  }

  return <div>{greeting}</div>;
}

export default Greeting;