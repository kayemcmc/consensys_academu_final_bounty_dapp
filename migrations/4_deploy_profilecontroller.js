const ProfileController = artifacts.require('./ProfileController.sol')
const UserProfile = artifacts.require('./UserProfile.sol')
const AddressManager = artifacts.require('./AddressManager.sol')

module.exports = (deployer) => {

  deployer.deploy(ProfileController)
  .then(() => {
    return ProfileController.deployed()
  })
  .then(profileCtrl => {
    profileCtrl.setManagerAddress(AddressManager.address) 

    return Promise.all([
      AddressManager.deployed(),
      UserProfile.deployed(),
    ])
  })
  .then(([manager, storage]) => {
    return Promise.all([
      manager.setAddress("ProfileController", ProfileController.address),
      storage.setControllerAddress(ProfileController.address),
    ])
  })

} 