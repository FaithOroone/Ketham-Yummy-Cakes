import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button, FormText
} from 'reactstrap';


class Login extends Component {
  constructor(){
    super();
    this.state = {color:'blue'}
  }

  changeColour = () =>{
    this.setState({color:'red'})
  }

  render() {
    return (
      <Container className="App">
        <h2>Sign In</h2>
        <Form className="form">
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
              <FormText>Use email used to Signup</FormText>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          <Button type= 'button'>Submit</Button>
        </Form>
        <h4>Don't have an account?<Link to = '/Signup'>SignUp</Link></h4>
        <Link>Forgot Password</Link>
      </Container>
    );
  }
}

        

export default Login