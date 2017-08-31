import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';

// DON'T TOUCH OR YOUR APP WONT WORK!!
const config = {
  apiKey: "AIzaSyBq1tDlekRh3VOmGB33bOLYetSEGatzOLI",
  authDomain: "react-chatter-eb1d8.firebaseapp.com",
  databaseURL: "https://react-chatter-eb1d8.firebaseio.com",
  projectId: "react-chatter-eb1d8",
  storageBucket: "react-chatter-eb1d8.appspot.com",
  messagingSenderId: "288841009491"
};
firebase.initializeApp(config);

import 'semantic-ui-css/semantic.min.css';
import './stylesheets/main.scss';
import { Container, Header, Button, Image, Input } from 'semantic-ui-react';

import ChatList from './components/ChatList.jsx';
import ChatInput from './components/ChatInput.jsx';
import UserModal from './components/UserModal.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      usernameInput: '',
      chatInput: '',
      chats: [],
      username: '',
      showModal: false
    }
    this.closeModal = this.closeModal.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handleChatChange = this.handleChatChange.bind(this)
    this.logout = this.logout.bind(this)
  }
  componentDidMount() {
    const user = localStorage.getItem('chatter-user')
    if (user) {
      this.setState({username: user})
    } else {
      //Show modal
      this.setState({showModal: true});
    }
  }
  closeModal() {
    //Set username input to localhost so our browser will remember the user
    localStorage.setItem('chatter-user', this.state.usernameInput)
    this.setState({
      showModal: false,
      username: this.state.usernameInput,
      usernameInput: ''
    })
  }
  handleUsernameChange(e) {
    this.setState({usernameInput: e.target.value})
  }
  handleChatChange(e) {
    this.setState({chatInput: e.target.value})
  }
  logout() {
    localStorage.removeItem('chatter-user')
    this.setState({
      showModal: true,
      username: ''
    })
  }
  render() {
    return (
      <div id="app-container">
        <Container>
          <Header as='h1' floated='left'>
            React Chatter. { this.state.username.length > 0 ? 'Welcome ' + this.state.username + '!' : ''}
          </Header>
          <Header as='h1' floated='right'>
            <Button onClick={this.logout} inverted color='red'>Logout</Button>
          </Header>

          <ChatList />
          <ChatInput />
        </Container>
        <UserModal showModal={this.state.showModal} usernameInput={this.state.usernameInput} handleChange={this.handleUsernameChange} closeModal={this.closeModal} />
      </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))