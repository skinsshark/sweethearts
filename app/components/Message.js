import React from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const value = this.props.value;
    return (
      <text x="392" y="230" className="msg">{value}</text>
    );
  }
}

export default Message;
