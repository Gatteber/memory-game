import { useState } from 'react';

const getRandomNum = () => Math.floor(Math.random() * 3)

function CardRandom() {
    const [num, setNum] = useState(getRandomNum());
  return (
    <div>{num}</div>
  )
}

export default CardRandom