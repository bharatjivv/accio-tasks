console.log('sports day')

// Initialize 
let score = {
  red: 0,
  blue: 0,
  green: 0,
  yellow: 0,
};

// Opening Ceremony
function OpeningCeremony(callback) {
  console.log("Let the games begin!");
  setTimeout(() => {
    console.log("Opening Ceremony complete. Scores initialized.");
    console.log("Initial Scores:", score);
    callback(Race100M);
  }, 1000);
}

// Race100M Simulation
function Race100M(callback) {
  console.log("Starting the 100M Race...");
  setTimeout(() => {
    const times = {
      red: Math.floor(Math.random() * 6) + 10,     // 10 - 15 seconds
      blue: Math.floor(Math.random() * 6) + 10,
      green: Math.floor(Math.random() * 6) + 10,
      yellow: Math.floor(Math.random() * 6) + 10,
    };

    console.log("Race times:", times);

    const sorted = Object.entries(times).sort((a, b) => a[1] - b[1]);

    // Award points
    score[sorted[0][0]] += 50;
    score[sorted[1][0]] += 25;

    console.log("Scores after Race100M:", score);

    callback(LongJump);
  }, 3000);
}

// Long Jump 
function LongJump(callback) {
  console.log("Starting the Long Jump event...");
  setTimeout(() => {
    const colors = ["red", "blue", "green", "yellow"];
    const winner = colors[Math.floor(Math.random() * colors.length)];
    score[winner] += 150;

    console.log(`${winner} won the Long Jump!`);
    console.log("Scores after LongJump:", score);

    callback(HighJump);
  }, 2000);
}

// High Jump and user input
function HighJump(callback) {
  console.log("Starting the High Jump...");
  const userInput = prompt("Which color secured the highest jump? (red/blue/green/yellow)");

  if (userInput && score.hasOwnProperty(userInput.toLowerCase())) {
    score[userInput.toLowerCase()] += 100;
    console.log(`${userInput} awarded 100 points for High Jump.`);
  } else {
    console.log("Event was cancelled or invalid input.");
  }

  console.log("Scores after HighJump:", score);

  callback(AwardCeremony);
}

// Award Ceremony
function AwardCeremony() {
  console.log("Final Scores:", score);
  const sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);

  console.log("Award Ceremony ");
  if (sorted[0]) console.log(`1st Place: ${sorted[0][0]} with ${sorted[0][1]} points`);
  if (sorted[1]) console.log(`2nd Place: ${sorted[1][0]} with ${sorted[1][1]} points`);
  if (sorted[2]) console.log(`3rd Place: ${sorted[2][0]} with ${sorted[2][1]} points`);
}

// Start of event
OpeningCeremony(Race100M);
