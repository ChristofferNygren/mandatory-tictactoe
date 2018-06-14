/*
The Message component expects to be passed...
- state: a game state string (plr1,plr2,plr1won,plr2won,draw)

The component will then render an appropriate message.
*/

import React from 'react';

export default function Message(props){
    let newMessage;
    const gameMessage = {
        player1: "Player 1's turn",
        player2: "Player 2's turn",
        player1won: "Player 1 won!",
        player2won: "Player 2 won!",
        draw: "Draw! Play again?"
    };

    if (props.showMessage.win === 1 || props.showMessage.win === 2){
        props.showMessage.win === 1 ? newMessage = gameMessage.player1won : newMessage = gameMessage.player2won
    }
    else if (!props.showMessage.board.includes(0)){
        newMessage = gameMessage.draw;
    }
    else {
        props.showMessage.player === "plr1" ? newMessage = gameMessage.player1 : newMessage = gameMessage.player2
    }
  return (
      <h2>{newMessage}</h2>
  );
}
