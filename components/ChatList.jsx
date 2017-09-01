import React from 'react';
import { Image, Feed } from 'semantic-ui-react'
export default class ChatList extends React.Component {
  constructor(props) {
    //See: https://stackoverflow.com/a/39824330/8533791
    super(props);
  }
  render() {
    console.log(this.props.chats)
    const chatsList = this.props.chats.map((chat, i) =>
    <Feed.Event key = {i}
      summary={chat.username}
      extraText={chat.text}
    />
    );
    return (
      <div id="chat-list">
        <Feed>
          {chatsList}
        </Feed>
      </div>
    );
  }
}
