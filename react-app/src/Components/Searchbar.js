import React from "react"
import styles from "./Searchbar.css"

export default function Searchbar ( {filterByName} ) {
  return (
    <input 
      className="searchbar"
      id="countrysearch" 
      placeholder="Search for a country..." 
      onChange={filterByName}
    />
  )
}