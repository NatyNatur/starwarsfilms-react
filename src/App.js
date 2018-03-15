import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import StaticPage from './components/Static';
import SearchedItems from './components/SearchedItems';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Container>
        <Row>
          <Col xs="4">
          <StaticPage> </StaticPage>
          </Col>
          <Col xs="8">
          <SearchedItems> </SearchedItems>
          </Col>
        </Row>
        </Container>
      </div>
    );
  }
}

export default App;
