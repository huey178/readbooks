import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default class createBook extends Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      title: '',
      author: '',
      pages: 0,
      date: new Date(),
      users: []
    }

  }

  componentDidMount() {
  axios.get('http://localhost:5000/users/')
    .then(response => {
    if(response.data.length > 0){
      this.setState({
        users: response.data.map(user => user.username),
        username: response.data[0].username
      })
    }
  })
  }

  onChangeUsername =(e)=>  {
    this.setState({
      username: e.target.value
    });
  }

  onChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  onChangeAuthor = (e) => {
    this.setState({ author: e.target.value});
  }

  onChangePages = (e)  =>{
    this.setState({
      pages: e.target.value
    });
  }
  onChangeDate = (date) => {
    this.setState({
      date: date
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const book = {
      username: this.state.username,
      title: this.state.title,
      author: this.state.author,
      pages: this.state.pages,
      date: this.state.date
    }

    axios.post('http://localhost:5000/books/add', book).then(res => console.log(res.data));
window.location = '/';
  }

  render(){
    return(
      <div>
      <h3>Create Book Log</h3>
      <form onSubmit ={this.onSubmit}>
        <div className = 'form-group'>
          <label>Username: </label>
          <select ref='userInput'
            required
            className ='form-control'
            value = {this.state.username}
            onChange = {this.onChangeUsername}>
              {
                this.state.users.map(user => <option key ={user}
                value= {user}>
              {user}
            </option>
              )}

          </select>
        </div>
      <div className = 'form-group'>
        <label>Title: </label>
        <input type ="text"
          required
          className = 'form-control'
          value = {this.state.title}
          onChange = {this.onChangeTitle}
          />
      </div>

      <div className = 'form-group'>
        <label>Author: </label>
        <input type ="text"
          required
          className = 'form-control'
          value = {this.state.author}
          onChange = {this.onChangeAuthor}
          />
      </div>

      <div className = 'form-group'>
        <label>Pages: </label>
        <input
            type= 'text'
            required
            className = 'form-control'
            value = {this.state.pages}
            onChange = {this.onChangePages}
          />
      </div>

      <div className = 'form-group'>
        <label>Date: </label>
        <div>
          <DatePicker
            selected={this.state.date}
            onChange = {this.onChangeDate}
            />
        </div>

      </div>

      <div className = 'form-group'>
        <input
            type ='submit'
            value = 'Create Book Log'
            className = 'btn btn-primary'
          />
      </div>
    </form>
    </div>

    );
  }
}
