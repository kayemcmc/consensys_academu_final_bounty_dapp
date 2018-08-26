pragma solidity ^0.4.24;

import './Owned.sol';
/*
    * @dev Sets managerAddress variable using the managerAddress function
    * @param managerAddress
    * 
   */  

contract ControllerManager is Owned {
   // The Contract Manager's address
  address managerAddress;

  function setManagerAddress(address _managerAddress) public onlyOwner {
    managerAddress = _managerAddress; 
  }

}