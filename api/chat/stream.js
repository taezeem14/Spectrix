const { handleChatStream } = require('../_lib/spectrix');

module.exports = async function handler(req, res) {
  return handleChatStream(req, res);
};
