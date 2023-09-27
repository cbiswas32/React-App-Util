import React, {useState} from 'react';
import Alert from './Alert';
import PropTypes from 'prop-types';
import { event } from 'jquery';

export default function Textutil({headerTitle, currentMode}) {
  const [text, setText] = useState("");
  const [alert,setAlert] = useState(null);
  const convertUppercase = () =>{
    setText(text.toUpperCase())
  }
  const deleteText = () =>{
    let newText ="";
    setText(newText);
  }

  const handleCopyText = () =>{
    let copyied = text;
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyied);
    // Alert the copied text
    setAlert({title:"Text Copied!", value: copyied});
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  const handleTextOnChange = (event) =>{
    setText(event.target.value)
  }
  return (
    <div>
      <h1 className="mb-3">{headerTitle}</h1>
      <textarea className={`form-control bg-${currentMode==='light'?'dark':'light'} text-${currentMode!=='light'?'dark':'light'}`} placeholder="Enter your text here" value={text} rows = "8" id="floatingTextarea" onChange={handleTextOnChange}></textarea>
      <div className="d-flex mt-3">
        <button type="button" className="btn btn-primary mx-1 " style={{padding: '10px 25px', fontWeight: '500'}} onClick={convertUppercase}>Convert to UPPER CASE</button>
        <button type="button" className="btn btn-secondary mx-1 " style={{padding: '10px 25px', fontWeight: '500'}} onClick={handleCopyText}>Copy Text</button>
        <button type="button" className="btn btn-danger  mx-1 " style={{padding: '10px 25px', fontWeight: '500'}} onClick={deleteText}>Delete All</button>
      </div>
      <div className="container mt-5" id="copyAlert">
        <Alert alertObj={alert}/>
      </div>
      
    </div>
  );
}

Textutil.propTypes = {
  headerTitle: PropTypes.string,
  currentMode: PropTypes.string
}


Textutil.defaultProps = {
  headerTitle: 'Test Text'
}
