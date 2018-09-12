import getWeb3 from "../utils/getWeb3";
import Web3File from "../web3";
import contract from "truffle-contract";
import UserProfile from "../../build/contracts/UserProfile.json";
import ProfileController from "../../build/contracts/ProfileController.json";

export const WEB3_CONNECTED = "WEB3_CONNECTED";
export const WEB3_DISCONNECTED = "WEB3_DISCONNECTED";
export const WEB3_ACCOUNT = "WEB3_ACCOUNT";
export const BOUNTIES_CONTRACT_INSTANTIATED = "BOUNTIES_CONTRACT_INSTANTIATED";
export const PROFILE_CONTRACT_INSTANTIATED = "PROFILE_CONTRACT_INSTANTIATED";

//user
export const CURRENT_USER_INFO = "CURRENT_USER_INFO ";

export function storeWeb3Account() {
  return async (dispatch, getState) => {
    const accounts = await Web3File.eth.getAccounts();
    console.log("my account", accounts);
    dispatch({ type: WEB3_ACCOUNT, payload: accounts[0] });
  };
}

export function instantiateProfileContract() {
  return async (dispatch, getState) => {
    const profile = contract(UserProfile);
    profile.setProvider(Web3File.currentProvider);
    let profileContract = await profile.deployed().then(profilecontract => {
      return profilecontract;
    });

    const profileController = contract(ProfileController);
    profileController.setProvider(Web3File.currentProvider);
    let profileControllerContract = await profileController
      .deployed()
      .then(profilecontrollercontract => {
        return profilecontrollercontract;
      });

    // dispatch
    dispatch({
      type: PROFILE_CONTRACT_INSTANTIATED,
      payload: {
        isloaded: true,
        profileContract: profileContract,
        profileControllerContract: profileControllerContract
      }
    });
  };
}
