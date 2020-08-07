import React, { useState } from 'react';
import { Button, Modal} from "react-bootstrap";
import Axios from "../../node_modules/axios";

function ContactModal(props) {

    const [show, setShow] = useState(false);
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [subject , setSubject] = useState('');
    const [message , setMessage] = useState('');
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async () => {
        let res = await Axios.post(`/api/v1/mail/${name}/${email}/${subject}/${message}`);
        console.log(`Status code: ${res.status}`);
        console.log(`Status text: ${res.statusText}`);
        console.log(`Request method: ${res.request.method}`);
        console.log(`Path: ${res.request.path}`);
        console.log(`Date: ${res.headers.date}`);
        console.log(`Data: ${res.data}`);
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleSubjectChange = (e) => {
        setSubject(e.target.value)
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value)
    }


    return (
        <div>
            <Button variant="outline-warning" size="lg" onClick={handleShow}>Contact Me!</Button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Contact Ibrahim D.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form id="contact-form" onSubmit={handleSubmit} >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input value={name}  onChange={e=>handleNameChange(e)} type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input value={email} onChange={e=>handleEmailChange(e)}  type="email" className="form-control" aria-describedby="emailHelp" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input value={subject} onChange={e=>handleSubjectChange(e)}   type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea value={message} onChange={e=>handleMessageChange(e)}  className="form-control" rows="5"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-danger" onClick={handleClose}>
                        Close
                     </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ContactModal;