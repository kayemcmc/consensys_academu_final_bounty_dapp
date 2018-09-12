import {
    WEB3_CONNECTED,
    BOUNTIES_CONTRACT_INSTANTIATED,
    WEB3_ACCOUNT
} from '../actions';

const defaultState = {
    account: '',
    contracts: {
        isLoaded: false,
        bountyContract: ''
    }
}

const bounty = (state = defaultState, action) => {
    switch(action.type){
        case WEB3_CONNECTED:
        return {
            ...state,
            web3: action.payload
        };
        case BOUNTIES_CONTRACT_INSTANTIATED:
        return {
            ...state,
            contracts: action.payload
        };
        case WEB3_ACCOUNT:
        return {
            ...state,
            account: action.payload
        };
        default:
        return state
    }
}

export default bounty;