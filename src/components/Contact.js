import React,{ useState }from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

const Contact = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        message: ''
      });

    const [result, setResult] = useState(null);

    const sendEmail = event => {
        event.preventDefault();
        axios
        .post('/send', { ...state })
        .then(response => {
        setResult(response.data);
        setState({ 
            name: '', 
            email: '',
            message: '' });

        })
        .catch(() => {
        setResult({ 
            success: false, 
            message: 'Something went wrong. Try again later'});
});
        // code to trigger Sending email
      };

      const onInputChange = event => {
        const { name, value } = event.target;
    
        setState({
          ...state,
          [name]: value
        });
      };

    return (
        <div>
            <h1>Contact Us</h1>

        <div className='contact'>
            <h2>General Questions and Inquires</h2>
            <p>call us on:</p>
            <p>+256771906621 or +256755490732 </p>
        </div>

        <div className='comment'>
            <h4> We welcome your comments, questions and feedback.</h4>  
               <p>A member of our team will respond to your inquiry as quickly as possible.</p> 
            
            <form className='form' onSubmit={sendEmail}>

                <Form.Group controlId="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={state.name}
                    placeholder="Enter your full name"
                    onChange={onInputChange}/>
                </Form.Group>

                <Form.Group controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type="text"
                    name="email"
                    value={state.email}
                    placeholder="Enter your Email"
                    onChange={onInputChange}/>
                </Form.Group>

                <Form.Group controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    type="textarea"
                    name="message"
                    value={state.message}
                    placeholder="Enter your Message"
                    onChange={onInputChange}/>
                </Form.Group>

                <Button  variant="primary" type = 'submit'>Submit</Button>
            
            </form>
        </div>
        </div>
            
   
    )
}

export default Contact
