import { useState } from 'react';
import './App.css';

function App() {
  const [value,setvalue]=useState(0)
  const [opp,setopp]=useState(0)
  const [sum,setsum]=useState(0)
  var a=0
  return (
    <div className="App">
      <div className="calculator">
      <div className='ans'><h4>{value}</h4></div>
      <div className='btn'>
      <button className="btn-no spacing" onClick={(e)=>{if(value===0){
        setvalue(e.target.value)
        }else{
          setvalue(value+e.target.value)
        }}} value='1'>1</button>
      <button className="btn-no spacing" onClick={(e)=>{if(value===0){
        setvalue(e.target.value)
        }else{
          setvalue(value+e.target.value)
        }}} value='2'>2</button>
      <button className="btn-no spacing" onClick={(e)=>{if(value===0){
        setvalue(e.target.value)
        }else{
          setvalue(value+e.target.value)
        }}} value='3'>3</button>
      <button className="btn-no spacing" onClick={(e)=>{
         setopp(3)
         setsum(parseInt(value))
         setvalue(0)
      }}>/</button>
      <button className="btn-no spacing" onClick={(e)=>{
         setopp(4)
         setsum(parseInt(value))
         setvalue(0)
      }}>X</button>
      <button className="btn-no spacing" onClick={(e)=>{
        setopp(0)
        setsum(0)
        setvalue(0)
      }}>AC</button>
      <button className="btn-no spacing" onClick={(e)=>{if(value===0){
        setvalue(e.target.value)
        }else{
          setvalue(value+e.target.value)
        }}} value='4'>4</button>
      <button className="btn-no spacing" onClick={(e)=>{if(value===0){
        setvalue(e.target.value)
        }else{
          setvalue(value+e.target.value)
        }}} value='5'>5</button>
      <button className="btn-no spacing" onClick={(e)=>{if(value===0){
        setvalue(e.target.value)
        }else{
          setvalue(value+e.target.value)
        }}} value='6'>6</button>
      <button className="btn-no spacing" onClick={(e)=>{
         setopp(2)
         setsum(parseInt(value))
         setvalue(0)
      }}>-</button>
      <button className="btn-no spacing" onClick={(e)=>{
        setopp(1)
        setsum(parseInt(value))
        setvalue(0)
      }} value='+'>+</button>
      <button className="equal spacing" onClick={(e)=>{
        switch (opp) {
          case 1:
             a=parseInt(sum)+parseInt(value)
            setvalue(a)
            break;
          case 2:
              a=parseInt(sum)-parseInt(value)
             setvalue(a)
             break;
          case 3:
              a=parseInt(sum)/parseInt(value)
             setvalue(a)
             break;
          case 4:
              a=parseInt(sum)*parseInt(value)
             setvalue(a)
             break;             
          default:
            break;
        }
      }}>=</button>
      <button className="btn-no spacing ls" >7</button>
      <button className="btn-no spacing ls" onClick={(e)=>{if(value===0){
        setvalue(e.target.value)
        }else{
          setvalue(value+e.target.value)
        }}} value='7'>7</button>
      <button className="btn-no spacing ls" onClick={(e)=>{if(value===0){
        setvalue(e.target.value)
        }else{
          setvalue(value+e.target.value)
        }}} value='8'>8</button>
      <button className="btn-no spacing ls" onClick={(e)=>{if(value===0){
        setvalue(e.target.value)
        }else{
          setvalue(value+e.target.value)
        }}} value='9'>9</button>
      <button className="zero spacing ls" onClick={(e)=>{if(value===0){
        setvalue(e.target.value)
        }else{
          setvalue(value+e.target.value)
        }}} value='0'>0</button>
      <button className="btn-no spacing ls">9</button>
      </div>
      </div>
    </div>
  );
}

export default App;
