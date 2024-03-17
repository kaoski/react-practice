/* eslint-disable react/prop-types */
import React from 'react';
import {useSelector} from "react-redux";

const ScoreCard = ({players}) => {

  const roundInfo = useSelector(state => state.matchInfo);
  
  const scoreBoard = players.map(player => {
    const count = roundInfo.reduce((count, currentRoundInfo) => {
        if (currentRoundInfo.winner === player) {
            return count + 1;
        } 
        return count;
    } , 0);
    return {player, count};
  });

  return (
    <table className='table'>
      <thead>
        <th>Player Name</th>
        <th>Score</th>
      </thead>
      <tbody>
        {scoreBoard.map(score => {
          return (
            <tr key={score.player}>
              <td>{score.player}</td>
              <td>{score.count}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}

export default ScoreCard