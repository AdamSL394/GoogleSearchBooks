import React, { Component } from 'react';
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Card from "../components/Card"
import Container from "../components/Container"
import API from '../utils/API';


class Saved extends Component {
  constructor(props){
    super(props);
    this.state ={
      items:[]
    }
  }


  componentDidMount = () =>{
      API.getBooks(res => res.json()
      ).then((result)=>{
        console.log("this is the result on the saved page",result)
        this.setState({
          items:result.data
        })
      })
  }

  deleteBook = (id) => {
    console.log("this is the id where we are deleting",id)
    API.deleteBook(id)
    .then(result =>{
      console.log("this is the result after the api remove call client side",result)
      this.setState({
        items:result.data
      })
    })
   
  }

  


  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Container>
        {this.state.items.map((book, i) => (
            <Card
              key={book.id}
              title={book.title}
              image={book.image}
              author={book.authors}
              synopsis={book.synopsis}
              id={book.id}
              link={book.link}
              deleteBook={this.deleteBook}
              index={i}
            />
            ))}
        </Container>
      </div>
    );
  }
}

export default Saved;
