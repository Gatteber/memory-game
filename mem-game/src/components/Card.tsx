import { useState, useEffect } from 'react';

const getRandomNum = () => Math.floor(Math.random() * 5)

function Card( { badNum, setScore, num, setNum }: any) {
    // const [num, setNum] = useState(getRandomNum);

    // setNum(getRandomNum);
    const checkIfLoser = () =>{
      if(num === badNum) {
        console.log('haha, you lose');
        setScore(0);
      } else {
        setScore((score: any) => score + 1);
        setNum(getRandomNum);
      }
    }
    
  return (
    <div 
    className='card-container'
    style={{
      backgroundColor: "black"
    }}
    onClick={checkIfLoser}
    >
      {num}
    </div>
  )
}

export default Card