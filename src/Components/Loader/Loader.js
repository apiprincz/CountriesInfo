import "./Loader.css";
import styled from "styled-components"


const Div = styled.div`
text-align:center;
 position:absolute;
  top:50%;
   left:50%;
   transform:translate(-50%, -50%)
`

const Loader = () => {
  return( 
  <Div>
  <div className="lds-dual-ring"></div>;
  
  </Div>)
};

export default Loader;
