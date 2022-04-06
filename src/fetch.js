require("dotenv").config();
const { API } = require("./etherscan");

const api = API(process.env.ETHERSCAN)

exports.fetch = (address) => {
  return api.getCode(address);
}
