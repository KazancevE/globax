import {useState, useEffect} from "react"
import find_logo from '../img/logo_find.svg'
import './finder.css'

function Finder ({onChange}) {
  
    const nameSearch = (e) => {
      // setSearchTerm()
      onChange(e.target.value)
    }

    return ( 
        <div className="finder">
            <input 
            // className="finder"
            id="finder"
            autoComplete="off" 
            type = 'text'
            placeholder=""
            onChange={nameSearch}/>
            {/* <img src={find_logo} alt="find"/> */}
        </div>
     );
}

export default Finder;