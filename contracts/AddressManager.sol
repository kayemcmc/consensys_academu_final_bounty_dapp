pragma solidity ^0.4.24;

import './Owned.sol';


/*
    * @dev Creates a contract manager contract to keep track of all addresses
    * @param controllerAddress
    * 
   */ 

contract AddressManager is Owned {
  mapping (string => address) addresses;

  function setAddress(string _name, address _address) public onlyOwner {
    addresses[_name] = _address; 
  }

  function getAddress(string _name) public view returns (address) {
    return addresses[_name];
  }

  function deleteAddress(string _name) public onlyOwner {
    addresses[_name] = address(0);
  }

}