import React, {useState} from 'react'

export default function TextForm(props) {
    const [text , setText] = useState('Enter Text Here'); 
    // setText("Enter text here");
    const handleUpClick = ()=>
    {
        console.log("uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>
    {
        console.log("uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event)=>
    {
        console.log("on change");
        setText(event.target.value);
    }

  return (
        <>
        <div className="container">
            <form>
                <h1>{props.heading}</h1>
                <div className="form-group">            
                    <textarea className="form-control" value={text} onChange = {handleOnChange} id="myBox" rows="8"></textarea>
                </div>
            </form>
            <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert to LowerCase.</button>
        </div>
        <div className="container my-3">
            <h1>Your text summary:</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read.</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
  )
}

TextForm.defaultProps = {
    heading:'Enter Your Text Here:'
}