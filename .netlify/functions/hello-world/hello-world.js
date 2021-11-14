const { Root } = require('postcss');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  const listContent = require('list-github-dir-content');
  const filesArray = await listContent.viaTreesApi({
    user: 'prasanthsasikumar',
    repository: 'personal-music-streaming',
    directory: 'static',
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
