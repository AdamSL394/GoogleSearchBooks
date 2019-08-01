import React from "react"
import Container from "../Container";
import "./hero.css"




function Hero(props) {
    return (

        <Container>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 title" >(React) Google Books {props.navName}</h1>
                    <p className="lead title "> Search for a saved book of Interest</p>
                </div>

            </div>
        </Container>
    )
}


export default Hero;