// const HDWalletProvider = require('@truffle/hdwallet-provider');


// module.exports = {
//   networks: {
//     polygon: {
//       provider: () => new HDWalletProvider("pull timber april habit rice fitness ecology ordinary eyebrow chronic peasant under", `https://polygon-mumbai.g.alchemy.com/v2/W971fjwv7ZWQ7KJBC3QZA9W0UxXi1SDT`),
//       network_id: 80001, // Polygon Mainnet network ID
//       gasPrice: 8000000000, // Adjust the gas price as per your needs
//       gas: 5000000, // Adjust the gas limit as per your contract requirements
//       confirmations: 2, // Number of confirmations for a transaction to be considered successful
//       timeoutBlocks: 200, // Number of blocks before a deployment times out
//       skipDryRun: true // Skip the dry run before migrations (optional)
//     }
//   },
//   compilers: {
//     solc: {
//       version: '0.8.13', // Specify your Solidity compiler version here
//       settings: {
//         optimizer: {
//           enabled: true,
//           runs: 200
//         }
//       }
//     }
//   },
//   plugins: [
//     'truffle-plugin-verify'
//   ],
//   api_keys: {
//     polygonscan: "D69YXVM37SY1E71RAIR1PPTJQJ4EKNMRR8" // PolygonScan API key
//   }
// };


const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
networks: {
development: {
host: "127.0.0.1", // Localhost (default: none)
port: 8545, // Standard Ethereum port (default: none)
network_id: "*", // Any network (default: none)
},
matic: {
provider: () => new HDWalletProvider("pull timber april habit rice fitness ecology ordinary eyebrow chronic peasant under", `https://polygon-mumbai.g.alchemy.com/v2/W971fjwv7ZWQ7KJBC3QZA9W0UxXi1SDT`),

network_id: 80001,
confirmations: 2,
timeoutBlocks: 200,
skipDryRun: true
},
},

// Set default mocha options here, use special reporters etc.
mocha: {
// timeout: 100000
},
plugins: [
  'truffle-plugin-verify'
],
api_keys: {
  polygonscan: "D69YXVM37SY1E71RAIR1PPTJQJ4EKNMRR8" // PolygonScan API key
},

// Configure your compilers
compilers: {
solc: {
version: "0.8.13",
}
}
}