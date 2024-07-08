console.log("\n=======================================");
console.log("==== Nonsensical Joke Generator 🤡 ====");
console.log("=======================================\n");

const joke = {
  questionStart: [
    "Why don't scientists",
    "Why don't skeletons",
    "Why do flamingos",
    "Why do mermaids",
    "Why don't cannibals",
    "Why don't runners",
  ],
  action: [
    "trust atoms",
    "fight each other",
    "always lift one leg while standing",
    "trust a burrito",
    "wear seashells",
    "eat clowns",
    "eat before a race",
  ],
  answerJokes: [
    "Because they make up everything!",
    "They don't have the guts.",
    "Because if they lifted both legs they'd fall over.",
    "They tend to spill the beans!",
    "Because they grew out of their B shells.",
    "Because they taste funny.",
    "They fast.",
  ],
  getNonSensceJoke() {
    const randomQuestionStartIndex = Math.floor(
      Math.random() * this.questionStart.length
    );
    const randomActionIndex = Math.floor(Math.random() * this.action.length);
    const randomAnswerIndex = Math.floor(
      Math.random() * this.answerJokes.length
    );
    return `${this.questionStart[randomQuestionStartIndex]} ${this.action[randomActionIndex]}? ${this.answerJokes[randomAnswerIndex]} 🤣\n`;
  },
};

console.log(joke.getNonSensceJoke());
