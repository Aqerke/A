import React, { Component } from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import img1 from "../assets/1img.jpg";
import img2 from "../assets/2img.jpg";
import img3 from "../assets/3img.jpg";
import img4 from "../assets/4img.jpg";
import img5 from "../assets/5img.jpg";
import img6 from "../assets/6img.jpg";
import img7 from "../assets/7img.jpg";
import img8 from "../assets/8img.jpg";
import img9 from "../assets/9img.jpg";
import img10 from "../assets/10img.jpg";
import img11 from "../assets/11img.jpg";
import img12 from "../assets/12img.jpg";
import img13 from "../assets/13img.jpg";
import img14 from "../assets/14img.jpg";
import img15 from "../assets/15img.jpg";
import img16 from "../assets/16img.jpg";

export default class Products extends Component {
  render() {
    return (
      <Container>
        <h2 className="text-center m-4">Our products</h2>
        <Row className="m-4" md={4}>
          <Card border="success">
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>5990 ₸</Card.Title>
              <Card.Text>Eazyway</Card.Text>
              <Button variant="primary">About item</Button>
            </Card.Body>
          </Card>
          <Card border="warning">
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>9990 ₸</Card.Title>
              <Card.Text>Sport suit</Card.Text>
              <Button variant="primary">About item</Button>
            </Card.Body>
          </Card>
          <Card border="primary">
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>4000 ₸</Card.Title>
              <Card.Text>Shorts</Card.Text>
              <Button variant="primary">About item</Button>
            </Card.Body>
          </Card>
          <Card border="success">
            <Card.Img variant="top" src={img4} />
            <Card.Body>
              <Card.Title>2890 ₸</Card.Title>
              <Card.Text>Shorts</Card.Text>
              <Button variant="primary">About item</Button>
            </Card.Body>
          </Card>
          <Card border="warning">
            <Card.Img variant="top" src={img5} />
            <Card.Body>
              <Card.Title>1500 ₸</Card.Title>
              <Card.Text>Hat</Card.Text>
              <Button variant="primary">About item</Button>
            </Card.Body>
          </Card>
          <Card border="primary">
            <Card.Img variant="top" src={img6} />
            <Card.Body>
              <Card.Title>5000 ₸</Card.Title>
              <Card.Text>Jeans</Card.Text>
              <Button variant="primary">About item</Button>
            </Card.Body>
          </Card>
          <Card border="warning">
            <Card.Img variant="top" src={img7} />
            <Card.Body>
              <Card.Title>5500 ₸</Card.Title>
              <Card.Text>Dress</Card.Text>
              <Button variant="primary">About item</Button>
            </Card.Body>
          </Card>
          <Card border="primary">
            <Card.Img variant="top" src={img8} />
            <Card.Body>
              <Card.Title>6000 ₸</Card.Title>
              <Card.Text>Jeans</Card.Text>
              <Button variant="primary">About item</Button>
            </Card.Body>
          </Card>
          <Card border="warning">
            <Card.Img variant="top" src={img9} />
            <Card.Body>
              <Card.Title>3500 ₸</Card.Title>
              <Card.Text>Shorts</Card.Text>
              <Button variant="primary">About item</Button>
            </Card.Body>
          </Card>
          <Card border="primary">
            <Card.Img variant="top" src={img10} />
            <Card.Body>
              <Card.Title>4000 ₸</Card.Title>
              <Card.Text>T-Shirt</Card.Text>
              <Button variant="primary">About item</Button>
            </Card.Body>
          </Card>
          <Card border="warning">
            <Card.Img variant="top" src={img11} />
            <Card.Body>
              <Card.Title>6500 ₸</Card.Title>
              <Card.Text>Dress</Card.Text>
              <Button variant="primary">About item</Button>
            </Card.Body>
          </Card>
          <Card border="primary">
            <Card.Img variant="top" src={img12} />
            <Card.Body>
              <Card.Title>4000 ₸</Card.Title>
              <Card.Text>Hat</Card.Text>
              <Button variant="primary">About item</Button>
            </Card.Body>
          </Card>
          <Card border="warning">
            <Card.Img variant="top" src={img13} />
            <Card.Body>
              <Card.Title>7000 ₸</Card.Title>
              <Card.Text>Jeans</Card.Text>
              <Button variant="primary">About item</Button>
            </Card.Body>
          </Card>
          <Card border="primary">
            <Card.Img variant="top" src={img14} />
            <Card.Body>
              <Card.Title>6000 ₸</Card.Title>
              <Card.Text>T-Shirt</Card.Text>
              <Button variant="primary">About item</Button>
            </Card.Body>
          </Card>
          <Card border="warning">
            <Card.Img variant="top" src={img15} />
            <Card.Body>
              <Card.Title>8500 ₸</Card.Title>
              <Card.Text>Overalls</Card.Text>
              <Button variant="primary">About item</Button>
            </Card.Body>
          </Card>
          <Card border="primary">
            <Card.Img variant="top" src={img16} />
            <Card.Body>
              <Card.Title>9000 ₸</Card.Title>
              <Card.Text>Suit</Card.Text>
              <Button variant="primary">About item</Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    );
  }
}
