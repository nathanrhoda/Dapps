// Remember to update nonce when submitting another transaction
/*##########################

CONFIGURATION
##########################*/

// -- Step 1: Set up the appropriate configuration 
var Web3 = require("web3") 
const EthereumTransaction = require("ethereumjs-tx").Transaction 
var web3 = new Web3('HTTP://127.0.0.1:7545')

// -- Step 2: Set the sending and receiving addresses for the transaction. 
var sendingAddress = '0x4786927573715F303250441c7997013BAB096542' 
var receivingAddress = '0xB0308b331bD4Fb055C91EE36dC00B461E0986685'

// -- Step 3: Check the balances of each address 
web3.eth.getBalance(sendingAddress).then(console.log) 
web3.eth.getBalance(receivingAddress).then(console.log)

/*##########################

CREATE A TRANSACTION
##########################*/

// -- Step 4: Set up the transaction using the transaction variables as shown 
var rawTransaction = { 
    nonce: web3.utils.toHex(0), 
    to: receivingAddress, 
    gasPrice: web3.utils.toHex(20000000), 
    gasLimit: web3.utils.toHex(30000), 
    value: web3.utils.toHex(1), 
    data: web3.utils.toHex("") 
}

// -- Step 5: View the raw transaction rawTransaction

// -- Step 6: Check the new account balances (they should be the same) 
web3.eth.getBalance(sendingAddress).then(console.log) 
web3.eth.getBalance(receivingAddress).then(console.log)

// Note: They haven't changed because they need to be signed...

/*##########################

Sign the Transaction
##########################*/

// -- Step 7: Sign the transaction with the Hex value of the private key of the sender 
var privateKeySender = 'f6b4dde396c1211be0eb81e53a7c54b332e60e32063ed1cf5cb0120ec9f7487f' 
var privateKeySenderHex = new Buffer(privateKeySender, 'hex') 
var transaction =  new EthereumTransaction(rawTransaction) 
transaction.sign(privateKeySenderHex)

/*#########################################

Send the transaction to the network
#########################################*/

// -- Step 8: Send the serialized signed transaction to the Ethereum network. 
var serializedTransaction = transaction.serialize(); 
web3.eth.sendSignedTransaction(serializedTransaction);