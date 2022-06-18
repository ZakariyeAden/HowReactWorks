
import React,{useState} from 'react'
import './App.css';
import DemoOutput from './Components/Demo/Demo';
import Button from './Components/UI/Buttons';
function App() {

  const [showParagraph,setShowParagraph]= useState(false);


  console.log('APP RUNNING');
  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph )
  };
  return (
    <div className="app">
      <h1>Hi There!</h1>
      <DemoOutput show={false}/>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  )
}

export default App