const Axios = require("axios");

exports.API = (apiKey) => {
  const axios = new Axios.Axios({ baseURL: "https://api.etherscan.io/api" });

  const get = (module, action, address) =>  axios
    .get(`?module=${module}&action=${action}&address=${address}&apikey=${apiKey}`)
    .then(parser);

  const parser = (r) => {
    return JSON.parse(JSON.parse(r.data).result);
  } 
  return {
    getAbi: (address) => get("contract", "getabi", address),
    getCode: (address) => get("contract", "getsourcecode", address)
  };
};
