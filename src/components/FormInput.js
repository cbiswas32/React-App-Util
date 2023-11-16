import React, { useState } from 'react';
import "./css/formInput.css";
export default function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const handleFocus = () =>{
    setFocused(true)
  }
  const {label, onChange, errorMsg, id,  ...inputProps} =props; 
  return (
    <div className = "formInput">
        <label  htmlFor={props.name}>{label}</label>
        <input {...inputProps} onChange={onChange} onBlur={handleFocus} onFocus={() => inputProps.name==='confirmPassword' && setFocused(true)} focused ={focused.toString()}/>
        <span className="errormsg">{errorMsg}</span>
    </div>
  );
}
