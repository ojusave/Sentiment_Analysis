const readline = require('readline');
const natural = require('natural');
const classifier = new natural.BayesClassifier();

// Train the classifier with sample data
classifier.addDocument('I love this product!', 'positive');
classifier.addDocument('This is awful!', 'negative');
classifier.addDocument('The movie was great.', 'positive');
classifier.addDocument('I hate this weather.', 'negative');
classifier.train();

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt user for input sentence
rl.question('Enter a sentence to analyze the sentiment: ', (inputSentence) => {
  // Classify the input sentence
  const classification = classifier.classify(inputSentence);

  // Output the classification result
  console.log(`Input: ${inputSentence}`);
  console.log(`Sentiment: ${classification}`);

  // Close the readline interface
  rl.close();
});
