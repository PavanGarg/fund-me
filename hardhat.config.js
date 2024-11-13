require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy")
require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-ethers")

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork : "hardhat",
  solidity: {
    compilers : [{version : "0.8.7"},{version :"0.6.0"}]
  },
  gasReporter:{
    enabled : true,
    outputFile : "gas-Report.text",
    noColors : true,
    currency : "USD",
    // coinmarketcap : COINMARKETAPI_KEY
  },
  networks:{
    localhost:{
      url : "http://127.0.0.1:8545/",
      chainId : 31337
    }
  },
  namedAccounts :{
    deployer:{
      default : 0
    },
    user :{
      default : 1
    }
  }
};
