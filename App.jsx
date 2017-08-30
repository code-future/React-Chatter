import React from 'react';
import ReactDOM from 'react-dom';

import 'semantic-ui-css/semantic.min.css';
import './stylesheets/main.scss';
import { Container, Header } from 'semantic-ui-react'

import ChatList from './components/ChatList.jsx';
import ChatInput from './components/ChatInput.jsx';

class App extends React.Component {
  render() {
    return (
      <div id="app-container">
        <Container>
          <Header as='h1'>
            React Chatter
          </Header>
          <ChatList />
          <ChatInput />
        </Container>

      </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))