
const UserProfile = artifacts.require('./UserProfile.sol');
const ProfileController = artifacts.require('./ProfileController.sol');

const utils = require('./utils')
const { assertVMException } = utils


//It cant create a user without controller
contract('UserProfile', () => {
 
  it("can't create user without controller", async () => {
    const storage = await UserProfile.deployed()

    try {
      await storage.createUser(
        0x0,
        "profile",
        "Karen",
        "Posada",
        "me@me.com")
      assert.fail()
    } catch (err) {
      assertVMException(err);
    }
  });
  //test the writable function of create a user   that changes the state of the contract
//this is an integration test
  it("can create user with controller", async () => {
    const controller = await ProfileController.deployed()

    const user = await controller.createUser(
      "profile",
      "Karen",
      "Posada",
     "me@me.com"
    )
    
    assert.isOk(user)
  });

  //test a call function to fetch the user by By this is a view non payable function
  it("can fetch user", async () => {
    const storage = await UserProfile.deployed()
    const userId = 1
    
    // Get the userInfo array
    const userInfo = await storage.profiles.call(userId)
    
    // Get the second element (the username)
    const username = userInfo[1]

    assert.equal(username, "profile")
  });
})