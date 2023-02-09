require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/u7KtXLjgq9fn6kHJdCGM5-CI6GS2Qn3l',
      accounts: ['e64b41cf8084f93a2ac1f8cd21fd23215f917022763bc41b42199a97de88caea'],
    },
  },
};
