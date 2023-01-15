import emoji from 'node-emoji';

// initiate user input value
const pickEmoji = process.argv[2];

// if pickEmoji true return random emoji
if (pickEmoji === undefined) {
  console.log(emoji.random('').emoji);
  // else if node-emoji has user input emoji console log picked emoji
} else if (emoji.hasEmoji(pickEmoji)) {
  console.log(emoji.get(pickEmoji));
} else {
  // else error
  console.log('This emoji does not exist!');
}
