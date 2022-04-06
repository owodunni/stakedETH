require("dotenv").config();
const { Contract } = require("./contract");

const c = Contract(process.env.INFURA, process.env.ETHERSCAN);

const addresses = {
  rplDespositPool: "0x4D05E3d48a938db4b7a9A59A802D5b45011BDe58",
};

async function main() {
  const contract = await c.create(addresses.rplDespositPool);
  console.log(contract);
}

main().then(() => process.exit(0));
