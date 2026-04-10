const { handleHfImage } = require('../_lib/spectrix');

module.exports = async function handler(req, res) {
  return handleHfImage(req, res);
};
