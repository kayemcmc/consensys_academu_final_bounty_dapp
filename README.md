<h1 align="center">
	<img
		width="800"
		alt="Bounty dApp"
		src="https://gallery.mailchimp.com/fee238bfe84b47c290a863338/images/c6a9c0e3-597e-4087-ba5c-381acf728271.png">
</h1>

<h3 align="center">
	Bounty dApp Consensys Academy Final Project
</h3>

## Background

Decentralized Bounty dApp will recognize the users current account if Metamask is an active browser extension, the user has the option to create a profile, while this method has a transaction cost the user profile will have an added layer of authentication. If the user registration was successful a pop up confirming the transaction is shown. 

Contract feautures, the user can post a bounty titje and price, a bounty ninja can present a solution to the bounty, the user who created the bounty can approve the bounty and release the funds.


The arbitration process happens by randomly selecting and arbitrator from a pre-approved list, using an api call made by Oraclize, and enabling them to settle the dispute.

## Development setup

```
git clone http://github.com/
cd 
npm install
```
### Prerequisites

Bounty dApp requires nodejs, npm or yarn, and truffle. The dApp is configured to use ganache-cli as a test blockchain

### Recommended Steps for running the dApp

Launch Ganache
Ensure that Ganache is set to use port 7545

If Ganache is using another port, click on the settings button on the top right, modify the port to 7545, then save and restart Ganache


```
cd 
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
		width="800"
		alt="Bounty dApp"
		src="https://gallery.mailchimp.com/fee238bfe84b47c290a863338/images/5fd2a0f9-5f10-43f3-a325-83115f8b00e1.png">
</h1>


## Running the tests

In order to run the tests, use the below command:

```
truffle tests
```

## Acknowledgements
The front end functionality of the create a bounty is still ina
