import {  useEffect } from "react";
import CardHolder from "./cardholder/CardHolder";
import {useSelector, useDispatch} from "react-redux";
import {turnCard, hideCard, showBackForAllCard} from "../../store/deckSlice"
import {moveToNextRound, addFirstCard, addSecondCard, addWinner} from "../../store/matchInfoSlice";
import { isWinningPair } from "../../utils/util";


export default function Board () {

    const dispatch = useDispatch();


    const roundInfo = useSelector(state => state.matchInfo)

    const deck = useSelector(state => state.deck);

    useEffect(() => {
        const currentRound = roundInfo[roundInfo.length - 1];
        if (currentRound.secondCard !== null) {
        const timeOut = setTimeout(() => {
            if (isWinningPair(currentRound.firstCard, currentRound.secondCard)) {
                dispatch(addWinner(currentRound.round % 2));
                dispatch(hideCard(currentRound.firstCard));
                dispatch(hideCard(currentRound.secondCard));
                dispatch(showBackForAllCard());
                dispatch(moveToNextRound());
            } 
            startNextRound();
        }, 1500);

        return () => {
            clearTimeout(timeOut);
        }
    }
    }, [roundInfo])

    function startNextRound () {
        dispatch(showBackForAllCard());
        dispatch(moveToNextRound());
    }

    function isFirstRoundCompleted () {
        const currentRound = roundInfo[roundInfo.length - 1];
        return currentRound.firstCard === null;
    }

    function isSecondRoundCompleted () {
        const currentRound = roundInfo[roundInfo.length - 1];
        return currentRound.secondCard === null;
    }

    function handleCurrentRound (card) { 
        if (isFirstRoundCompleted()) {
            dispatch(turnCard(card));
            dispatch(addFirstCard(card));
        } else if (isSecondRoundCompleted()) {
            dispatch(turnCard(card));
            dispatch(addSecondCard(card));            
        }
    } 

    function getBoard() {
        const board = Array.from({length: 4}, () => ['', '', '', '']);
        const set = new Set();
        Object.entries(deck).forEach(([key, value]) => {      
            const {row , col} = value;
            board [row] [col] = key;
            set.add(board[row][col]);
        })
        return board;
    }

    const board = getBoard();
    
    return (
        <>
        <div className="flex flex-col h-full">

            {
                board.map((cardRow, idx) => {
                    return (
                    <div key={idx} className="flex">
                        {cardRow.map(card => <CardHolder 
                        handleCardSelect={handleCurrentRound}
                        key={card} card={card}/>
                        )}
                    </div>
                    );
                })
            }

        </div>
        </>
    );

}