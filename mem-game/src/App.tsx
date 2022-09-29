import './App.css';
import { Card } from './components/Card';
import { useState, useEffect } from 'react';
import CardRandom from './components/CardRandom';

const getRandomNum = () => Math.floor(Math.random() * 3)

function App() {
  const [num, setNum] = useState(getRandomNum());

  // useEffect(() => {
  //   const getRandomNum = () => {
  //     return setNum(Math.floor(Math.random() * 3))
  //   }
  //   getRandomNum();
  // },[])

  return (
    <div>
      <Card picture={num} />
      <Card picture={num} />
      <Card picture={num} />
      <CardRandom />
      <CardRandom />
      <CardRandom />
    </div>
  );
}

export default App;
