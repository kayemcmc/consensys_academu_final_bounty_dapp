pragma solidity ^0.4.24;

import './ControllerManager.sol'; //base
import './AddressManager.sol'; //contract manager
import './UserProfile.sol';

contract ProfileController is ControllerManager {

    function createUser(
        bytes32 _username, 
        string _firstName,
        string _lastName,
        string _email) public returns(uint _newUserId) {
      AddressManager _manager = AddressManager(managerAddress);

     address _userStorageAddress = _manager.getAddress("UserProfile");

     UserProfile _userProfile = UserProfile(_userStorageAddress); 

        require(_userProfile.addresses(msg.sender) == 0);
        require(_userProfile.usernames(_username) == 0);
        
        return _userProfile.createUser(
            msg.sender,
            _username,
            _firstName,
            _lastName,
            _email);
   }
}