import React from 'react'
import Country from './Country';
import Modal from './Modal';
import styles from "./CountriesWrapper.css"
import { useSpring, animated } from 'react-spring'

export default CountriesWrapper;

function CountriesWrapper ( {countries, allcountries} ) {

  const countriesCards = countries.map( (item, index) => 
    <Country 
      key={index}
      countries={allcountries} 
      countryID={allcountries.indexOf(item)} 
      showModal={showModal}
    />
  )

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [modalCountryID, setModalCountryID] = React.useState(0);

  const animation = useSpring({
    opacity: isModalVisible ? '1' : '0',
  })

  const AnimatedModal = animated(Modal)

  function showModal (id) {
    setModalCountryID(id);
    setIsModalVisible(true);
  }

  function hideModal () {
    setIsModalVisible(false);
  }

  return (
    <div id="countries-wrapper">
      {countriesCards}
      {isModalVisible && 
        <AnimatedModal 
          modalCountryID={modalCountryID} 
          setModalCountryID={setModalCountryID}
          hideModal={hideModal} 
          countries={allcountries}
        /> 
      }

    </div>
  )
}