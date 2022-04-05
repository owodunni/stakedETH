const { API } = require("./etherscan");
const Web3 = require("web3");

exports.Contract = (RPC_NODE, API_KEY) => {
  const etherscan = API(API_KEY);
  const web3 = new Web3(RPC_NODE);
  return {
    web3: web3,
    create: async (address) => {
      const abi = await etherscan.getAbi(address);
      return new web3.eth.Contract(abi, address);
    },
  };
};
