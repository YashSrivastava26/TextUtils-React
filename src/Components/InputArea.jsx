import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './InputArea.css'
import './mode.css'


const InputArea = (props) => {
    const [textAreaState, settextAreaState] = useState("");
    const msg = new SpeechSynthesisUtterance();
    
    const handleOnChange = (event) => {
        settextAreaState(event.target.value);
    }

    const convertUpCase = () => {
        settextAreaState(textAreaState?.toUpperCase());
        props.showAlert('Converted to Upper Case Case', 'success');
    }

    const convertLowCase = () => {
        settextAreaState(textAreaState?.toLowerCase());
        props.showAlert('Converted to Lower Case', 'success');
    }

    const clearText = () => {
        settextAreaState('');        
        props.showAlert('TextArea Cleared', 'success');
    }

    const handleExtraSpace = () => {
        settextAreaState(textAreaState.replace(/\s+/g,' ').trim());
        props.showAlert('removed extra space', 'success');
    }
    
    const handleTextToSpeech = () => {
        msg.text = textAreaState;
        window.speechSynthesis.speak(msg);
    }

    const handleCopyText = () => {
        navigator.clipboard.writeText(textAreaState);
        props.showAlert('text copied to clipBoard', 'success');
    }

    return (
        <>
        <div className='container'>
            <Form>
                <h2>Enter Text below to Analyze</h2>
                <Form.Group className='mb-3'>
                    <Form.Control className={`${props.mode}`} as="textarea" placeholder='Enter Text Here' onChange={handleOnChange} value={textAreaState} rows={5} />
                </Form.Group>
            </Form>

            <div className="button-container container">
                <Button disabled={textAreaState.length === 0} className='my-2 mr-3' onClick={convertUpCase} variant="primary">Convert to UpperCase</Button>
                <Button disabled={textAreaState.length === 0} className='my-2 mr-3' onClick={convertLowCase} variant="primary">Convert to LowerCase</Button>
                <Button disabled={textAreaState.length === 0} className='my-2 mr-3' onClick={clearText} variant="primary">Clear Text</Button>
                <Button disabled={textAreaState.length === 0} className='my-2 mr-3' onClick={handleExtraSpace} variant="primary">Remove Extra Space</Button>
                <Button disabled={textAreaState.length === 0} className='my-2 mr-3' onClick={handleTextToSpeech} variant="primary">Text to Speech</Button>
                <Button disabled={textAreaState.length === 0} className='my-2 mr-3' onClick={handleCopyText} variant="primary">Copy Text</Button>
            </div>
        </div>

        <div className="results container">
            <h3>Summary</h3>
            <div id="summarys">
                <p>Number of words: {textAreaState.split(/\s+/).filter((element)=>{ return element.length != 0}).length}</p>
                <p>Number of letters: {textAreaState.split(/\S/g).length - 1}</p>
                <p>Time to Read: {textAreaState.split(/\s+/).filter((element)=>{return element.length != 0}).length * 0.008} min </p>
            </div>
        </div>

        <div className="container">
            <h3>Preview</h3>
            {textAreaState.length > 0 ? textAreaState : 'Nothing to preview!'}
        </div>
        </>
    )
}

export default InputArea
