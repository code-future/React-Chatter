import React from 'react';
import { Modal, Input, Button, Header } from 'semantic-ui-react';

export default class UserModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal open={this.props.showModal}>
        <Modal.Header>Greetings</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Welcome to React Chatter!</Header>
            <p>What's your name?</p>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Input placeholder='My name' value={this.props.usernameInput} onChange={this.props.handleChange}/>
          <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.props.closeModal} />
        </Modal.Actions>
      </Modal>
      )
  }
}