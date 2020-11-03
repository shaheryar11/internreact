import React, { Component } from 'react';
import {Container,Row,Col,Jumbotron} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
class Bootstrap extends Component {
    render(){
        return(
            <div>
                <Container>
                    <Row>
                    <Jumbotron>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>

                    </Row>

                </Container>
            </div>
        )
    }
}
export default Bootstrap