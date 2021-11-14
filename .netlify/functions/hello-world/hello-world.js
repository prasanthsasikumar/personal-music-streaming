const { Root } = require('postcss');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  const fs = require('fs');
  const path = require('path');
  const ROOT = path.join( __dirname, '../../../' );
  try {
    const subject = event.queryStringParameters.name || 'World'
    console.log(ROOT);
    const filenames = fs.readdirSync(path.resolve(ROOT,'static/songs'));
    return {
      statusCode: 200,
      body: JSON.stringify({ songs: filenames}),
      //body: JSON.stringify({ songs: `Hello ${subject}` + filenames}),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
