require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty forget spray fine note scrub public install forget equal ghost'; 
let testAccounts = [
"0x6f189fb1ee9d8b27736a4e8c369a8be0401694d07501063cb55de7c20b64f966",
"0x7dbcb79b2b374fe87c0d2e6884a524223ccb9fe75f0d4d9ebfe9c702623b65f6",
"0x6d9d530ab83e18ce60aeb82dda2b90d8018a89bff47b09f0f679e6dbdf8d200f",
"0xb8124f137b4f7745a8251729551b0385357ae3def8cd7373f9127a3c822844af",
"0xa3f07691d477dcae209a7db998dd28d5844d184152c6bb3b8d9814ce3e8596ca",
"0xf396de98ef3f8baf3cbe747c8e46f1900f8242ec045f7d79b19ae73d26fa5e83",
"0x086bb33f50ebb1ef17eafafd48f6043bb297c4f5081a062a35d51899ce944477",
"0x20addf38d3f59ec403d8c279994d64bc0c8c0787af715ecc284624caddc2bb80",
"0x72d7e24af042fc8f5c2501ad37956b214130fca9a2d953545d02e4552f8e7f12",
"0x5a63c281b6d987f1947b47cc95eb16e70bdc1b98b8a1db2777517c90511b973b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
