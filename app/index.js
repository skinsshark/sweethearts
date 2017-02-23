import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import Colours from './components/Colours';
import Message from './components/Message';
import Button from './components/Button';

class App extends React.Component {
  constructor( props ) {
    super(props);
  }

  render() {
    return (
      <Grid className="page-wrapper">
        <Row>
          <Col md={12}>
            <Colours />
            <Message />
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
