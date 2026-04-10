const { handleLeaderboardSubmit } = require('../_lib/spectrix');

module.exports = async function handler(req, res) {
  return handleLeaderboardSubmit(req, res);
};
