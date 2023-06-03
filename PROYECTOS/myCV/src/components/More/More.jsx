//idiomas, skills y, por ejemplo, voluntariados.
import "./More.css";

import React from 'react'

const More = ({languages, habilities, volunteer}) => {
  return (

    <div className="card-all">
      <h2>Lenguages</h2>
      <div className="card">

        <p>📚 {languages.language}</p>
        <p>📝 Writing: {languages.wrlevel}</p>
        <p>🗣 Speaking: {languages.wrlevel}</p>

      </div>

    <h2>Skills</h2>
    <div className="card">

      {habilities.map((item) => {
        return (
          <div>
            <p>- {item}</p>
          </div>
        );
      })}

    </div>

    <h2>Volunteer</h2>
    <div className="card">

      {volunteer.map((item) => {
        return (
          <div>
            <h3>🤲 {item.name}</h3>
            <p>{item.where}</p>
            <p>{item.description}</p>
          </div>
        );
      })}

    </div>

  </div>

  )
}

export default More
