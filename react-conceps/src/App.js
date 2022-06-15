import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [userName, setUserName] = useState()

  useEffect(() => {
    console.log(userName)
  }, [userName])

  return (
    <div className="App">
      <h1> Hey Everyone!</h1>
      <input type =  "text" value = {userName} onChange={(e) => setUserName(e.target.value)}/>
      <button>Send</button>
    </div>
  );
}

export default App;
