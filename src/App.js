import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
 // let showParagraph = false;
  let [showParagraph, setShowParagraph]= useState(false);
  //we are using destructruing of array where showParagraph will store flse and setShowParagraph will store function.
  //useState will give output as an array where
  //arr[0] -> intial value of useState(showParagraph i.e. false)
  //arr[1] -> function that helps us to update arr[1]
  //showParagraph is now managed by react. So any change in showParagraph variable -> React updates our UI.

  const onClickHandler=()=> {
    //console.log('before',showParagraph);
    console.log('clicked');
    setShowParagraph(true);
    
    //showParagraph= true;
    //console.log('after',showParagraph);
  }
  return (
   <div>
     <button id='click' onClick={onClickHandler}>Click me to show the paragraph</button>
     {showParagraph && <p id='para'>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
     }
    </div> 
  );
}

export default App;
