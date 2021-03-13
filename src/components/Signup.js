import React, {Component} from 'react'
import {Link} from 'react-router-dom'

import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button, FormText
  } from 'reactstrap';

class Signup extends Component {
    constructor(props){
        super(props)
        this.message = this.message.bind(this)
    }
    message(){
        alert('Account created successfully!')
    }
    render() {
        return (
            <Container className="App">
                <h2>Sign Up</h2>
                <Form className= 'form' onSubmit={this.message}>
                    <Col>
                    <FormGroup>
                        <Label>First Name</Label>
                        <Input
                            type="text"
                            name="text"
                            id="exampleText"
                            placeholder="Keren"/>
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label>Second Name</Label>
                        <Input
                            type="text"
                            name="text"
                            id="exampleText"
                            placeholder="Opolot"/>
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label>Telephon Number</Label>
                        <Input
                            type="text"
                            name="text"
                            id="exampleText"
                            placeholder="0755490732"/>
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="myemail@gmail.com"/>
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="********"/>
                            <FormText>Password should have more than 8 characters containing uppercase, Lowercase, Numbers and atleast one Symbols</FormText>
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label>Comfirm Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="*********"/>
                            <FormText>Should match with the upper Password</FormText>
                    </FormGroup>
                    </Col>
                   <Link to = '/Login.js'><Button onClick={this.message}>Submit</Button></Link> 
                </Form>
            </Container>
        )
    }
}
export default Signup