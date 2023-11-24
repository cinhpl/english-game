import React from 'react';
import data from '../data';
import './Rules.css';
import 'animate.css';
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
import women from '../Assets/women.png';
import men from '../Assets/men.png';


function Rules() {
  const { gameContents, scoreSheet } = data[0];

  return (
    <section className='rules'>
    <Header />
      <div className='rules-title'>
        <h1 className='animate__animated animate__bounceInLeft'>Become the 1st company to have the most customers !</h1>
      </div>
      <div className='gamecontext'>
        <div className='content'>
          <h3>Content :</h3>
          <div className='content-container'>
          <div className='box'>
          <div className='animate__animated animate__fadeInUp'>
          <img src={dice} alt="dice" />
              <p>{gameContents.dice} dice</p>
              </div>
            <div className='animate__animated animate__fadeInUp'>
              <img src={women} alt="women" />
              <img src={men} alt="men" />
              <p>{gameContents.pawns} player pawns</p>
            </div>
            <div className='animate__animated animate__fadeInUp'>
            <img src={pawns} alt="pawns" />
            <p>60 customers</p>
            </div>
          </div>
          
            <div className='box'>
              <div className='animate__animated animate__fadeInUp'>
                <img src={iconCards} alt="iconCards" />
                <p>20 Questions cards</p>
            </div>
            <div className='animate__animated animate__fadeInUp'>
              <img src={chanceCards} alt="chanceCards"  style={{transform: 'rotate(-90deg)'}}  />
              <p>20 Chance cards</p>
            </div>
            <div className='animate__animated animate__fadeInUp'>
              <img src={eventCards} alt="eventCards"  style={{transform: 'rotate(-90deg)'}} />
              <p>20 Events cards</p>
            </div>
          </div>
        
          </div>
        </div>
        <div className='category'>
          <h3 className='animate__animated animate__fadeInBottomRight'>Game Principle :</h3>
          <p style={{display: 'block'}} className='animate__animated animate__fadeInUp'>
  {"You manage a fictional online commercial company, and with your actual knowledge of traffic acquisition, you must win the largest number of customers possible in a limited time. You already start the game with 1230 customers ! (one of each customer’s pawns : 3 = 10, 2 = 100 and 1 = 1000) Answer questions of varying difficulties, pick different chance cards and face unexpected events. Each player takes their turn by rolling a dice. Depending on the box you land on, you either gain or lose clients. Be the first to gather the most clients in 30 minutes !".split('.').map((sentence, i, arr) => <span key={i}>{sentence}{i !== arr.length - 1 && '.'}<br /></span>)}
</p>
          <p className="animate__animated animate__heartBeat" style={{fontSize: '1.2rem', color: 'red', fontWeight: 'bold', display: 'flex', justifyContent: 'center'}}>Ready ? 3,2,1... Get started !</p>
          <img src={trofee} alt="trofee" style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}/>
        </div>
        <div className='category-rules'>
          <div className='category'>      
            <h2 className="animate__animated animate__fadeInBottomRight">Gameplay</h2>
            <div className='step-rules'>
              <img src={startgame} alt="startgame" />
              <p>Each player rolls the die to determine the order of play. <br />The one with the highest number starts. </p>
            </div>
            <div className='step-rules'>
              <img src={qrCode} alt="qrCode" />
              <p>Scan the QR code on the board game to start the 30 minute timer and you can also scan the QR at the end of this page to see the rules on your phone.</p>
            </div>
            <div className='step-rules'>
              <img src={dice} alt="dice" />
              <p>Players take their turn by rolling the dice in order to arrive on a box. The boxes have different results :</p>
            </div>
           
          </div>
          <div className="case-rules">
            <div className='sheet-rules'>
              <img src={iconCards} alt="iconsCards" />
              <p><strong><em>"Questions" boxes :</em></strong> If a player lands on this box, the player on his left picks a question of the corresponding color and asks him the question. If he answers correctly, he gains the number of customers indicated at the end of the rules. If he answer incorrectly, he loses customers. The correct answers to the questions is shown in <strong>bold</strong>.</p>
            </div>
            <div className='sheet-rules'>
              <img src={events} alt="events" />
              <p><strong>"Events" boxes :<em></em></strong>If a player lands on this box, the player picks an event card and keep it in front of him. He can play it directly or whenever he wants during the game time. There are “attack” and “defense” cards, which are used in his advantage. (Steal customers from other companies).</p>
            </div>
            <div className='sheet-rules'>
              <img src={lucky} alt="lucky" />
              <p><strong><em>"Chances" boxes :</em></strong>If a player lands on this box, the player picks a chance card and must play it immediately. There are lucky and bad luck cards so that’s a surprise ! You can either win or lose customers. And you must answer imposed question by the player on your right.</p>
            </div>
            <div className='sheet-rules'>
              <img src={grey} alt="grey"/>
              <p><strong><em>"Grey" boxes :</em></strong>If a player lands on this box, the player use the big dice in order to make an even number (2,4,6). He only has one chance. If he succeeds, he wins 100 customers otherwise, nothing happens and the next player plays. After that, he must answer a question of his choice !</p>        
            </div>
          </div>
        </div>
        <p style={{display: 'flex'}}><img src={chrono} alt="chrono" />Play and accumulate as many customers as possible ! <br />The game ends when the timer stops. You have 30 minutes. This is an ultimate race so you have to be quick before running out of time ! <br />Good luck !</p>
        <div className='questions'>
        <div className='category'>
          <h4 style={{ color: '#83CB99'}}>Easy Questions</h4>
          <p style={{textAlign: 'center'}}>Win <span style={{fontWeight: 'bold'}}>{scoreSheet.easyQuestions.win}</span></p>
          <p style={{textAlign: 'center'}}>Lose <span style={{fontWeight: 'bold'}}>{scoreSheet.easyQuestions.lose}</span></p>
        </div>
        <div className='category'>
          <h4 style={{ color: '#FDCD0D'}}>Medium Questions</h4>
          <p style={{textAlign: 'center'}}>Win <span style={{fontWeight: 'bold'}}>{scoreSheet.mediumQuestions.win}</span></p>
          <p style={{textAlign: 'center'}}>Lose <span style={{fontWeight: 'bold'}}>{scoreSheet.mediumQuestions.lose}</span></p>
        </div>
        <div className='category'>
          <h4 style={{ color: '#F05347'}}>Hard Questions</h4>
          <p style={{textAlign: 'center'}}>Win <span style={{fontWeight: 'bold'}}>{scoreSheet.hardQuestions.win}</span></p>
          <p style={{textAlign: 'center'}}>Lose <span style={{fontWeight: 'bold'}}>{scoreSheet.hardQuestions.lose}</span></p>
        </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Rules;
