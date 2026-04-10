const { handleGithubChat } = require('./_lib/spectrix');

module.exports = async function handler(req, res) {
  return handleGithubChat(req, res);
};
