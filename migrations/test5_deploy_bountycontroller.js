const BountyController = artifacts.require('./BountyController.sol')
const Bounties = artifacts.require('./Bounties.sol');
const AddressManager = artifacts.require('./AddressManager.sol')

module.exports = (deployer) => {

  deployer.deploy(BountyController)
  .then(() => {
    return BountyController.deployed()
  })
  .then(bountyCtrl => {
    bountyCtrl.setManagerAddress(AddressManager.address) 

    return Promise.all([
      AddressManager.deployed(),
      Bounties.deployed(),
    ])
  })
  .then(([manager, storage]) => {
    return Promise.all([
      manager.setAddress("BountyController", BountyController.address),
      storage.setControllerAddress(BountyController.address),
    ])
  })

} 