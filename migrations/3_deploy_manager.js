
const AddressManager = artifacts.require("./AddressManager.sol")
const UserProfile = artifacts.require("./UserProfile.sol")
const Bounties = artifacts.require("./Bounties")

module.exports = (deployer) => {
  
  deployer.deploy(AddressManager)
  .then(() => {
    return AddressManager.deployed()
  })
  .then(manager => {
    return Promise.all([
      manager.setAddress("UserProfile", UserProfile.address),
      manager.setAddress("Bounties", Bounties.address),
    ])
  })

}