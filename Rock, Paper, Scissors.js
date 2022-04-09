// User CHOICE
const getUserChoice = userInput => {
    var userInput = userInput.toLowerCase()
  if (userInput === 'rock'|| userInput === 'scissor' || userInput === 'paper') {
     return userInput;
   } else {
     console.log('Error, not a valid User Input');
  }
  }
  
  // Calling the function within the variable getUserChoice with the parameter value rock
  //console.log(getUserChoice('rock'))
  
  // Computer CHOICE
  function getComputerChoice() {
    var randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
      case 0:
      return 'rock'
      break;
      case 1:
      return 'scissor'
      break;
      case 2:
      return 'paper'
      break;
    }
  }
  
  //Calling function getComputerChoice to test it
  //console.log(getComputerChoice());
  
  var userChoice
  var computerChoice
  function determineWinner(userChoice,computerChoice) {{
    if (userChoice === computerChoice)
    return 'The game was a tie.'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer Won.';
     } else {
        return 'The user Won.';
      }
    }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissor') {
      return 'The computer won.';
    } else {
      return 'The user Won.';
    }
      }
  if (userChoice === 'scissor') {
    if (computerChoice === 'rock') {
      return 'The computer won.';
    } else {
      return 'The user Won.';
    }
      }}
  //PLAY game AND output
  const playGame = () => {
    const userChoice = getUserChoice('scissor');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice)
    console.log(determineWinner(userChoice,computerChoice))
  }
  
  playGame();