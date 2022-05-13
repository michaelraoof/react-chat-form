import React, { useState } from 'react';
import './Compose.css';
import send from './send.png';

export default function Compose(props) {
    const [value, setValue] = useState("");
const handleChange = e => {
    setValue(e.target.value);
  };
const handleSendbutton = () => {
      //it triggers by pressing the enter key
   
 
    if (value !== "") {
      props.enterMessage(value);
      setValue("");
      
    }
    
};
  const handleEnterKeypress = e => {
      //it triggers by pressing the enter key
   
  if (e.key === 'Enter') {
    if (value !== "") {
      props.enterMessage(value);
      setValue("");
      e.target.value = "";
    }
    }
};

  return (
      
      <div className="compose">
       

        <input
          
          type="text"
          className="compose-input"
          placeholder="Type a message, @name"
           value={value}
           onChange={handleChange}
          onKeyPress={handleEnterKeypress}
        

        />
      <button style={{ backgroundColor: 'transparent', border: 'none' }} onClick={ handleSendbutton}><img src={send} style={{ width: '20px' }} alt=""/></button>
          
      </div>
    );
}