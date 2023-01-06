import logo from './logo.svg';
import './Prog.css';
import React from 'react';
import { Info } from './components/info';
import { Heading } from './components/heading';
import { Footnote } from './components/footnote';
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
import {View} from './components/view';
import {Add} from './components/add';
import {Modify} from './components/modify';
import {Utility} from './components/utility';

class Prog extends React.Component {
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
          <Navbar.Brand href="/"><img src="https://i.imgur.com/qkR7Kw9.png" alt="Logo" width="100"/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Homepage</Nav.Link>
            <Nav.Link href="/profiles">Profiles</Nav.Link>
            <Nav.Link href="/add">Add</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/' element={<Info></Info>} exact></Route>
        <Route path='/profiles' element={<View></View>}></Route>
        <Route path='/add' element={<Add></Add>}></Route>
        <Route path='/modify/:id' element={<Modify></Modify>}></Route>
        <Route path ='/utility' element={<Utility></Utility>}></Route>
      </Routes>
      {/* <Heading></Heading>
        <Info></Info>
        <Footnote></Footnote> */}
    </div>
      </div>
    </Router>
  );
}
}

export default Prog;
