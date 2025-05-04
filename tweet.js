const { TwitterApi } = require('twitter-api-v2');
const fs = require('fs');

// Read the tweet message from a file
const message = fs.readFileSync('./tweet.txt', 'utf8').trim();

// Twitter credentials
const client = new TwitterApi({
  appKey: 't51mbADghMI5aIjnExjSVHkjh',
  appSecret: 'XnX0Es9VoPsD4h69jbzfTMnsMPnkj3Y8CPFMO9eYPTO1J0BgBe',
  accessToken: '1765749223352340480-JaeHOLqRUj4Si1eyiWhpAEVTKRn87X',
  accessSecret: 'UDBoUzHrwaxxfvVxaIGNuaDs3XPIwNZTPCxeT14W2PQJY',
});

async function postTweet() {
  try {
    const tweet = await client.v2.tweet(message);
    console.log('✅ Tweet posted:', tweet.data.text);
  } catch (error) {
    console.error('❌ Error posting tweet:', error);
  }
}

postTweet();
