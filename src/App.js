import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import CountryId from "./Pages/Country/CountryId";
import Header from "./Components/Header/Header";

// import { Provider } from "react-redux";
// import { createStore } from 'redux';
// import { useSelector } from 'react-redux';


const App = () => {


 

    const [theme, setTheme] = useState(false)
    
    const handleTheme =() => {
      console.log(theme)
      setTheme(!theme)
    }
    return (
      <div className={theme ? "App darkTheme" : "App lightTheme"}>
        <Header handleTheme={handleTheme} theme={theme}/>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/:name" element={<CountryId />} />
            {/* <Route path="/country" element={<Country/>}></Route> */}
            {/* <Route path="/country:id" element={<CountryId/>}></Route> */}
          </Routes>
        </Router>
      </div>
    );
  }





export default App;
