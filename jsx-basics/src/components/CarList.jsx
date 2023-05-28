import cars from "../data/cars";
import React from 'react'

const CarList = () => {
  return (
    <div>
      {cars.map((car, index) => (
          <p key={index}>{car}</p>
      ))}
    </div>
  )
}

export default CarList
