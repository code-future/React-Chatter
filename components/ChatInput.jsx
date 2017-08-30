import React from 'react';
import { Input } from 'semantic-ui-react';

export default class ChatInput extends React.Component {
  render() {
    return (
      <Input action='Send' placeholder='Enter a chat' />
      )
  }
}