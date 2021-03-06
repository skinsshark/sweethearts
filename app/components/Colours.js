import React from 'react';
import Heart from './Heart';

class Colours extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colour: 'grey'
    };
  }

  handleClick(colour) {
    this.setState({
      colour: colour
    });
  }

  render() {
    const value = this.props.value;
    return (
      <div>
        <Heart colour={this.state.colour} value={value} />
        <div className="picker">
          <div className="blue" onClick={() => { this.handleClick("blue") }}></div>
          <div className="pink" onClick={() => { this.handleClick("pink") }}></div>
          <div className="orange" onClick={() => { this.handleClick("orange") }}></div>
          <div className="purple" onClick={() => { this.handleClick("purple") }}></div>
          <div className="yellow" onClick={() => { this.handleClick("yellow") }}></div>
          <div className="green" onClick={() => { this.handleClick("green") }}></div>
        </div>
      </div>
    );
  }
}

export default Colours;
