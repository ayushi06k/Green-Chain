require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    // For local development
    hardhat: {
      // Default hardhat network settings
    },
    // If you want to use a different port for your local node
    localhost: {
      url: "http://127.0.0.1:8546", // Using a different port to avoid conflicts
    }
  }
};