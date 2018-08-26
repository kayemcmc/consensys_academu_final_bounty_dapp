pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "../contracts/UserProfile.sol";

//unit test for creating a user whose expectedId equals 1

contract TestUserProfile {
  UserProfile userProfile;

  function TestUserProfile() public {
    userProfile = new UserProfile();
    userProfile.setControllerAddress(this);
  }

  function testCreateFirstUser() public {
    uint _expectedId = 1;

    Assert.equal(userProfile.createUser( 
      0x0,
      "tristan",
      "Tristan",
      "Edwards",
      "example@example.com"), _expectedId, "Should create user with ID 1");
  }

}

