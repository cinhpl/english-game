import React from 'react';
import data from '../data';
import './Rules.css';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import iconCards from '../Assets/iconcards.png';
import chanceCards from '../Assets/chancecards.png';
import eventCards from '../Assets/eventcards.png';
import dice from '../Assets/dice.png';
import pawns from '../Assets/pawns.png';
import trofee from '../Assets/trofee.png';
import startgame from '../Assets/startgame.png';
import qrCode from '../Assets/qrcode.png';
import events from '../Assets/events.png';
import lucky from '../Assets/lucky.png';
import grey from '../Assets/grey.png';
import chrono from '../Assets/chrono.png';

function Rules() {
  const { gameContents, gameContext, gameplay, scoreSheet } = data[0];

  return (
    <section className='rules'>
    <Header />
      <h1>Rules</h1>
      <div className='gamecontext'>
        <div className='content'>
          <h3>Content :</h3>
          <div className='container'>
            <p><img src={dice} alt="dice" />{gameContents.dice} dice</p>
            <p>{gameContents.pawns} pawns</p>
            <p><img src={pawns} alt="pawns" />60 pawns (customers)</p>
          </div>
          <div className='container'>
            <div className='container-content'>
              <img src={iconCards} alt="iconCards" />
              <p>20 Questions cards</p>
            </div>
            <div className='container-content'>
              <img src={chanceCards} alt="chanceCards" />
              <p>30 Chance cards</p>
            </div>
            <div className='container-content'>
              <img src={eventCards} alt="eventCards" />
              <p>30 Events cards</p>
            </div>
          </div>
        </div>
        <div className='category'>
          <h3>Game Principle :</h3>
          <p>{gameContext}</p>
          <img src={trofee} alt="trofee" />
        </div>
        <div className='category-rules'>
          <div className='category'>      
            <h2>Gameplay</h2>
            <div className='step-rules'>
              <img src={startgame} alt="startgame" />
              <p>Each player rolls the die to determine the order of play. The one with the highest number starts. </p>
            </div>
            <div className='step-rules'>
              <img src={qrCode} alt="qrCode" />
              <p>Scan the QR code at the end of the rules or on the board game, and start the 30 minute timer.</p>
            </div>
            <div className='step-rules'>
              <img src={dice} alt="dice" />
              <p>Players take their turn by rolling the dice in order to arrive on a box. The boxes have different results :</p>
            </div>
            <p>End: {gameplay.end}</p>
          </div>
          <div className="case-rules">
            <div className='sheet-rules'>
              <img src={iconCards} alt="iconsCards" />
              <p><strong><em>"Questions" boxes :</em></strong> If a player lands on this box, the player on his left picks a question of the corresponding color and asks him the question. If he answers correctly, he gains the number of customers indicated at the end of the rules. If he answer incorrectly, he loses customers. The correct answers to the questions is shown in bold.</p>
            </div>
            <div className='sheet-rules'>
              <img src={events} alt="events" />
              <p><strong>"Events" boxes :<em></em></strong> If a player lands on this box, the player on his left picks a question of the corresponding color and asks him the question. If he answers correctly, he gains the number of customers indicated at the end of the rules. If he answer incorrectly, he loses customers. The correct answers to the questions is shown in bold.</p>
            </div>
            <div className='sheet-rules'>
              <img src={lucky} alt="lucky" />
              <p><strong><em>"Chances" boxes :</em></strong>If a player lands on this box, the player on his left picks a question of the corresponding color and asks him the question. If he answers correctly, he gains the number of customers indicated at the end of the rules. If he answer incorrectly, he loses customers. The correct answers to the questions is shown in bold.</p>
            </div>
            <div className='sheet-rules'>
              <img src={grey} alt="grey" />
              <p><strong><em>"Grey" boxes :</em></strong>If a player lands on this box, the player on his left picks a question of the corresponding color and asks him the question. If he answers correctly, he gains the number of customers indicated at the end of the rules. If he answer incorrectly, he loses customers. The correct answers to the questions is shown in bold.</p>        
            </div>
          </div>
        </div>
        <p><img src={chrono} alt="chrono" />{gameplay.end}</p>
        <div className='category'>
          <h3>Score Sheet</h3>
          <h4 style={{ color: '#83CB99'}}>Easy Questions</h4>
          <p>{scoreSheet.easyQuestions.win}</p>
          <p>{scoreSheet.easyQuestions.lose}</p>
        </div>
        <div className='category'>
          <h4 style={{ color: '#FDCD0D'}}>Medium Questions</h4>
          <p>{scoreSheet.mediumQuestions.win}</p>
          <p>{scoreSheet.mediumQuestions.lose}</p>
        </div>
        <div className='category'>
          <h4 style={{ color: '#F05347'}}>Hard Questions</h4>
          <p>{scoreSheet.hardQuestions.win}</p>
          <p>{scoreSheet.hardQuestions.lose}</p>
        </div>
        <div className='qrcode'>
          <h2>Scan me !</h2>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Rules;
