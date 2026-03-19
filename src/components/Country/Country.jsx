import React, { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
  const [visited, setVisited] = useState(false);
  // console.log(country.flags.flags);
  //  console.log(handleVisitedCountries);
  const handleVisited = () => {
    console.log('button click');
    // setVisited(true)

    // basic syestem
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }

    // second syestem
    // setVisited(visited ? false : true);

    // third syestem
    setVisited(!visited);
    handleVisitedCountries(country);

  }

  return (
    <div className={`country ${visited && 'country_visited'}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population.population}</p>
      <p>Area: {country.area.area}</p>
      <p>{country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
      <button onClick={handleVisited}>
        {visited ? 'Visited' : 'Not visited'}
      </button>
      <button onClick={()=> {handleVisitedFlags(country.flags.flags.png)}}>Add flag: </button>
    </div>
  );
};

export default Country;