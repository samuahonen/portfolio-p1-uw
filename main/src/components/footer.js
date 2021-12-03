import '../styles/footer.css';
import { FormControl, InputGroup, Button, Row, Col, Container } from 'react-bootstrap';
import { AiOutlineInstagram,AiOutlineFacebook,AiOutlineYoutube } from 'react-icons/ai';
const Content = () => {
    return (
        <div className='footer-all'>
            <Container>
                <Row md={2}>
                    <div className='footer-form'>
                        <h2>Get Our News Letter</h2>
                        <InputGroup className="mb-3">
                        <FormControl
                        placeholder="Your email"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        />
                        <Button variant="card2" id="button-addon2">
                        Subscribe
                        </Button>
                    </InputGroup>
                    </div>
                </Row>
                <div className='footer-content'>
                <Row>
                    <Col>
                        <h2>Example Website</h2>
                        <p>
                        Cecilia Chapman
                        <br/>
                        711-2880 Nulla St.
                        <br/>
                        Mankato Mississippi 96522
                        <br/>
                        (257) 563-7401
                        </p>
                        <p>
                            Example@gmail.com
                        </p>
                    </Col>
                    <Col>
                        <h2>About Us</h2>
                        <p>
                            It is a long established fact that  
                            It is a long established fact that a
                             reader will be distracted by the rea
                             dable content of a page when looking

                        </p>
                        <div className='footer-media'>
                        <AiOutlineFacebook className='footer-icon' size="25px"/>
                        <AiOutlineInstagram className='footer-icon' size="25px"/>
                        <AiOutlineYoutube className='footer-icon' size="25px"/>
                        </div>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <Content/>
        </div>
    )
}

export default Footer;