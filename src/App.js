import React from 'react';
import './App.css';

function App() {
  const localStorageNumbers = localStorage.getItem('NUMBERS');
  let data;

  if(!localStorageNumbers){
    localStorage.setItem('NUMBERS', JSON.stringify(0));
    data = 0;
  }else{
    data = JSON.parse(localStorageNumbers);
  }

  const [value, setValue] = React.useState(data);

  const onClickButton = (event) => {
    if(event.target.name === "sum" && value !== 10){
      setValue(value + 1);
     
    }else if(event.target.name === "res" && value !== 0){
      setValue(value - 1);
    }
  }

  React.useEffect(()=>{
    localStorage.setItem('NUMBERS', JSON.stringify(value));
  },[value]);

  return (
    <section>
      <h1>PUNTUADOR</h1>
      <h3>{value}</h3>
      <div>
       <button name="sum" onClick = {onClickButton}>👍</button>
       <button name="res" onClick = {onClickButton}>👎</button> 
      </div>
      
    </section>
  );
}

export default App;
