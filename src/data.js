const data = [
  {
    "gameContents": {
      "dice": 1,
      "pawns": 6,
      "customerPawns": {
        "ten": 20,
        "hundred": 20,
        "thousand": 20
      },
      "questionCards": {
        "easy": 25,
        "medium": 25,
        "hard": 25
      },
      "chanceCards": 30,
      "eventCards": 30
    },
    "gameContext": "Be the first to acquire as many clients as possible! You manage a fictional online commercial enterprise, and with your knowledge of traffic acquisition, you must attract the largest number of clients possible. Answer questions of varying difficulties, draw chance and misfortune cards, and face unexpected events. Each player takes their turn by rolling a die. Depending on the square you land on, you either gain or lose clients. Be the first to gather the most clients in 30 minutes! Ready? 3, 2, 1... go!",
    "gameplay": {
      "start": "Each player rolls the die to determine the order of play. The one with the highest number starts. Scan the QR code and start the 30-minute timer. Players take their turn by rolling the die.",
      "questionBoxes": "If a player lands on this space, another player draws a question of the corresponding color and asks them the question. If they answer correctly, they gain the number of clients indicated on the score sheet. If they answer incorrectly, they lose clients.",
      "eventBoxes": "If a player lands on this space, they draw an event card and keep it face down in front of them. They can play it whenever they want. There are 'attack' and 'defense' cards, which are used to battle other players.",
      "chanceBoxes": "If a player lands on this space, they draw a chance card and must play it immediately.",
      "end": "Play and accumulate as many clients as possible. The game ends when the timer runs out. You have 30 minutes, good luck!"
    },
    "scoreSheet": {
        "easyQuestions": {
          "win": "Win 10 clients",
          "lose": "Lose 10 clients"
        },
        "mediumQuestions": {
          "win": "Win 100 clients",
          "lose": "Lose 10 clients"
        },
        "hardQuestions": {
          "win": "Win 1000 clients",
          "lose": "Lose 100 clients"
        }
      }
  }
]

export default data;