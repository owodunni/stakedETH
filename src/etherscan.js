const Axios = require("axios");

exports.API = (apiKey) => {
  const axios = new Axios.Axios({ baseURL: "https://api.etherscan.io/api" });
  return {
    getAbi: (address) =>
      axios
        .get(
          `?module=contract&action=getabi&address=${address}&apikey=${apiKey}`
        )
        .then((r) => JSON.parse(r.data))
        .then((d) => JSON.parse(d.result)),
  };
};
