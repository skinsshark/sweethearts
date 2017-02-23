import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <input x="0" y="35" type="text" maxLength="18" placeholder="Type Here"/>
    );
  }
}

export default Message;
