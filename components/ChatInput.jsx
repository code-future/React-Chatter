import React from 'react';
import { Input } from 'semantic-ui-react';

export default class ChatInput extends React.Component {
  constructor(props) {
    //See: https://stackoverflow.com/a/39824330/8533791
    super(props);
    this.sendChat = this.sendChat.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  sendChat() {
    //Fill this out
  }
  handleKeyPress(e) {
    //Lets us use Enter for sending messages!
    if (e.key === 'Enter') {
      this.sendChat()
    }
  }
  render() {
    return (
      <Input onKeyPress={this.handleKeyPress} fluid action={{ color: 'blue', content: 'Send', 'onClick': this.sendChat}} placeholder='Enter a chat' />
      )
  }
}
