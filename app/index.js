import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Colours from './components/Colours';
import Message from './components/Message';
import Button from './components/Button';

class App extends React.Component {
  constructor( props ) {
    super(props);
    this.state = {
      value: 'u don\'t suck'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <Grid className="page-wrapper">
        <Row>
          <Col md={12}>
            <input x="0" y="35" type="text"
              maxLength="18"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <Colours value={this.state.value} />
          </Col>
          <div className="extra-actions">
            <Button fn="Save" />
            <Button fn="Print" />
          </div>
        </Row>
      </Grid>
    );
  }
}

render(
  <App />,
  document.getElementById('app')
);
