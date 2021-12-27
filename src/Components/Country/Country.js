import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

    const AppContainer = styled.li`
        
        width:21%;
        padding: 40px 0px 0px 25px;
        @media (max-width: 768px) {
            width:26%;
          }
        @media (max-width: 768px) {
            width:40%;
          }
        @media (max-width: 512px) {
            width:50%;
          }
        @media (max-width: 425px) {
            width:70%;
            padding:40px 0px 0px 0px;
          }

    `
    const Div = styled.div`
        
       padding-left:30px

    `
    const AppHeader = styled.h1`
        font-weight:bold;
        font-size:20px;
    `
    const AppCategory = styled.span`
        font-weight:bold;
        font-size:14px;
    `
    const Img = styled.img`
        height:200px;
        width:100%;
        // height:100%;
    `
    const Para = styled.p`
        padding-top:5px;
        margin:0

    `
    // const a = styled.a`
    //     text-decoration:none;
    // `

const Country = (props) => {

    

    return (
        <>
        
        <AppContainer>
            <Img src={props.flag} alt=""/>
            <Div >
                <Link to={`/${props.name}`}>
                    <a href={`/${props.name}`}>
                    <AppHeader>{props.name}</AppHeader>
                    </a>
                </Link>
                <div>
                   <Para> <AppCategory> Population </AppCategory>: {props.population.toLocaleString().replace(/,/g, ".")}</Para> 
                   <Para> <AppCategory> Region </AppCategory>: {props.region}</Para> 
                   <Para> <AppCategory> Capital </AppCategory>: {props.capital}</Para> 
                </div>
            </Div>
        </AppContainer>
        </>
    )
}

export default Country;