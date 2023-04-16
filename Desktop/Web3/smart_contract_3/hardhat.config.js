require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.7.3",
  networks: {
    hardhat: {
      // ...
    },
    localhost: {
      // ...
    }
  },
  etherscan: {
    apiKey: "YOUR_ETHERSCAN_API_KEY"
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};

