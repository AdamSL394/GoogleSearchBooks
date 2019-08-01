import React from "react"
import "./card.css"

function Card(props) {
    return (
        <div className="card" >
            <h5 className="card-title">{props.title}</h5>
            <h4>Written by:{props.author}</h4>
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{props.synopsis}</p>
                <a href={props.link}>View</a>
                {
                    window.location.href.includes("Search") ? <button style={{marginLeft:10}} onClick={()=> props.saveBook(props.id) }>Save</button> :  <button onClick={()=> props.deleteBook(props.id) }>Delete</button>
                }
            </div>
        </div>
    )
}


export default Card;