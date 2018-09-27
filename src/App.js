import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppContainer from './components/AppContainer'
import './App.css';
import { Container } from 'reactstrap';


class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Container className='my-4'>
                    <Route exact path='/' component={AppContainer} />
                </Container>
            </div>
        </Router>
    );
  }
}

export default App;
