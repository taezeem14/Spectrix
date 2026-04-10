const { handleLeaderboardTop } = require('../_lib/spectrix');

module.exports = async function handler(req, res) {
  return handleLeaderboardTop(req, res);
};
