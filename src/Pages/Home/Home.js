import React, { useState, useEffect } from "react";
import Country from "../../Components/Country/Country";
import Widgets from "../../Components/Widgets/Widgets";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader/Loader"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // import { far } from '@fortawesome/free-regular-svg-icons'
// import { faSearch} from '@fortawesome/free-solid-svg-icons'

const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
  padding:0px 0px 30px;
  margin-bottom:0;
  min-height:100vh
`;
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
        padding:20px 25px 0px;
        
      }
  `
  const LoaderWrapper = styled.div`   
  height:100vh

`
// const Select = styled.select`
// @media (max-width: 512px) {
//     margin-top:20px
//   }
// `
const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [isSelected, setIsSelected] = useState("");
  const dispatch = useDispatch();
  const country = useSelector((state) => state.data);
  const [region, setRegion] = useState([])
  const [searchData, setSearchData] = useState([])



  
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then(
        (data) => {
          dispatch({ type: "FetchData", data: data });
          setIsLoaded(true);
          // setCountry(data);
          console.log(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          dispatch({ type: "ERROR", error: error });
        }
      );
  });

  const handleChange = (e) => {
    setFilter(e.target.value);
    setIsSelected("");
    setIsLoaded(false);
    
    
    //  fetch("https://restcountries.com/v2/name/")
    fetch(`https://restcountries.com/v2/name/${e.target.value}`)
      .then((res) => res.json())
      .then(
        (data) => {
        //   dispatch({ type: "FetchData", data: data });
        setSearchData(data)
          setIsLoaded(true);
          // setCountry(data);
          console.log(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          dispatch({ type: "ERROR", error: "Not Found! Try Again" });
        }
      );

    console.log(filter);
  };


//   fetch(`https://restcountries.com/v2/name/${name}`)

  const handleSelect = (ev) => {
    setIsSelected(ev.target.value);
    setFilter("");
    setIsLoaded(false);

    console.log("isSelectedLength" + isSelected.length)
    console.log("isSelected" + isSelected)
    if (ev.target.value === "africa" || "europe" || "oceania" || "asia") {
        console.log("true")
        console.log(isSelected)
        fetch(`https://restcountries.com/v2/region/${ev.target.value}`)
        // fetch(`https://restcountries.com/v2/continent/${ev.target.value}`)
        .then((res) => res.json())
      .then(
        (data) => {
        //   dispatch({ type: "FetchData", data: data });
        setRegion(data)
        console.log("region" + [region])
          setIsLoaded(true);
          // setCountry(data);
          console.log(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
          dispatch({ type: "ERROR", error: error });
        }
      );
    }
    else if(ev.target.value === "america"){
      fetch(`https://restcountries.com/v3/region/${ev.target.value}`)
      // fetch(`https://restcountries.com/v3/continent/${ev.target.value}`)
      .then((res) => res.json())
    .then(
      (data) => {
      //   dispatch({ type: "FetchData", data: data });
      setRegion(data)
      console.log("region" + [region])
        setIsLoaded(true);
        // setCountry(data);
        console.log(data);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
        dispatch({ type: "ERROR", error: error });
      }
    );
    } else return
  }
  

  if (error) {
    return (
      <div >
         <Widgets value={filter} handleChange={(e) => handleChange(e)} handleSelect= {(e) => handleSelect(e)}/>
         <div style={{textAlign:"center"}}>
         Page Not Found...Try Reconnecting

         </div>
      </div>
    );
  } else if (!isLoaded) {
    return (
      <LoaderWrapper>
         <Widgets value={filter} handleChange={(e) => handleChange(e)} handleSelect= {(e) => handleSelect(e)}/>    
        <Loader/>
      </LoaderWrapper>
    );
  } else {
    return (
      <div>
         <Widgets value={filter} handleChange={(e) => handleChange(e)} handleSelect= {(e) => handleSelect(e)}/>
        {isSelected.length > 0 ? <Div> <h3>Search Results For <span style={{textTransform:"Capitalize"}}>{isSelected}</span>({region.length})</h3></Div>: ""}
        {isSelected.length > 0 ?
         ( <Ul>
          {region.map((region,index) => (
            <Country
              key={index}
              flag={region.flags.svg}
              name={region.name}
              population={region.population}
              region={region.region}
              capital={region.capital}
            />
          ))}
        </Ul>):  (<>
        {filter.length===0 && <Ul>
          {country.map((country,index) => (
            <Country
              key={index}
              flag={country.flags.svg}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          ))}
        </Ul>}
        {filter.length > 0 && <Ul>
          {searchData.map((country, index) => (
            <Country
              key={index}
              flag={country.flags.svg}
              name={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          ))}
        </Ul>}
        
        </>)

        }
      
      </div>
    );
  }
};

export default Home;
