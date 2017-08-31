import React from 'react';
import { Image, Feed } from 'semantic-ui-react'

export default class ChatList extends React.Component {
  constructor(props) {
    //See: https://stackoverflow.com/a/39824330/8533791
    super(props);
  }
  render() {
    var feed = this.props.chats.map(function(x, i) {
      return (
        <Feed.Event key={i}
          summary={x.username}
          extraText={x.text}
        />
      )
    })
    return (
      <div id="chat-list">
        <Feed>
         {feed}
        </Feed>
      </div>
    )
  }
}
