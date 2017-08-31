import React from 'react';
import { Image, Feed } from 'semantic-ui-react'

export default class ChatList extends React.Component {
  constructor(props) {
    //See: https://stackoverflow.com/a/39824330/8533791
    super(props);
  }
  render() {
    return (
      <div id="chat-list">
        <Feed>
          <Feed.Event
            summary={'Zack'}
            extraText={'Make sure you read the README!'}
          />
          <Feed.Event
            summary={'Zack'}
            extraText={'Good luck'}
          />
        </Feed>
      </div>
    )
  }
}
