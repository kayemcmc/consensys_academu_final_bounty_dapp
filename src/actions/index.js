import getWeb3 from "../utils/getWeb3";
import contract from "truffle-contract";
import UserProfile from "../../build/contracts/UserProfile.json";
import ProfileController from "../../build/contracts/ProfileController.json";

export const WEB3_CONNECTED = "WEB3_CONNECTED";
export const WEB3_DISCONNECTED = "WEB3_DISCONNECTED";
export const WEB3_ACCOUNT = "WEB3_ACCOUNT";
export const BOUNTIES_CONTRACT_INSTANTIATED = "BOUNTIES_CONTRACT_INSTANTIATED";

//user
export const CURRENT_USER_INFO = "CURRENT_USER_INFO ";

export function storeWeb3Account() {
  return async (dispatch, getState) => {
    const accounts = await getWeb3.eth.getAccounts();
    console.log("my account", accounts);
    dispatch({ type: WEB3_ACCOUNT, payload: accounts[0] });
  };
}
