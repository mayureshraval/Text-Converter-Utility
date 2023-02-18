import React, { useState } from 'react'

export default function Textbox(props) {
    let textColor = props.mode==='light'? 'dark' : 'light';
    // created a text state variable which is set to blank by defualt.
    const [text, setText] = useState("");
    // created a wordcount to accurately count words inside the box and set it to 0 by default.
    const [wordCount, setwordCount] = useState(0);

    // this function is run via onchange on textarea.
    function updateText(event){
        // taking the live text and sending it to text variable.
        setText(event.target.value);
        // if the box is empty then word count is 0 or else the word count is splitted by removing spaces by split and regex and then the remaning array of words lenght is calculated to get actual words.
        if (event.target.value.trim() === "") {
            setwordCount(0);
        } else {
            setwordCount(event.target.value.trim().split(/\s+/).length);
        }
    }
    function setUpperCase(){
        setText(text.toUpperCase());

        // 15. setting alerts by checking if there is any word in the box first, and then calling the alert function (this is a function coz we passed a function into alert prop in app js. So we call the alert and pass parameters into it. which will be the type and message.)
        wordCount===0 ? props.alert('warning','Enter Something') : props.alert('success','Converted to Uppercase');
    }
    function setLowerCase(){
        setText(text.toLowerCase());
        wordCount===0 ? props.alert('warning','Enter Something') : props.alert('success','Converted to Lowercase');
    }
    function setTitleCase(){
        let arr= [];
        // this is to fix uppercase text not converting to title case we create array of words divided by space.
        let words= text.toLowerCase().split(' ');
        for (let i = 0; i < words.length; i++) {
            arr.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
        }
        setText(arr.join(' '));
        wordCount===0 ? props.alert('warning','Enter Something') : props.alert('success','Converted to Title Case');
    }
    function capitalizeSentences() {
        // this looks for first word and then looks for words after . and some spaces. then passes the value to function in c and then we perform the methods.
        setText(text.replace(/(^\w{1}|\.\s*\w{1})/g, function(c) {
          return c.toUpperCase();
        }));
        wordCount===0 ? props.alert('warning','Enter Something') : props.alert('success','Capitalized sentences!');
      }
    function removeExtraSpaces() {
        // to remove extra space we are just using regex \s+ means 1 or more spaces, g means whole text box not one and trim removes spaces from front and behind.
        setText(text.replace(/\s+/g, ' ').trim());
        wordCount===0 ? props.alert('warning','Enter Something') : props.alert('success','No Extra Spaces!');
      }
    function copyText(){
        // using the navigator api to write the text to clipboard.
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
    {/* props.mode and textcolor are used for themes to update bootstrap classes. */}
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
