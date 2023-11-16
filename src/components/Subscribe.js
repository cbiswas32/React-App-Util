import React, { useState } from 'react';
import "./css/subscribe.css";
import FormInput from './FormInput';

export default function Subscribe() {
  const [userValues, setUserValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: ""
  });
  
   
   const inputObj = [
    {
        id:1,
        name: "username",
        type: "text",
        placeholder: "User Name",
        label: "Username",
        errorMsg: "Username should be 3-16 charecters and shouldn't include any special charecter!",
        required : true,
        pattern: "^[a-z0-9]{3,16}$"
    },
    {
        id:2,
        name: "email",
        type: "email",
        placeholder: "Email Address",
        label: "Email",
        errorMsg: "It should be a valid email address!",
        required : true
    },
    {
        id:3,
        name: "birthday",
        type: "date",
        placeholder: "",
        label: "Date of Birth"
    },
    {
        id:4,
        name: "password",
        type: "password",
        placeholder: "Password",
        label: "Password",
        errorMsg: "Password should be 8-20 charecters and must include at least 1 special charecter, 1 number, 1 letter!",
        required : true,
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`
    },
    {
        id:5,
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirm Password",
        label: "Confirm Password",
        errorMsg: "Password don't match!",
        required : true,
        pattern: userValues.password
    }
   ];

  const handleSubscribe = (e) =>{
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.entries());
  }

  const onChange = (e) => {
        setUserValues({...userValues, [e.target.name]: e.target.value});
  }
  return (
    <div className='subscribe-container'>
    <form autoComplete="off" onSubmit={handleSubscribe}>
        {
            inputObj.map((input)=>
                <FormInput key={input.id} {...input} value={userValues[input.name]}  onChange={onChange}/>
            )
        }
        <div className="button-container">
            <button className="subscribe">Subscribe</button>
        </div>
        
    </form>
    </div>
  );
}
