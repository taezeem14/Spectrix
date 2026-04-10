const { handleHfVideo } = require('../_lib/spectrix');

module.exports = async function handler(req, res) {
  return handleHfVideo(req, res);
};
