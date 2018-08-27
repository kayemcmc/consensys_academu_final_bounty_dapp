## Design Patterns Used

Restricting Access  

Restricted access to the profile owner. Used this pattern via a modifier onlyOwner.
```solidity
modifier onlyOwner {
  require(msg.sender == owner);
}
```

Implemented a transferOwnership function in case there is a need to change owner at some point in the future. 
Added require to the functions functions to make sure that only the owner can call this function.

```solidity
 function transferOwnership(address _newOwner) public onlyOwner {  
    // The new address cannot be null:
    require(_newOwner != address(0));
    ownerAddress = _newOwner;
}
```


Implemented a setControllerAddress function, so only the owner of the profile is able to make updates to his profile

```solidity
 function setControllerAddress(address _controllerAddress) public {
    controllerAddress = _controllerAddress; 
  }
  
```
  
