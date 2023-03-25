import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import "./mode.css"

function About(props) {
    return (
        <div className="container">
            <Accordion className={`${props.mode}`}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header class>How to Use</Accordion.Header>
                    <Accordion.Body >
                        <p>You can simply type or copy/paste in the textbox and click on various functionalities by clicking their respective button.</p>
                        For more info about the functionalities check below
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Functions</Accordion.Header>
                    <Accordion.Body>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Convert To UpperCase</Accordion.Header>
                                <Accordion.Body>
                                    This will convert all the text typed in textbox to uppecase
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Convert To LowerCase</Accordion.Header>
                                <Accordion.Body>
                                    This will convert all the text typed in textbox to lowercase
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Clear Text</Accordion.Header>
                                <Accordion.Body>
                                    Delete all text in textbox (i.e. clear text in textbox)
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Remove extra space</Accordion.Header>
                                <Accordion.Body>
                                    This will remove all the extra space (i.e. extra space in front or back or inbetween) text typed in textbox
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Text to Speech</Accordion.Header>
                                <Accordion.Body>
                                    This will convert all the text typed in textbox to speech using speechSynthesis
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>copy to clipboard</Accordion.Header>
                                <Accordion.Body>
                                    This will copy all the text or edited text to clipboard
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Credits</Accordion.Header>
                    <Accordion.Body>
                        <p>Made By: Yash Srivastava </p>
                        credits: codewithHarry yt
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default About;
