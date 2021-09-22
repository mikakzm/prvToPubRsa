const bitcoinjs = require('bitcoinjs-lib');

const prv = '019C6D5F520BA637F71B9E0B938A7FEEF822C85D16ED6BA782B5F8AA13FC5884';
console.log(Buffer.from(prv, 'hex'));
const keyPair = bitcoinjs.ECPair.fromPrivateKey(Buffer.from(prv, 'hex'));
console.log(keyPair.publicKey.toString('hex'));
