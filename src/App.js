import { useState } from 'react';
import './App.css';

function App() {
  //state creation
  const[counter,setCounter]=useState(0)
         function increment(){
           setCounter(counter+1)
         }
         function decrement(){
         if(counter!=0){
          setCounter(counter-1)
         }
         }
         function reset(){
          setCounter(0)
         }
  return (
    <div
     style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        border:'1px solid gray',
        margin:'20px',
        padding:'200px'
     }}
    className="App">
      <header className="App-header">
          <h2
          style={{
            textAlign:'center'
          }}
          >Counter App</h2>
          <h1
           style={{
            textAlign:'center'
          }}
          >{counter}</h1>
          <button
           style={{
            backgroundColor:'green',
            padding:'5px',
            borderRadius:'20px',
            margin:'10px'

          }}
          
          onClick={increment}>Increment</button>
          <button
          style={{
            backgroundColor:'aqua',
            padding:'5px',
            borderRadius:'20px',
            margin:'10px'

          }}
          onClick={reset}>Reset</button>
          <button
          style={{
            backgroundColor:'red',
            padding:'5px',
            borderRadius:'20px',
            margin:'10px'

          }}
          onClick={decrement}>Decrement</button>
         
      </header>
    </div>
  );
}

export default App;
