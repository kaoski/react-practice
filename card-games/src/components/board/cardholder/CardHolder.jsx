/* eslint-disable react/prop-types */
import Card from "@heruka_urgyen/react-playing-cards/lib/TcN"
import {useSelector} from "react-redux";

export default function CardHolder({card, handleCardSelect}) {

    const cardState = useSelector(state => state.deck[card]);

    return (
        <div onClick={() => handleCardSelect(card)} className="m-2 flex-grow w-full">
            {!cardState.hideCard && <Card card={card} height="120px" front={cardState.showFront} back={!cardState.showFront}/>}

        </div>
    );

}
