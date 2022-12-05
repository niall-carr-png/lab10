import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Content } from './components/content';
import { Header } from './components/header';
import { Footer } from './components/footer';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom"
import {Read} from './components/read';
import {Create} from './components/create';
import {Edit} from './components/edit';
import {Functional} from './components/functional';

class App extends React.Component {
  render(){
  return (
    <Router>
      <div>

      {/*Combining the different components together*/}
    <div className="App">
       {/* Navigation retrieved from Bootstrap */}
    {/* Navigation retrieved from Bootstrap */}
      <Navbar bg="light">
        <Container>
          <Navbar.Brand href="/">Brand link</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Content></Content>} exact></Route>
        <Route path='/read' element={<Read></Read>}></Route>
        <Route path='/create' element={<Create></Create>}></Route>
        <Route path='/edit/:id' element={<Edit></Edit>}></Route>
        <Route path ='/fun' element={<Functional></Functional>}></Route>
      </Routes>
        {/* <Header></Header>
        <Content></Content>
        <Footer></Footer> */}
    </div>
      </div>
    </Router>
  );
}
}

export default App;
