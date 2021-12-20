import React from 'react'
import styles from "./Country.css"
import {useSpring, animated} from 'react-spring'

export default Country;

function Country ( {countries, countryID, showModal} ) {

  const countryData = {};
  const propertiesArray = ["name", "population", "area", "region", "capital"]; 

  const appearence = useSpring({
    from: { opacity: 0, transform: 'translateY(-100px)'},
    to: { opacity: 1, transform: 'translateY(0px)'},
  })

  for (let el of propertiesArray) {
    let result;
    if (countries[countryID][el] === undefined) result = "--"
    else {
      result = countries[countryID][el];
      if (el === "name") {
        const arr = result.split("(");
        if (arr.length > 1) arr[1] = `(${arr[1]}`;
        result = [];
        result[0] = arr[0];
        result[1] = arr[1];
      }
      if (el === "area") result = result.toLocaleString() + " km2";
      if (el === "population") result = result.toLocaleString();
    }

    countryData[el] = result;
  }

  return (
    <animated.div style={appearence} className="country" onClick={() => showModal(countryID)}>
      <img 
      alt="country flag" 
      src={countries[countryID]["flags"]["svg"]} />
      <div className="country-info">
        <h2>{countryData.name[0]}</h2>
        <span>{countryData.name[1]}</span>
        <p><span>Population: </span>{countryData.population}</p>
        <p><span>Area: </span>{countryData.area}</p>
        <p><span>Region: </span>{countryData.region}</p>
        <p><span>Capital: </span>{countryData.capital}</p>
      </div>
    </animated.div>
  )
}