import React, { useState, createElement } from "react"
import Accordion from "./Accordion"


export default function Main() {
  const [query, setQuery] = useState("")
  const [isActive, setIsActive] = useState(false)
  const [dat, setDat] = useState([])

  //console.log("ingredients: " + element.ingredients + "\n\n" + "servings: " + element.servings + "\n\n" + "instructions: " + "\n" + element.instructions )

  const search = async () => {
    await fetch(`https://api.api-ninjas.com/v1/recipe?query=${query}`, {headers: {
      "X-API-KEY": process.env.REACT_APP_API_KEY
    }})
    .then(res => res.json())
    .then(data => {
      setDat(data)
      console.log(dat)
      setIsActive(true)
      
  })
  }


  return (
    <div className="container">
      <input placeholder="Search..." className="searchBar" onChange={(e) => {setQuery(e.target.value)}}/>
      <button className="button" onClick={search}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/> </svg></button>
      <div>
        <ul className="accordion-container">
          {isActive && dat.map(element => {return(<li><Accordion title={element.title} content={"ingredients: " + element.ingredients + "\n\n" + "servings: " + element.servings + "\n\n" + "instructions: " + "\n" + element.instructions} /></li>)})}
          
        </ul>
      
      </div>
    </div>
  )
}

