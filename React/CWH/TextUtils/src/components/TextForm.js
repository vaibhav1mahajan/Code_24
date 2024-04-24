import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("");
  function handleUpperCase(){
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!","Success");
  }
  function handleTextArea(event){
    setText(event.target.value);
  }
  function handleLowerCase(){
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","Success");

  }
  function handleClear(){
    const newText = "";
    setText(newText);
    props.showAlert("Cleared the text area!","Success");

  }
  function handleCopy(){
    // write logic here so that when user click on button they are able to copy text which is present on text area
    navigator.clipboard.writeText(text)
    .then(() => {
      alert('Text copied to clipboard!');
    })
    .catch((err) => {
      console.error('Unable to copy text to clipboard.', err);
    });
    props.showAlert("Copied to clipboard!","Success");

  }
  function handleExtraSpaces(){
    const newText = text.split(/[ ]+/);
    setText(newText.join(" ").trim());
    props.showAlert("Extra Spaces are removed!","Success");

  }
  function wordsLength(){
    if(text.length===0){
      return 0;
    }
    const newText = text.split(/[ ]+/).join(" ").trim().split(" ");
    if(newText.length===0){
      return 0;
    }
    return newText.length;
  }
  let a = wordsLength();
  function handleCapitalizedText(){
    const newText = text.toLowerCase().split(" ");
    setText(newText.map(word =>{
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" "));
    props.showAlert("Converted to Capitalized Text!","Success");

  }
  function handleAlternatingCase(){
    let newText = "";
    let text2 = text.toLowerCase();
    let state = true;
    for(let i =0;i<text.length;i++){
      if((text2[i]>='a' && text2[i]<='z')){
        if(state){
          newText+=text2[i];
          state=false;
        } else{
          newText+=text2[i].toUpperCase();
          state=true;
        }
      } else{
        newText+=text2[i];
      }
    }
    setText(newText);
    props.showAlert("Converted to Alternating Text!","Success");

  }
  function handleSentenceCase(){
   // write logic of handle sentence case here
   const newText = text.replace(/(^\w|\.\s*\w)/g, (match) => match.toUpperCase());
  setText(newText);
  props.showAlert("Converted to Sentence Case!","Success");

  }
  return (
        <>
          <div className='container' style={{color: props.mode==='light'?'#042743':'white'}}>
         <h1>{props.heading} - </h1>
      <div className="mb-3">
        <textarea placeholder='Enter you text' value={text} style={{backgroundColor: props.mode==='light'?'white':'#13466e', color: props.mode==='light'?'#042743':'white',fontSize:20}} onChange={handleTextArea} className="form-control" id="exampleFormControlTextarea1" rows="8 "></textarea>
      </div>
      <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleUpperCase}>Convert into UpperCase</button>
      <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleLowerCase}>Convert into UpperCase</button>
      <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleClear}>Clear</button>
      <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleCopy}>Copy to clipboard</button>
      <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleCapitalizedText}>Capitalized Text</button>
      <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleAlternatingCase}>aLtErNaTiNg CaSe</button>
      <button className="btn btn-primary mx-2 my-2" disabled={text.length===0} onClick={handleSentenceCase} download="a.txt">Sentence Case</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>It will take {0.008*text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview it here"}</p>
    </div>
    </>
  )
}
