import React  from "react"
import styled, {css} from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas} from '@fortawesome/free-solid-svg-icons'

library.add(far, fas)

// const Div = styled.div`
//   display:flex;
//   align-items:center;
//   justify-content:space-between;
//   padding:5px 80px;
//   background:white;
// `
const Div = styled.div`
${(props) => {
  switch (props.$mode) {
    case "darkTheme":
      return css`
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:5px 80px;
      background:black;
      color:white;
      @media (max-width: 512px) {
        padding:5px 40px; 
        }
        @media (max-width: 425px) {
        padding:5px 10px; 
        }
      `;
    default:
      return css`
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:5px 80px;
      background:white;
      @media (max-width: 512px) {
      padding:5px 40px; 
      }
      @media (max-width: 425px) {
      padding:5px 10px; 
      }
      `;
  }
}}`



const Theme = styled.div`
  cursor:pointer
`


const Header = (props) => {
   

    return(
        <Div $mode={props.theme ? "darkTheme" :"lightTheme"}>
          <h3>Where in the World?</h3>
          <Theme style={{display:"flex", alignItems:"flex-end"}} onClick={() => props.handleTheme()}>
          {/* <FontAwesomeIcon icon={faMoon} /> */}
          
          {props.theme ? <FontAwesomeIcon icon={["fas", "moon"]} /> : <FontAwesomeIcon icon={["far", "moon"]} />}
          
          <span style={{paddingLeft:"5px"}}>{props.theme ? "Dark Mode":"Light Mode"}</span>
          </Theme>
        </Div>
    )
}

export default Header

