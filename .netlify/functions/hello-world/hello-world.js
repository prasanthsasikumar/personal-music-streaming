const { Root } = require('postcss');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  const listContent = require('list-github-dir-content');
  const filesArray = await listContent.viaTreesApi({
    user: 'prasanthsasikumar',
    repository: 'personal-music-streaming',
    directory: 'static/songs',
    token: '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'
  });
  try {
    const subject = event.queryStringParameters.name || 'World'
    console.log(filesArray);
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
