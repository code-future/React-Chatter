import React from 'react';
import { Input } from 'semantic-ui-react';

export default class ChatInput extends React.Component {
  constructor(props) {
    //See: https://stackoverflow.com/a/39824330/8533791
    super(props);
    this.sendChat = this.sendChat.bind(this)
  }
  sendChat() {
    //Fill this out
  }
  render() {
    return (
      <Input fluid action={{ color: 'blue', content: 'Send', 'onClick': this.sendChat}} placeholder='Enter a chat' />
      )
  }
}
