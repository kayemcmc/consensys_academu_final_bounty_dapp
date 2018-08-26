
pragma solidity ^0.4.24;

/*
    * @dev Creates Owned contract only the current owner can set a new ownerAddress and set it securely
    * @param controllerAddress
    * 
   */ 
contract Owned {
  address public ownerAddress;

  constructor() internal {
    ownerAddress = msg.sender;
  }
   /*
    * Modifiers
    */
  modifier onlyOwner() {
    require(msg.sender == ownerAddress);
    _;
  }
  function transferOwnership(address _newOwner) public onlyOwner {
    
    // The new address cannot be null:
    require(_newOwner != address(0));

    ownerAddress = _newOwner;

  }
}