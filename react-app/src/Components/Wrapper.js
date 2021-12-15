import React from "react";
import styles from "./Wrapper.css";
import CountriesWrapper from "./CountriesWrapper"
import RegionsDropdown from "./RegionsDropdown";
import Searchbar from "./Searchbar";

export default Wrapper;

function Wrapper ( {colors, colorMode} ) {

  const [isDataLoaded, setIsDataLoaded] = React.useState(false);
  const [fetchedCountriesList, setFetchedCountriesList] = React.useState();
  const [filteredCountriesList, setFilteredCountriesList] = React.useState();

  React.useEffect(() => {
    const API_URL = `https://restcountries.com/v2/all`;
    async function fetchAPI () {
      setIsDataLoaded(false);
      const response = await fetch(API_URL);
      const result = await response.json();
      setFetchedCountriesList(result);
      setFilteredCountriesList(result);
      setIsDataLoaded(true);
    };
    fetchAPI();
  }, [] );

  function filterByRegion (region) {
    if (isDataLoaded) {
      const res = fetchedCountriesList.filter(
        item => item["region"] === region
      )
      setFilteredCountriesList(res);
    }
  }

  function clearFilter () {
    if (isDataLoaded) {
      setFilteredCountriesList(fetchedCountriesList);
    }
  }

  function filterByName (e) {
    if (isDataLoaded) {
      const res = fetchedCountriesList.filter(
        item => item["name"].toLowerCase().includes(e.target.value.toLowerCase())
      )
      setFilteredCountriesList(res)
    }
  }

  return (
    <main style={colors[colorMode]}>

      <div id="searchdiv">
        <Searchbar filterByName={filterByName}/>
        <RegionsDropdown filterByRegion={filterByRegion} clearFilter={clearFilter}/>
      </div>

      {isDataLoaded ? 
        (
          <CountriesWrapper 
            colors={colors} 
            colorMode={colorMode} 
            countries={filteredCountriesList} 
            allcountries={fetchedCountriesList}/> 
        ) : (
            <div style={{display: "grid", placeItems: "center"}}>Loading....</div>
        )
      }

    </main>
  )
}