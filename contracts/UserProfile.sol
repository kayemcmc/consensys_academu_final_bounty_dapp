pragma solidity ^0.4.24;

import './Storage.sol';

contract UserProfile is Storage {
/// @title UserProfile Contract as final project for Consensys Academy 2018
/// @author Karen Posada

  /*
   * Bounty Struct
   */
    //using bytes32 because they are much cheaper to store
    struct Profile {
        uint id;
        bytes32 username;
        string firstName;
        string lastName;
        string email;
    }
 
    /*
    * storage
    */
    //public gives us getter function so no need to write a get userbyId
    mapping(uint => Profile) public profiles;
    mapping (address => uint) public addresses; 
    mapping (bytes32 => uint) public usernames; 
    uint latestUserId = 0;

  /*
    * @dev Create a User
    * @param username
    * @param latestUserId
   */   
   function createUser(
     address _address,
     bytes32 _username,
     string _firstName,
     string _lastName,
     string _email
     ) public onlyController returns(uint _newUserId) {
    latestUserId++;  
    profiles[latestUserId] = Profile(latestUserId, _username, _firstName, _lastName, _email);

    addresses[_address] = latestUserId;
    usernames[_username] = latestUserId;

    return latestUserId;
   }

   
}