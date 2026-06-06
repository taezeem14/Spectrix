const { handleOcrRequest } = require('./_lib/spectrix');

module.exports = async function handler(req, res) {
  return handleOcrRequest(req, res);
};
