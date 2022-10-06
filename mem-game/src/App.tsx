import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';

function App() {
  const getRandomNum = () => {
    const array = [];
    for (let i=0; i < 5; i++) {
      const generate = () => {
        return Math.floor(Math.random() * 5);
      }
      array.push(generate());
    }
    return array;
  }
  const getBadRandomNum = () => Math.floor(Math.random() * 5)

  const [num, setNum] = useState(getRandomNum);
  const [badNum, setBadNum] = useState(getBadRandomNum);
  const [score, setScore] = useState(0)
  const [maxScore, setMaxScore] = useState(0);

  useEffect(() => {
    if(score >= maxScore) {
      setMaxScore(score);
    }
    setNum(getRandomNum);
  },[score, maxScore])

  return (
    <div>
      <div className='container'>
      <Card badNum={badNum} setScore={setScore} num={num[0]} setNum={setNum} />
      <Card badNum={badNum} setScore={setScore} num={num[1]} setNum={setNum} />
      <Card badNum={badNum} setScore={setScore} num={num[2]} setNum={setNum} />
      <Card badNum={badNum} setScore={setScore} num={num[3]} setNum={setNum} />
      <Card badNum={badNum} setScore={setScore} num={num[4]} setNum={setNum} />
      {badNum}
      <div>
        score: {score}
      </div>
      <div>
        max score: {maxScore}
      </div>
      </div>
    </div>
  );
}

export default App;
