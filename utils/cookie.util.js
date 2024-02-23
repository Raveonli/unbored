const envConfig = require("../config");
module.exports.options = {
  httpOnly: true,
  secure: true,
  sameSite: "strict",
  domain: envConfig.originUrl,
};
