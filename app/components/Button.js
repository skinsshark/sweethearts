import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const name = this.props.fn;
    return (
      <button className="btn fnc-button">{ name }</button>
    );
  }
}

export default Button;
