var Bounties = artifacts.require("./Bounties.sol");
var UserProfile = artifacts.require("./UserProfile.sol");

module.exports = function(deployer) {
  deployer.deploy(Bounties);
  deployer.deploy(UserProfile);
};
