import React from 'react';
import { Input } from 'semantic-ui-react';
import * as firebase from 'firebase';

export default class ChatInput extends React.Component {
  constructor(props) {
    //See: https://stackoverflow.com/a/39824330/8533791
    super(props);
    this.sendChat = this.sendChat.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  sendChat() {
    //Fill this out
    var message = {
      text: this.props.chatInput,
      time: Date.now(),
      username: this.props.username
    };
    const newMsgRef = firebase.database()
                              .ref('messages')
                              .push();
    message.id = newMsgRef.key;
    newMsgRef.set(message);
    this.props.clearChat();
  }
  handleKeyPress(e) {
    //Lets us use Enter for sending messages!
    if (e.key === 'Enter') {
      this.sendChat();
    }
  }
  handleKeyPress(e) {
    //Lets us use Enter for sending messages!
    if (e.key === 'Enter') {
      this.sendChat();
    }
  }
  render() {
    return (
      <Input value={this.props.chatInput} onChange={this.props.handleChange} onKeyPress={this.handleKeyPress} fluid action={{ color: 'blue', content: 'Send', 'onClick': this.sendChat}} placeholder='Enter a chat' />
      )
  }
}
