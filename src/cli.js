#!/usr/bin/env node
doc = `
Usage:
  ethscan fetch <address> [--output=<file>]
`
const {docopt} = require("docopt");
const {fetch} = require("./fetch");

const arguments = docopt(doc, {
  version: "0.1.0"
});

let action = null;
if(arguments.fetch && arguments["<address>"]) {
  action = fetch(arguments.address);
}else {
  throw `No valid actions found in ${JSON.stringify(arguments)}`;
}
action.then(console.log).then(()=> process.exit(0));
