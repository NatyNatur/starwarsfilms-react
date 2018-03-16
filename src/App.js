import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import StaticPage from './components/Static';
import SearchedItems from './components/SearchedItems';
import './App.css';
import AnewHope from './components/SearchedItems/MovieData/AnewHope';
import TheEmpireStrikesBack from './components/SearchedItems/MovieData/TheEmpireStrikesBack';
import ReturnoftheJedi from './components/SearchedItems/MovieData/ReturnoftheJedi';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Container>
        <Row>
          <Col xs="12" sm="4">
          <StaticPage> </StaticPage>
          </Col>
          <Col xs="12" sm="8">
						<SearchedItems></SearchedItems>
						<AnewHope />
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default App;
