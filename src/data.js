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
        "easy": 20,
      },
      "chanceCards": 30,
      "eventCards": 30
    },
    "gameContext": "You manage a fictional online commercial company, and with your actual knowledge of traffic acquisition, you must earn the largest number of customers possible in a limited time. You already start the game with 1110 clients ! (one of each customer’s pawns : 1 = 10, 1 = 100 and 1 = 1000) ! Answer questions of varying difficulties, pick different chance cards and face unexpected events. Each player takes their turn by rolling a dice. Depending on the box you land on, you either gain or lose clients. Be the first to gather the most clients in 30 minutes !  "
    ,"gameplay": {
      "start": "Each player rolls the die to determine the order of play. The one with the highest number starts. Scan the QR code and start the 30-minute timer. Players take their turn by rolling the die.",
      "questionBoxes": "If a player lands on this box, the player on his left picks a question of the corresponding color and asks him the question. If he answers correctly, he gains the number of customers indicated at the end of the rules. If he answer incorrectly, he loses customers. The correct answers to the questions is shown in bold.",
      "eventBoxes": "If a player lands on this box, the player picks an event card and keep it in front of him. He can play it directly or whenever he wants during the game time. There are “attack” and “defense” cards, which are used in his advantage. (Steal customers from other companies)",
      "chanceBoxes": "If a player lands on this box, the player picks a chance card and must play it immediatly. there are lucky and bad luck cards so that’s a surprise ! You can either win or lose customers. ",
      "greyBoxes": "If a player lands on this box, the player wins immediatly 100 customers.",
      "end": "Play and accumulate as many customers as possible ! The game ends when the timer stops. You have 30 minutes. This is an ultimate race so you have to be quick before running out of time ! Good luck !"
    },
    "scoreSheet": {
        "easyQuestions": {
          "win": "10 customers",
          "lose": "100 customers"
        },
        "mediumQuestions": {
          "win": "100 customers",
          "lose": "10 customers"
        },
        "hardQuestions": {
          "win": "1000 customers",
          "lose": "100 customers"
        }
      }
  }
]

export default data;