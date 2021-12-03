import '../styles/content.css';
import { Button, Row, Col,  Container } from 'react-bootstrap';


const Texts = () => {
    return (
        <div className='content-main'>
            <div className='content-all-text'>
            <Container>
                <Row>
                    <Col className='content-header'>
                        <h1>About Us</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className='content-text'>
                        <p>
                        Contrary to popular belief, 
                        Lorem Ipsum is not simply random text. It has 
                        roots in a piece of classical Latin literature from 45 BC, 
                        making it over 2000 years old. Richard McClintock,
                         a Latin professor at Hampden-Sydney College in Virginia, 
                         looked up one of the more obscure Latin words, consectetur
                         , from a Lorem Ipsum passage, and going through the cites
                          of the word in classical literature, discovered the undoub
                          table source. Lorem Ipsum comes from sections 1.10.32 and 
                          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes o
                          f Good and Evil) by Cicero, written in 45 BC. This book is
                           a treatise on the theory of ethics, very popular during t
                           he Renaissance. The first line of Lorem Ipsum, "Lorem ips
                           sum dolor sit amet..", 
                        comes from a line in section 1.10.32. 
                        </p>
                        <Button className='content-button' variant="card1">Go Check</Button>
                    </Col>
                </Row>
            </Container>
            </div>
        </div>
    )
}



const Content = () => {
    return (
        <div className='content-all' id="about-us">
            <Texts/>
            
        </div>
    )
}

export default Content;