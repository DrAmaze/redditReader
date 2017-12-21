require('dotenv').config();

const Snoowrap = require('snoowrap');
const Snoostorm = require('snoostorm');

const redditAuth = new Snoowrap({
  userAgent: 'streamlining-reddit-bot',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  username: process.env.REDDIT_USER,
  password: process.env.REDDIT_PASS
});

const client = new Snoostorm(redditAuth);

// Configure options for stream: subreddit & results per query
const streamOptions = {
    subreddit: 'testingground4bots',
    results: 25
};

// Create a Snoostorm CommentStream with the specified options
const comments = client.CommentStream(streamOptions);

// On comment, perform whatever logic you want to do
comments.on('comment', (comment) => {
    console.log(comment);
    if (comment.body === ':(') {
      comment.reply(':)');
    }
});
