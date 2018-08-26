pragma solidity ^0.4.24;

import './Owned.sol';
/*
    * @dev Create a controllerAddres for enforcing msg.sender as controller
    * @param controllerAddress
    * 
   */    
contract Storage is Owned {
  address public controllerAddress;
  /*
    * modifier
  */
  modifier onlyController() {
    require(msg.sender == controllerAddress);
    _;
  }

  function setControllerAddress(address _controllerAddress) public onlyOwner  {
    controllerAddress = _controllerAddress; 
  }
}