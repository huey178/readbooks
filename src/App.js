import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import{ BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/navbar.component';
import BookList from './components/book-list.component';
import editBook from './components/edit-book.component';
import createUser from './components/create-user.component';
import createBook from './components/create-book.component';


function App() {
  return (
    <Router>
      <div className = 'container'>
    <Navbar/>
    <br/>
      <Route path ='/' exact component ={BookList}/>
      <Route path ='/edit/:id' component ={editBook}/>
      <Route path ='/create' component={createBook}/>
      <Route path ='/user' component={createUser}/>
    </div>

    </Router>

  );
}

export default App;
