import React, { useEffect, useState } from 'react'
import '../styles/App.css';

const App = () => {
  //code here 
  const [style, setStyle] = useState(true);

  const changeStyle = () => {
    return setStyle(!style);
  }

  return (
    <div id="main">
      <p className={style ? "redColor" : "blueColor"} >Newton School</p>
      <button id='button' onClick={changeStyle}>Change Style</button>
    </div>
  )
}


export default App;
