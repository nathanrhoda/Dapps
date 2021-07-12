// connecting to local ganache instance
// npm install -g ganache-cliganach

var Web3 = require('Web3');

var url = 'http://127.0.0.1:7545';

var web3 = new Web3(url);

web3.eth.getAccounts().then(accounts=>{console.log(accounts)});