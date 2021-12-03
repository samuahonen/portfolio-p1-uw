import '../styles/header.css';
import { Button, Row, Col, Card, Nav, Container, Navbar } from 'react-bootstrap';
import { AiOutlineHeart,AiOutlineHourglass,AiOutlineHome } from 'react-icons/ai';
import { Children } from 'react';

const content = [
    {
        title:"Why do we use it?",
        subtitle:"True",
        text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from",
        icon:<AiOutlineHeart size="40px"/>,
        color: "card1"
    },
    {
        title:"Where does it come from?",
        subtitle:"True",
        text:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        icon:<AiOutlineHome size="40px"/>,
        color: "card2"
    },
    {
        title:"Where can I get some?",
        subtitle:"True",
        text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by.",
        icon:<AiOutlineHourglass size="40px"/>,
        color: "card3"
    }
]

const NavBar = () => {
    return (
        <div id="#header">
    <Navbar className='main-navbar' variant="dark"  expand="sm">
  <Container>
    <Navbar.Brand  href="#home">Examlpe Website</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link  className='header-nav-links' href="#home">Home</Nav.Link>
        <Nav.Link className='header-nav-links' href="#about-us">About Us</Nav.Link>
        <Nav.Link className='header-nav-links' href="#contact-us">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

const Text = () => {
    return (
        <div className='header-text-box'>
            <div className='header-texts'>
          <Container>
              <Row >
                  <Col>
                  <h1 className='header-header'>Welcome</h1>
                  </Col>
              </Row>
              <Row>
                  <p className='header-text-info'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               </p>
              </Row>
              <Row>

              </Row>
          </Container>
          </div>
        </div>
    )
}

const Infobox = (props) => {
    return (
        <div>
           <Card bg={props.color}  className='header-card'>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle>{props.subtitle}</Card.Subtitle>
                    <Card.Text>
                        {props.text}
                    </Card.Text>
                    {props.children}
                </Card.Body>
            </Card> 
        </div>
    )
}

const Boxes = () => {
    const width = (window.matchMedia("(max-width: 600px)")).matches
    console.log(width)
    if(width){
        return ( 
            <div className='header-boxes'>
            <Container>
                {content.map(c=>(<Row><Infobox color={c.color} title={c.title} subtitle={c.subtitle} text={c.text}>{c.icon}</Infobox></Row>))}
            </Container>
        </div>
        )
    }
    return (
        <div className='header-boxes'>
            <Container>
                <Row>
                {content.map(c=>(<Col><Infobox color={c.color} title={c.title} subtitle={c.subtitle} text={c.text}>{c.icon}</Infobox></Col>))}
                </Row>
            </Container>
        </div>
    )
}

const Header = () => {
    return (
        <div className='header-main'>
            <NavBar/>
            <Text/>
            <Boxes/>
        </div>
    )
}

export default Header;