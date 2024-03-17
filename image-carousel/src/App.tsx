import { useState } from 'react';
import './App.css'
import Image from './Image';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const images = [
  'https://images.unsplash.com/photo-1710415273634-455daf8686d8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1710415273471-24431054c4da?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1710344343399-ef407b5c7351?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const getNextIndex = (index: number) => index === images.length - 1 ? 0 : index + 1;

const getPreviousIndex = (index: number) => index === 0 ? images.length - 1 : index - 1;

function App() {

  const [index, setIndex] = useState<number>(0);

  return (
    <main>
      <button onClick={() => setIndex(index => getPreviousIndex(index))}><FaAngleLeft/></button>
      <Image src={images[index]}/>
      <button onClick={() => setIndex(index => getNextIndex(index))}><FaAngleRight/></button>
    </main>
  )
}

export default App
