import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect,useReducer,useRef} from "react";
function App() {
  const date = new Date()
  let year = date.getFullYear()
  let day = date.getDay()
  let month = date.getMonth()
  let we = document.getElementById("us");
  const [emotion,setEmotion] = useState()
  const [checked,setChecked]= useState(false)
  const[check,setCheck] =useReducer((check)=>!check
    ,false)
  const color = useRef();
  const submit =(e)=>{
    e.prevemtDefault();
    let colors = color.current.value;
    alert(colors);

  }
  let sentence  = "I am ";
  return (
    <React.Fragment>
      <div>
       <h1>Its {year}/{month}/{day} today! how are you ?</h1>
      <h2>{emotion}</h2>
      <h3 id="us">{checked ? "its a good day":""}</h3>
      <input type="text" id="emotion" required/>
      <button onClick={()=>setEmotion(sentence+document.getElementById("emotion").value+" today")}>submit</button>
      <input type="checkbox" value={checked} onChange={()=>{setChecked((checked)=>!checked)}}/>
      <label>{checked ? "checked":"NO"}</label>
      <input type="checkbox" value={check} onChange={()=>{setCheck()}}/>
  <label>{check ? "checked":"NO"}</label> 
  </div>
  <div>
      <form onSubmit={submit}>
        <input type="color" ref={color}/>
        <button>submit</button>
      </form>
      </div>
      
    </React.Fragment>
  )
    
}

export default App;
/* usage of useState const [variableState , variableUpdater] = useState(variableState)*/
