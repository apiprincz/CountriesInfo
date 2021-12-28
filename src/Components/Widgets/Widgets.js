import React from "react"
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSearch} from '@fortawesome/free-solid-svg-icons'

const Div = styled.div`
    display:flex;
    justify-content:space-between;
    padding:20px 80px 0px;
    @media (max-width: 600px) {
        padding:20px 40px 0px;
        
      }
    @media (max-width: 512px) {
        flex-direction: column;
      }
    @media (max-width: 512px) {
        padding:20px 0px 0px;
        width:80%;
        margin:0 auto
      }
  `

  const Select = styled.select`
@media (max-width: 512px) {
    margin-top:20px;
    width:60%;
  }
`

const Widgets = (props) => {
    
    
    return(
        <Div>
        <div style={{position:"relative"}}>
          <FontAwesomeIcon icon={faSearch} className="searchIcon" />
          <input value={props.value} onChange={(e) => props.handleChange(e)} placeholder="Search for a country" />

            </div> 
          <Select
                
                  style={{ height: "35px" }}
                  onChange={(e) => props.handleSelect(e)}
                >
                    <option value="" disabled selected>Filter By Region</option>
                  <option value="africa">Africa</option>
                  <option value="america">America</option>
                  <option value="asia">Asia</option>
                  <option value="europe">Europe</option>
                  <option value="oceania">Oceania</option>
                </Select>
        </Div>
    )
}

export default Widgets

