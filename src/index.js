require("dotenv").config();
const { Contract } = require("./contract");

const c = Contract(process.env.INFURA, process.env.ETHERSCAN);

c.create("0x72f16fC988C50Ec63bf73000f325F5f3c675F007")
  .then(console.log)
  .then(() => process.exit(0));
