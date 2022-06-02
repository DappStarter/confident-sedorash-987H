require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi office spot edge rescue spawn purpose grace casino symptom seek'; 
let testAccounts = [
"0xb5329e555d5a79ed1391915e2912ff09fb53ad7d6f8b056ddff86ee8d708772e",
"0xb5eff57f6c05515512e26193991ce969fcaf3f8a72e7b8017b59b8f4335f8f6c",
"0xe19e9a9f73ed04f3678448cb8077109b604656dcfa7364cf1cfa09dd297973e1",
"0x2deac54f8846a3a2a9c7acb8b01811a1faa75c06471c31c3eac03c467653fbbe",
"0x76e264fa65e2a08a4cb473799e9d97b7187d17918ee4ea62c097e8c350ae527a",
"0xc9a6990ffe9282a5a6c3c3349de0443373516037f62a71e55454c53ce3204d95",
"0x4b40fa8805dbdd09b0aa4c5e45e47728ed8563d5fcf40a59a5e02f21307491da",
"0x3a99fae1d5299ef268942330cf16987149bc09e56fbeb3625a1e91a12219334d",
"0x070395fab39c529cea65c740fa566ed8cf43691d37de7be149d873dc0110adfa",
"0x73cd9541a812fd4e5c6b40ab7649cd68822d4adfc52bc52417e8fac507f446c9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

