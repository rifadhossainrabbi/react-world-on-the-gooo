import Country from '../Country/Country';
import './Countries.css'
import React, { use, useState } from 'react';

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedFlags = (flag) => {
    // console.log('handle visited country flag', flag );
    const newVistiedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVistiedFlags);
  }

  const handleVisitedCountries = (country) => {
    console.log('handle visited countries', country.name.common);
    // jehetu array/objects gulo tader ager referance dhore rakhe tai eikhane spread operator er maddhome notun operator toiri kora hoyase ja setVisitedCountries er moddhe boshano hoyase
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  }

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  console.log(countries);
  return (
    <div>
      <h1>In the countries: {countries.length}</h1>
      <h3>Total Country visited: {visitedCountries.length}</h3>
      <h3>Total Visited Flags: {visitedFlags.length}</h3>

      <ol>
        {
          visitedCountries.map(country => <li key={country.cca3.cca3}>
            {country.name.common}</li>)
        }
      </ol>

      <div className='visited_flags_container'>
        {
          visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
        }
      </div>

      <div className='countries'>
         {
          countries.map(country => <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>)
        }
      </div>
      
    </div>
  );
};

export default Countries;