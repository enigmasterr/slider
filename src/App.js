import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
        <div class="wrapper">
            <SayHelloName name="Vadim" aka="Enigmaster" />         
        </div>    
    );
  }
}

function SayHelloName(props) {
  return (
        <div>
          <h1>Hello World!</h1>
          <h2>Мое имя {props.name}, Ник - {props.aka}</h2>
        </div>
    )
}
export default App;
