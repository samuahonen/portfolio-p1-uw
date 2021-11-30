import '../styles/header.css';
import { Button, Nav, Container, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div className='header-nav' id="#header">
    <Navbar expand="sm" variant="primary" fixed="left">
  <Container variant="primary">
    <Navbar.Brand style={{fontSize:"1.7rem"}} href="#home">Examlpe Website</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link  className='header-nav-links' href="#home">Home</Nav.Link>
        <Nav.Link className='header-nav-links' href="#link">Link</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

const Text = () => {
    return (
        <div className="header-main-text">
            <h1 className='header-main-h1'>Header</h1>
            <div className='header-main-p'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
             when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </div>
        </div>
    )
}

const Boxes = () => {
    return (
        <div>

        </div>
    )
}

const Header = () => {
    return (
        <div className='header-main'>
            <NavBar/>
            <Text/>
        </div>
    )
}

export default Header;