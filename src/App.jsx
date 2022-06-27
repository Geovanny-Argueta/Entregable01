import { useState } from 'react';
import './App.css'
import phrases from './components/phrases.json'

function App() {

  const phrasesIndex = Math.floor(Math.random() * phrases.length);
  const [selectPhrase, setSelectPhrase] = useState(phrasesIndex);

  const color = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871", "#845EC2", "#2C73D2"]
  const colorIndex = Math.floor(Math.random() * color.length);
  const colors = color[colorIndex];

  const changeButton = () => {
    const changeLetters = Math.floor(Math.random() * phrases.length);
    setSelectPhrase(changeLetters);
  }


  document.body.style= `background:${colors}`
  return (
    <div className='main'>
      <h1 style={{color:colors}}>{phrases[selectPhrase].quote}</h1>
      <h3 style={{color:colors}}>{phrases[selectPhrase].author}</h3>
      <button onClick={changeButton} style={{color:colors}}><i className="fa-solid fa-shuffle"></i></button>
    </div>
  )
}

export default App;
