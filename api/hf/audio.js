const { handleHfAudio } = require('../_lib/spectrix');

module.exports = async function handler(req, res) {
  return handleHfAudio(req, res);
};
