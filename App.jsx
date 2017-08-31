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
    this.clearChat = this.clearChat.bind(this)
    this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handleChatChange = this.handleChatChange.bind(this)
    this.logout = this.logout.bind(this)
  }
  componentDidMount() {
    //This code connects to Firebase and fetches our list of messages.
    var messages = [];
    var that = this;
    firebase.database()
    .ref('messages')
    .orderByKey()
    .limitToLast(30)
    .on('value', function(snapshot) {
      //This callback is fired everytime a new message is put in
      messages = Object.values(snapshot.val() || [])

      //This code handles the logic for our "login"
      const user = localStorage.getItem('chatter-user')
      if (user) {
        that.setState({username: user, chats: messages})
      } else {
        //Show modal
        that.setState({showModal: true, chats: messages});
      }
    })
  }
  clearChat() {
    this.setState({chatInput: ''})
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

          <ChatList chats={this.state.chats} />
          <ChatInput chatInput={this.state.chatInput} clearChat={this.clearChat} handleChange={this.handleChatChange} username={this.state.username} />
        </Container>
        <UserModal showModal={this.state.showModal} usernameInput={this.state.usernameInput} handleChange={this.handleUsernameChange} closeModal={this.closeModal} />
      </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))