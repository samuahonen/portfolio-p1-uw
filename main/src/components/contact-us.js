import {Alert, Form, Button, Row,  Container, } from 'react-bootstrap';
import '../styles/contact-us.css';
import React, { useState } from 'react';
import validator from 'validator'

const Alerts = (props) => {
    if(props.info){
    return (
        <div>
            <Alert variant={props.color}>
                {props.text}
            </Alert>
        </div>
    )
    }
    return(
        <></>
    )
}

const Forms = () => {

    const [email,setEmail] = useState("")
    const [text,setText] = useState("")

    const [info,setInfo] = useState([false,"",""])

    const sendEmail = (e) => {
        console.log(info[1])
        if(validator.isEmail(email) && text.length>5){
            setEmail("")
            setText("")
            setInfo([true,"alert2","Message sent!"])
        }
        else{
            setInfo([true,"alert1","Email is invalid or message is too short!"])
        }
        console.log(info[1])
    }

    return (
        <div className='contact-all'>
            <div className='contact-main'>
            <Container>
                <Row>
                    <h1 className='contact-header'>
                        Contact Us
                    </h1>
                </Row>
                <Row>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" value={email} placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label >Example textarea</Form.Label>
                            <Form.Control value={text} onChange={(e)=>setText(e.target.value)} placeholder='Your message' as="textarea" rows={10} />
                            <div className='contact-btn-div'>
                            <Button onClick={sendEmail} className='contact-button' variant="card3">Send</Button>
                            </div>
                        </Form.Group>
                    </Form>
                    
                </Row>
                <Row>
                    <Alerts info={info[0]} color={info[1]} text={info[2]}/>
                </Row>
            </Container>
            </div>
        </div>
    )
}

const Contact = () => {
    return (
        <div  id="contact-us">
            <Forms/>
        </div>
    )
}

export default Contact;