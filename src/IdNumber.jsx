import React, { useRef,useState } from 'react';
import OutlinedDiv from './OutlinedDiv';


const IdNumber = ({ digits = 4, label, delimiter, delimiterNumber  }) => {
  const inputRefs = useRef([]);
  const [inputValues, setInputValues] = useState('');
  const handleInput = (index, e) => {
    const input = e.target;
    let value = input.value;

    if (value.length > 1) {
      input.value = value.slice(0, 1);
      value = input.value;
    }

    if (index === delimiterNumber[0] || index === delimiterNumber[1]) {
      if (value !== delimiter) {
      
        input.value = delimiter;
        value = delimiter;
      }

      // Move to the next input
      inputRefs.current[index + 1].focus();
    } else if (value && index < inputRefs.current.length - 1) {
      // Move to the next input if the current input is not empty
      inputRefs.current[index + 1].focus();
    }
  };
  const handleKeyDown = (index, e) => {
    const input = e.target;
    const value = input.value;
    if(value==="-"){
      return;
    }
    if (e.key === 'Backspace' && index > 0 && input.selectionStart === 0 && input.selectionEnd === 0) {
      const prevInput = inputRefs.current[index - 1];
      const prevValue = prevInput.value;
      if (prevValue.charAt(prevValue.length - 1) === delimiter) {
        // If the previous input ends with a delimiter, allow the user to manually backspace over it
        prevInput.value = '';
        prevInput.focus();
        prevInput.setSelectionRange(prevValue.length, prevValue.length);
      } else {
        // Otherwise, move to the previous input
        prevInput.focus();

        // Set cursor position to the end after handling backspace
        setTimeout(() => {
          prevInput.setSelectionRange(prevValue.length, prevValue.length);
        }, 0);
      }
    }
  };
  const handleChange = () => {
    const concatenatedValues = inputRefs.current
      .map(inputRef => inputRef.value)
      .join('');
    setInputValues(concatenatedValues);
  };
  return (
    <div style={{
      width:"95%",
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '20px'
    }}>
      <OutlinedDiv style={{width:"100%",margin:"auto"}} label={label+": "+inputValues}>
        <div id="idInput">
          {[...Array(digits)].map((_, index) => (
            <input
              type='text' 
              pattern={index === delimiterNumber[0] || index === delimiterNumber[1] ?  null:'[0-9]*' } 
              key={index}
              className="input-box"
              ref={e => (inputRefs.current[index] = e)}
              onInput={e => handleInput(index, e)}
              onKeyDown={e => handleKeyDown(index, e)}
              maxLength={1}
              onChange={e => handleChange(index, e.target.value)}
            />
          ))}
        </div>
      </OutlinedDiv>
    </div>
  );
}

export default IdNumber;
