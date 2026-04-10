const { handleChatJson } = require('../_lib/spectrix');

module.exports = async function handler(req, res) {
  return handleChatJson(req, res);
};
