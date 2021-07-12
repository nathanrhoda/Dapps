// Connecting web3 to infura

var Web3 = require('web3');
var url = 'https://mainnet.infura.io/v3/ff014665f62244809c61538e8ccf9f85'
var rinkurl = 'https://rinkeby.infura.io/v3/ea09cb27a7824d06ae896e3b7c27f484'
var web3 = new Web3(url)


var address = '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'

// Get Balance
web3.eth.getBalance(address, (err, bal)=> {balance = bal})




web3.eth.getBalance('0x639eB9164E65dE52a958E833f1E9857BC3d85E40', (err, bal)=> {balance = bal})


//convert to ether from wei
web3.utils.fromWei(balance, 'ether')

//get transactionaccount for EOA account
web3.eth.getTransactionCount(address).then(console.log);


// get abi & contract address from etherscan erc top 20 tokens
var contract = web3.eth.Contract(abi, contractaddress)
// for token name
contract.methods.name().call((err, result)=>{console.log(result)})