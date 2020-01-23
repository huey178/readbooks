import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Book = props => (
  <tr>
    <td>{props.book.username}</td>
    <td>{props.book.title}</td>
    <td>{props.book.author}</td>
    <td>{props.book.pages}</td>
    <td>{props.book.date.substring(0,10)}</td>
    <td>
      <Link to= {'/edit/' + props.book._id}>Edit</Link> | <button onClick={() => {props.deleteBook(props.book._id)}}>Delete</button>
    </td>
  </tr>
)


export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {books: []}
  }

  componentDidMount(){
    axios.get('http://localhost:5000/books/')
      .then(response => {
          this.setState({
           books: response.data})
         }).catch(error => {
           console.log(error);
      })
    }

    deleteBook = (id) => {
      axios.delete('http://localhost:5000/books/'+id)
      .then(res => console.log(res.data));

      this.setState({
        books: this.state.books.filter(el => el._id !== id)
      })
    }

    bookList = () => {
      return this.state.books.map(currentbook => {
        return <Book book = {currentbook}  deleteBook ={this.deleteBook} key = {currentbook._id}/>
      })
    }



  render(){
    return(
      <div>
      <h3>Welcome to the BookList</h3>
      <table className = 'table'>
        <thead className = 'thead-light'>
        <tr>
          <th>Username</th>
          <th>Title</th>
          <th>Author</th>
          <th>Pages</th>
          <th>Date</th>
        </tr>
</thead>
    <tbody>
      {this.bookList()}
    </tbody>




      </table>
      </div>
    );
  }
}
