import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";


const Tickets = () => {
  return (
    <>
    <div className="background">
      <h1 style={{'font-size': '3em' ,  
      'font-weight': 'bold',
      'color': 'beige',
      'text-align': 'center',
      'margin': '20px 0',
  'text-transform': 'uppercase',
  'letter-spacing': '3px',
  // 'background': 'linear-gradient(to right, #006699, #00ccff)',
  '-webkit-background-clip': 'text',
  'fontFamily':'fantasy'
}}>Welcome to Your Ultimate Matchday Experience</h1>
      <br />
      <Container>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Virage</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Ultras Groups
                </Card.Subtitle>
                <Card.Text>
                  Exclusive entry for the Ultras! This ticket represents your
                  passion, loyalty, and unbreakable spirit.
                </Card.Text>
                <Button variant="primary">Payment Your Ticket</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Pelouse</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Lawnside
                </Card.Subtitle>
                <Card.Text>
                  Relax and enjoy the match from the lush stadium lawn! This
                  ticket offers an up-close and vibrant view of the action.
                </Card.Text>
                <Button variant="primary">Payment Your Ticket</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Enceinte Supérieure</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Skyview
                </Card.Subtitle>
                <Card.Text>
                  Experience the game from the best vantage point in the
                  stadium! This ticket grants you access to the upper enclosure
                </Card.Text>
                <Button variant="primary">Payment Your Ticket</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Enceinte inférieure</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Frontline
                </Card.Subtitle>
                <Card.Text>
                  Be at the heart of the action with a ticket to the lower
                  enclosure! Enjoy an up-close and dynamic view, where every
                  moment feels electric and unforgettable.
                </Card.Text>
                <Button variant="primary">Payment Your Ticket</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem"}}>
              <Card.Body>
                <Card.Title>Tribune</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Gallery
                </Card.Subtitle>
                <Card.Text>
                  Enjoy the game from the forum seats! This ticket provides a
                  spacious and relaxed setting.
                </Card.Text>
                <Button variant="primary">Payment Your Ticket</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>Loge</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Suite</Card.Subtitle>
                <Card.Text>
                  Indulge in premium comfort with a lodge ticket! Enjoy an
                  exclusive, luxurious experience while staying immersed in the
                  excitement of the match.
                </Card.Text>
                <Button variant="primary">Payment Your Ticket</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
};

export default Tickets;