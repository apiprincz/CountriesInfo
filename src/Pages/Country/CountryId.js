import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import {Link} from "react-router-dom"
import { useParams} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import "./CountryId.css";
import Loader from "../../Components/Loader/Loader"

// const AppContainer = styled.li`
//   width: 50%;
//   padding: 40px 0px 0px 25px;
// `;
const AppWrapper = styled.div`
  // height:calc(100vh - 150px);
  height:100vh;
  display: flex;
  justify-content: inherit;
  width: 100%;

  flex-direction: column;
`;
const LoaderWrapper = styled.div`
  height: 100vh;
  text-align:center;
  display:flex;
  align-items:center
`;
const Div = styled.div`
  //    padding-left:30px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding-top: 50px;
  //    padding:0px 100px;
  @media (max-width: 768px) {
    flex-direction:column
       
      }
  
`;
const AppHeader = styled.h1`
  font-weight: bold;
  font-size: 30px;
`;
const AppCategory = styled.span`
  font-weight: bold;
  font-size: 15px;
`;
const Img = styled.img`
  height: 400px;
  width: 500px;
  // height:100%;

  @media (max-width: 1000px) {
  width: 400px;
     
    }
  @media (max-width: 1000px) {
  width: 80%;
     
    }
`;
const Para = styled.p`
  padding-top: 5px;
  margin: 0;
  font-size: 15px;
  
`;

const CountryId = () => {
  let { name } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState([]);
  //  console.log(name)

  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${name}`)
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setCountry(data);
          // console.log(data)
          console.log(country[0]);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  });

  if (error) {
    return <div style={{height:"100vh", textAlign:"center", display:"flex", alignItems:"center", justifyContent:"center"}}>
        <div style={{textAlign:"center"}}>
         Page Not Found...Try Reconnecting

         </div>
        </div>;
  } else if (!isLoaded) {
    return <LoaderWrapper >
        <div style={{textAlign:"center", position:"absolute", top:"50%", left:"50%"}}>

        <Loader/>
        </div>
    </LoaderWrapper>;
  } else {
    return (
      <AppWrapper>
        
            <a href="/" className="backLink">
          <FontAwesomeIcon icon={faLongArrowAltLeft} />

          <span style={{ paddingLeft: "5px" }}>Back</span>
          </a>
        
        {country.map((country) => {
          return (
            <Div>
              <Img src={country.flag} alt="flag" />
              <div className="categoryWrapper">
                <AppHeader>{country.name}</AppHeader>

                <div className="categoryContainer">
                  <Para className="categoryContent">
                    {" "}
                    <AppCategory> Population </AppCategory>:{" "}
                    {country.population.toLocaleString().replace(/,/g, ".")}
                  </Para>
                  <Para className="categoryContent">
                    {" "}
                    <AppCategory> Region </AppCategory>: {country.region}
                  </Para>
                  <Para className="categoryContent">
                    {" "}
                    <AppCategory> Capital </AppCategory>: {country.capital}
                  </Para>
                  <Para className="categoryContent">
                    {" "}
                    <AppCategory> Languages </AppCategory>:{" "}
                    {country.languages.map((lan) => {
                      return <span>{lan.name},</span>;
                    })}
                  </Para>
                  <Para className="categoryContent">
                    {" "}
                    <AppCategory> Currency </AppCategory>:{" "}
                    {country.currencies[0].name}
                  </Para>
                  <Para className="categoryContent">
                    {" "}
                    <AppCategory> TimeZones </AppCategory>:{" "}
                    {country.timezones[0]}
                  </Para>
                </div>
              </div>
            </Div>
          );
        })}
      </AppWrapper>
    );
  }
};

export default CountryId;
