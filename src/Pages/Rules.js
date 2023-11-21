import React from 'react';
import data from '../data.json';

function Rules () {
    return (
      <div>
        <h1>Rules</h1>
        <h2>Game Contents</h2>
        <p>Dice: {data.gameContents.dice}</p>
        <p>Pawns: {data.gameContents.pawns}</p>
        <p>Customer Pawns: {JSON.stringify(data.gameContents.customerPawns, null, 2)}</p>
        <p>Question Cards: {JSON.stringify(data.gameContents.questionCards, null, 2)}</p>
        <p>Chance Cards: {data.gameContents.chanceCards}</p>
        <p>Event Cards: {data.gameContents.eventCards}</p>

        <h2>Game Context</h2>
        <p>{data.gameContext}</p>

        <h2>Gameplay</h2>
        <p>Start: {data.gameplay.start}</p>
        <p>Question Boxes: {data.gameplay.questionBoxes}</p>
        <p>Event Boxes: {data.gameplay.eventBoxes}</p>
        <p>Chance Boxes: {data.gameplay.chanceBoxes}</p>
        <p>End: {data.gameplay.end}</p>

        <h2>Score Sheet</h2>
        <p>Easy Questions: {JSON.stringify(data.scoreSheet.easyQuestions, null, 2)}</p>
        <p>Medium Questions: {JSON.stringify(data.scoreSheet.mediumQuestions, null, 2)}</p>
        <p>Hard Questions: {JSON.stringify(data.scoreSheet.hardQuestions, null, 2)}</p>
      </div>
    );
}

export default Rules;