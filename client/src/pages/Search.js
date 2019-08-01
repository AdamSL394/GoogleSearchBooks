import React, { Component } from 'react';
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Card from "../components/Card"
import Container from "../components/Container"
// import SearchInput from "../components/SearchInput"
// import CardBtn from "../components/CardBtn"
import API from "../utils/API";

class Search extends Component {
  constructor() {
    super()
    this.state = {
      books: [],
      googleBooks: [],
      title: "",
      author: "",
      synopsis: ""

    };
  }

  saveBook = (id) => {
    // filter the books array without the saved book id passed in
    const newBookArray = this.state.googleBooks.filter((book) => book.id ===id)
    console.log(newBookArray)
    const newBooksArray = this.state.googleBooks.filter((book) => book.id !== id)
    const book = {
      title:newBookArray[0].volumeInfo.title,
      image:newBookArray[0].volumeInfo.imageLinks.thumbnail,
      authors:newBookArray[0].volumeInfo.authors,
      synopsis:newBookArray[0].volumeInfo.description,
      id:newBookArray[0].id,
      link:newBookArray[0].volumeInfo.infoLink
    }
    API.saveBook(book)
    .then(response => {
      console.log(response);
      this.setState({
        googleBooks:newBooksArray
      })
    })
  }

  handleInputChange = event => {
    console.log(event.target.name)
    console.log(event.target.title)
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  _handleFormSubmit = event => {
    event.preventDefault();
    // console.log("above", event)
    if (this.state.title) {
      // console.log("below", this.state.title)
      API.getGoogleBooks(this.state.title)
        .then(res => {
          console.log("this is the google books result", res.data.items)
          this.setState({ googleBooks: res.data.items })
          // console.log("State Google Books", this.state.googleBooks)
          // var saveBook = this.saveBook.bind(this)
        });
    }
  };

  render() {
    return (
      <div>

        <Navbar />
        <Hero />
        <Container>
          <h3>Book Search</h3>
          <p>{this.state.title}</p>
          <form className="form">
            <input
              value={this.state.title}
              name="title"
              onChange={this.handleInputChange}
              type="text"
              placeholder="First Name"
            />
            <button style={{marginLeft:10}} onClick={this._handleFormSubmit}>Submit</button>
          </form>
        </Container>
        <Container>
          {this.state.googleBooks.map((book, i) => (
            <Card
              key={book.id}
              title={book.volumeInfo.title}
              image={book.volumeInfo.imageLinks.thumbnail}
              author={book.volumeInfo.authors}
              synopsis={book.volumeInfo.description}
              id={book.id}
              link={book.volumeInfo.infoLink}
              index={i}
              saveBook={this.saveBook}
            />

          ))}

        </Container>

      </div>
    );
  }
}

export default Search;
