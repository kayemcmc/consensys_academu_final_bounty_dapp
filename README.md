<h1 align="center">
	<img
		width="900"
		alt="Bounty dApp"
		src="https://gallery.mailchimp.com/fee238bfe84b47c290a863338/images/c6a9c0e3-597e-4087-ba5c-381acf728271.png">
</h1>

<h3 align="center">
	Bounty dApp Consensys Academy Final Project
</h3>

## Background

Decentralized Bounty dApp will recognize the users current account if Metamask activated in the broser, the user has the option to create a profile, while this method has a transaction cost the user profile will have an added layer of authentication. If the user registration was successful a pop up confirming the transaction is shown. 

Contract feautures, the user can post a bounty title and price, a bounty ninja can present a solution to the bounty, the user who created the bounty can approve the bounty and release the funds.


## Development setup

```
git clone https://github.com/kayemcmc/consensys_academu_final_bounty_dapp
cd consensys_academu_final_bounty_dapp
npm install
```
### Prerequisites

Bounty dApp requires nodejs, npm or yarn, and truffle. The dApp is configured to use ganache-cli as a test blockchain

### Recommended Steps for running the dApp

Launch Ganache
Ensure that Ganache is set to use port 7545

If Ganache is using another port, click on the settings button on the top right, modify the port to 7545, then save and restart Ganache


```
cd consensys_academu_final_bounty_dapp
truffle compile
truffle migrate
```

The fontend was created with react and it is configured to run with webpack-dev-server, to run the front end:

```
npm start

```

The dApp will open on http://localhost:3000/

If the installation was successful you should see the homepage on the dApp in addition you will see your active address

<h1 align="center">
	<img
		width="900"
		alt="Bounty dApp"
		src="https://gallery.mailchimp.com/fee238bfe84b47c290a863338/images/5fd2a0f9-5f10-43f3-a325-83115f8b00e1.png">
</h1>


## Running the tests

In order to run the tests, use the below command:

```
truffle tests
```

## Acknowledgements
The front end needs more love, the bounty form can fetch bounty's but the create bounty button is not calling the solidity function correctly, I plan to fix this after grading, and the available bounties need to be wired in the bounties view.



