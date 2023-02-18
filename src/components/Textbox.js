import React, { useState } from 'react'

export default function Textbox(props) {
    let textColor = props.mode==='light'? 'dark' : 'light';
    const [text, setText] = useState("");

    const [wordCount, setwordCount] = useState(0);

    function updateText(event){
        setText(event.target.value);
        if (event.target.value.trim() === "") {
            setwordCount(0);
        } else {
            setwordCount(event.target.value.trim().split(/\s+/).length);
        }
    }
    function setUpperCase(){
        setText(text.toUpperCase());
        wordCount===0 ? props.alert('warning','Enter Something') : props.alert('success','Converted to Uppercase');
    }
    function setLowerCase(){
        setText(text.toLowerCase());
        wordCount===0 ? props.alert('warning','Enter Something') : props.alert('success','Converted to Lowercase');
    }
    function setTitleCase(){
        let arr= [];
        let words= text.toLowerCase().split(' ');
        for (let i = 0; i < words.length; i++) {
            arr.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
        }
        setText(arr.join(' '));
        wordCount===0 ? props.alert('warning','Enter Something') : props.alert('success','Converted to Title Case');
    }
    function capitalizeSentences() {
        setText(text.replace(/(^\w{1}|\.\s*\w{1})/g, function(c) {
          return c.toUpperCase();
        }));
        wordCount===0 ? props.alert('warning','Enter Something') : props.alert('success','Capitalized sentences!');
      }
    function removeExtraSpaces() {
        setText(text.replace(/\s+/g, ' ').trim());
        wordCount===0 ? props.alert('warning','Enter Something') : props.alert('success','No Extra Spaces!');
      }
    function copyText(){
        navigator.clipboard.writeText(text);
        wordCount===0 ? props.alert('warning','Nothing to copy') : props.alert('success','Text Copied to clipboard');
    }
    function clearText(){
        setText('');
        setwordCount(0);
        wordCount===0 ? props.alert('warning','Nothing to clear') : props.alert('success','Clear successfull');
    }
  return (
    <>
        <div className="form-floating mx-4 my-4">
            <h5 className='my-2'>Enter Text Below</h5>
            <textarea className={`form-control my-2 bg-${props.mode} text-${textColor}`} placeholder="Enter text here" id="floatingTextarea2" style= {{height: '40vh', width:'90vw'}} value={text} onChange={updateText}></textarea>
            <div className="btnwrapper my-2">
                <button type="button" className={`btn  btn-${props.mode}`} onClick={setUpperCase}>UPPERCASE</button>
                <button type="button" className={`btn  btn-${props.mode}`} onClick={setLowerCase}>lowercase</button>
                <button type="button" className={`btn  btn-${props.mode}`} onClick={setTitleCase}>Title Case</button>
                <button type="button" className={`btn  btn-${props.mode}`} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
                <button type="button" className={`btn  btn-${props.mode}`} onClick={capitalizeSentences}>Capitalize sentences.</button>
                <button type="button" className={`btn  btn-${props.mode}`} onClick={copyText}>Copy text</button>
                <button type="button" className={`btn  btn-${props.mode}`} onClick={clearText}>Clear</button>
            </div>
            <h5 className='my-2'>Preview</h5>
            <p className='my2'>{wordCount} words. {text.length} characters. Estimated Read time - {0.008 * wordCount} mins.</p>
            <p className='my-2' style= {{width:'90vw'}}>{text}</p>
        </div>
    </>
  )
}
