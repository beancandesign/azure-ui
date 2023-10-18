import { Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

export const WeAreWorkingOnThis = () => {
  return (
    <Container className="p-5">
      <Row className="justify-content-md-center">
        <Card style={{width: "18rem"}}>
          <Card.Header>We are working on this...</Card.Header>
          <Card.Body>
            <Row className="justify-content-md-center">
              <Spinner animation="border"/>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}