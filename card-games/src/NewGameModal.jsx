import { useState } from 'react'

const NewGameModal = () => {

  const [playerCount, setPlayerCount] = useState(1);
  const [playerList, setPlayerList] = useState([]);  
    
   function handleCountButtonClick () {
    const playerList = [...Array(playerCount)].map((_, index) => `Player ${index + 1}`);

   }

  return (
    <dialog className='modal'>
        <main className='modal-box'>
            <div>
                <label htmlFor="playersCount">Number of players</label>
                <input className='grow' value={playerCount} onChange={(ev) => setPlayerCount(ev.target.value)} type="number"/>
                <button className='btn'></button>
            </div>
            <div>
            </div>
        </main>
    </dialog>
  )
}

export default NewGameModal;