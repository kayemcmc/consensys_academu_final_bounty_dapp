
const Bounties = artifacts.require('Bounties')
const utils = require('./utils')
const { assertVMException } = utils

//integration test that pulls bounty with bounty data
contract('Bounties', () => {
  /*
  before(async () => {
    const bounties = await Bounties.deployed()
    await bounties.createBounty("Hello world!", 1, _userId)
  })
   */
  //integration test a bounty cant be created without a controller
  it("can't create bounty without controller", async () => {
    const storage = await Bounties.deployed()

    try {
      const tx = await storage.createBounty("Hello world!", 1, _userId)
      assert.fail();
    } catch (err) {
      assertVMException(err);
    }
  })

  it("can get bounty", async () => {
    const storage = await Bounties.deployed()

    const bounty = await storage.bounties.call(1) // Get the data
    const [data, reward, _userId] = bounty // Destructure the data

    // Check if the different parts contain the expected values:
    assert.equal(parseInt(bountyId), 1)
    assert.equal(text, "Hello world!")
    assert.equal(uint256, 1)
    assert.equal(parseInt(_userId), 1)
  })

})