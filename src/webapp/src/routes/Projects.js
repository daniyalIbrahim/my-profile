import React from 'react';
import { Accordion, Button, Card } from "react-bootstrap";
import "./Projects.css"

function Projects(props) {
    return (
        <div className="container">
            <br></br>
            <br></br>
            <br></br>
            <Accordion className="main-accord">
                <Card className="accordion">
                    <Card.Header >
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" >
                            Internet Presence
                        </Accordion.Toggle>
                        <img alt="" style={{ float: "right" }} src="https://img.icons8.com/material-two-tone/40/000000/internet.png" />
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="cardbody">
                            <a href="https://www.linkedin.com/in/daniyal-ibrahim/" target="blank" cursor="pointer">
                                <img alt="linkedIn-logo" src="https://img.icons8.com/doodle/50/000000/linkedin.png" />
                            </a>
                            <a href="https://www.github.com/daniyalibrahim" target="blank" cursor="pointer">
                                <img alt="github-logo" src="https://img.icons8.com/fluent/48/000000/github.png" />
                            </a>
                            <a href="https://www.youtube.com/channel/UC62i4tEU0uTR2fidPtvtKgg?view_as=subscriber" target="blank" cursor="pointer">
                                <img alt="Youtube-logo" cursor="pointer" src="https://img.icons8.com/fluent/48/000000/youtube-play.png" />
                            </a>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card className="accordion" >
                    <Card.Header>
                        <Accordion.Toggle className="accordion" as={Button} variant="link" eventKey="1">
                            Internships
                        </Accordion.Toggle>
                        <img alt="" style={{ float: "right" }} src="https://img.icons8.com/ios-filled/50/000000/internship.png" />
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body >
                            <Card style={{ marginLeft: "2vw", marginRight: "2vw" }}>
                                <Card.Img variant="top" style={{ maxHeight: "20vh" }} src="./assets/adkor-logo.png" />
                                <Card.Body>
                                    <Card.Title>Cellular Network Analyst</Card.Title>
                                    <Card.Text>
                                        <h6>June 2019 - July 2019</h6>
                                    At this telecommunication company, i was provided with the task
                                    to analyse the newly installed cellular network base transceiver stations at different cities in germany.
                                    I prepared technical documentation which includes the measurement of signal strength and
                                    also documentation of the installed telecommunication equipment
                                    </Card.Text>
                                    <Button href="https://drive.google.com/drive/folders/1JJS-gFH1SxQQBh-Ie8dOOiFiuQ0UsTMR?usp=sharing" target="blank" variant="primary">See Certificate and Report</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{  marginTop: "3vh", marginLeft: "2vw", marginRight: "2vw" }}>
                                <Card.Img variant="top" style={{ maxHeight: "20vh" }} src="./assets/senseaition-logo.png" />
                                <Card.Body>
                                    <Card.Title>Software Engineer VoIP</Card.Title>
                                    <Card.Text>
                                        <h6>January 2020 - February 2020</h6>
                                    At this VoIP Software Development Start Up, i was given the task
                                    to implement a sip proxy as a micro service, which could record
                                    incoming and outgoing calls at a call center. I used Go lang to
                                    write a sip proxy and Docker to package the application as a micro service.
                                    </Card.Text>
                                    <Button href="https://drive.google.com/drive/folders/10pL5eZWvzrAlRkcCEDFqOF9AKUnK7w9u?usp=sharing" target="blank" variant="primary">See Certificate and Report</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{  marginTop: "3vh", marginLeft: "2vw", marginRight: "2vw" }}>
                                <Card.Img variant="top" style={{ maxHeight: "20vh" }} src="./assets/zissel-logo.png" />
                                <Card.Body>
                                    <Card.Title>Full Stack Software Developer</Card.Title>
                                    <Card.Text>
                                        <h6>June 2020 - July 2020</h6>
                                        At this Software Development Company, i was assigned the task to program a
                                        full-stack application. A server which could store journey information of a garbage truck, and
                                        a React js application, which could manage and display the journey information of  the truck.
                                        The aim of this project was to monitor the movement of garbage trucks in germany.
                                        I dockerize the applicaton prior to its submission.
                                    </Card.Text>
                                    <Button href="https://drive.google.com/drive/folders/16Q7jJANZObUhfV4F0yxa4uny0lagmnhO?usp=sharing" target="blank" variant="primary">See Certificate and Report</Button>
                                </Card.Body>
                            </Card>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </div>
    );
}

export default Projects;