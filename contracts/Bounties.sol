pragma solidity ^0.4.24;

import "../libraries/SafeMath.sol";
import './Storage.sol';

/// @title Bounties Contract as final project for Consensys Academy 2018
/// @author Karen Posada

contract Bounties is Storage {
  
   using SafeMath for uint256;
   enum State { Open, Closed}
   // Circuit Breaker
	bool private stopped = false;
	
  /*
   * Bounty Struct
   */
  struct Bounty {
      uint bountyId;
      address bountyOwner;
      string data;
      uint256 reward;
      State bountyState;
  }

  /*
   * Storage
   */
    //bounties => list of all bounties
    //Bounty[] public bounties;
    mapping (uint => Bounty) public bounties;
    uint public newBountyId;
    
   /*
   * Cicuit Breaker Modifier
   */
  modifier stopInEmergency { require(!stopped); _; }
   
    /*
   * Events
   */
    event BountyIssued(uint _bountyId);
    event BountyActivated(uint _bountyId, address _bountyOwner);
   
      /*
   * Modifiers
   */

    modifier rewardIsNotZero(uint256 _reward) {
      require(_reward != 0);
      _;
  }
  
  function createBounty(
      address _bountyOwner,
      string memory _data, 
      uint256 _reward
      ) 
      public
      payable
      rewardIsNotZero(_reward) 
      {
      bounties[newBountyId] = Bounty(
          newBountyId,
          _bountyOwner,
          _data,
          _reward,
          State.Open
          );
       newBountyId += 1;
        
  }
  
   function closeBounty(uint _bountyId) public {
        bounties[_bountyId].bountyState = State.Closed;
    }


   /// Bounty Solutions ///

   /*
   * Bounty Solution Struct
   */
     struct BountySolution {
         address bountyNinja;
         string solution;
         uint ninjaId;
         uint bountyId;
     }
  
     struct AllNinjas {
         uint solutionId;
         mapping(uint => BountySolution) solutions;
     }
//     //this mapping will retrieve solution by ID
     mapping (uint => AllNinjas) public solutions;
    

  
   function claimBounty(uint _bountyId, string _solution, address _bountyNinja) public returns(uint) {
        uint ninjaId = solutions[_bountyId].solutionId;
         solutions[_bountyId].solutions[ninjaId] = BountySolution(
          _bountyNinja,
          _solution,
           ninjaId,
          _bountyId
          );
   
        solutions[_bountyId].solutionId = ninjaId + 1;
        return solutions[_bountyId].solutionId;
    }

  
}
     
     