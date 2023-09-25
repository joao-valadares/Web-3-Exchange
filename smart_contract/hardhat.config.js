//https://eth-sepolia.g.alchemy.com/v2/d7hmqKAq1qPfUeFthU1M2UiNLwGigZDi

require("@nomiclabs/hardhat-waffle");


module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/d7hmqKAq1qPfUeFthU1M2UiNLwGigZDi",
      accounts: ['7ed5152f06c66d6829fe70c2a0221dec98fe2f874e398e2af60f13041039c428']
    }
  }
};
