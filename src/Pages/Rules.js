import React from 'react';
import data from '../data';
import './Rules.css';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';

function Rules() {
  const { gameContents, gameContext, gameplay, scoreSheet } = data[0];

  return (
    <section className='rules'>
    <Header />
      <h1>Rules</h1>
      <div className='gamecontext'>
        <p>Dice: {gameContents.dice}</p>
        <p>Pawns: {gameContents.pawns}</p>
        <div className='category'>
          <h2>Customer Pawns</h2>
          <p>Ten: {gameContents.customerPawns.ten}</p>
          <p>Hundred: {gameContents.customerPawns.hundred}</p>
          <p>Thousand: {gameContents.customerPawns.thousand}</p>
        </div>
        <div className='category'>    
          <h2>Question Cards</h2>
          <p>Easy: {gameContents.questionCards.easy}</p>
          <p>Medium: {gameContents.questionCards.medium}</p>
          <p>Hard: {gameContents.questionCards.hard}</p>
        </div>
        <div className='category'> 
          <h2>Chance and Event Cards</h2>
          <p>Chance Cards: {gameContents.chanceCards}</p>
          <p>Event Cards: {gameContents.eventCards}</p>
        </div>
        <div className='category'>
          <h2>Game Context</h2>
          <p>{gameContext}</p>
        </div>
        <div className='category'>      
          <h2>Gameplay</h2>
          <p>Start: {gameplay.start}</p>
          <p>Question Boxes: {gameplay.questionBoxes}</p>
          <p>Event Boxes: {gameplay.eventBoxes}</p>
          <p>Chance Boxes: {gameplay.chanceBoxes}</p>
          <p>End: {gameplay.end}</p>
        </div>
        <div className='category'>
          <h2>Score Sheet</h2>
          <h3>Easy Questions</h3>
          <p>{scoreSheet.easyQuestions.win}</p>
          <p>{scoreSheet.easyQuestions.lose}</p>
        </div>
        <div className='category'>
          <h3>Medium Questions</h3>
          <p>{scoreSheet.mediumQuestions.win}</p>
          <p>{scoreSheet.mediumQuestions.lose}</p>
        </div>
        <div className='category'>
          <h3>Hard Questions</h3>
          <p>{scoreSheet.hardQuestions.win}</p>
          <p>{scoreSheet.hardQuestions.lose}</p>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Rules;
