import React from 'react';
import { SubscribeRow, SubscribeInput, SubmitButton, validateEmail } from './helpers/contact';

class SubscribeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      validated: false
    };
  }

  updateState(email) {
    if (validateEmail(email).emailValid) {
      this.setState({ email, validated: true });
    } else {
      this.setState({ email });
    }
  }

  render() {
    return (
      <SubscribeRow>
        <SubscribeInput
          type="text"
          placeholder="subscribe"
          onChange={(event) => { this.updateState(event.target.value); }}
          validated={this.state.validated}
          autocomplete="off"
        />
        {(this.state.validated) ?
          <SubmitButton
            name="paper-plane"
            style={{ fontSize: 16, color: 'black', marginLeft: 10, marginRight: 10 }}
          />
          : null }
      </SubscribeRow>
    );
  }
}

export default SubscribeContainer;
