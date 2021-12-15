import React from "react"
import styles from "./Modal.css"

const iconClose = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>

export default function Modal ( {modalCountryID, setModalCountryID, hideModal, countries} ) {

  function getCountryData(id,type) {
    if (countries[id][type] === undefined) return "--"
    if (type === "area") return `${countries[id][type].toLocaleString()} km2`
    return countries[id][type]
  }

  function getCountryBorders() {
    if (countries[modalCountryID]["borders"] === undefined) return null
    return countries[modalCountryID]["borders"].map(element => {
      const borderCountryIndex = countries.findIndex(item => item["alpha3Code"] === element)
      return (
        <button onClick={() => setModalCountryID(borderCountryIndex)}>
          {getCountryData(borderCountryIndex, "name")}
        </button>
      )
    })
  }

  const countryBorders = getCountryBorders()

  return (
    <div className="modal-main">
      <div className="modal-content">
        <button onClick={() => hideModal()}>{iconClose}</button>
        <img alt="country flag" src={countries[modalCountryID]["flags"]["svg"]} />
        <div className="modal-header">
          <h1>{countries[modalCountryID]["name"]}</h1>
          <h2 className="modal-domain">{countries[modalCountryID]["topLevelDomain"]}</h2>
        </div>
        <div className="modal-body">
          <div className="modal-details">
            <p className="modal-details-par">Capital:<br />{getCountryData(modalCountryID, "capital")}</p>
            <p className="modal-details-par">Population:<br />{getCountryData(modalCountryID, "population").toLocaleString()}</p>
            <p className="modal-details-par">Area:<br />{getCountryData(modalCountryID, "area").toLocaleString()}</p>
            <p className="modal-details-par">Region:<br />{getCountryData(modalCountryID, "region")}</p>
          </div>
          <div>
            <h3>Borders with:</h3>
            <div className="modal-borders">
              {countryBorders ?? "Noone :("}
            </div>
        </div>
        </div>
      </div>
      <div className="clicktohide" onClick={() => hideModal()}></div>
    </div>
  )
}