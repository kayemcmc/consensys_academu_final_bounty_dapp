import React, { Component } from 'react'
import { Form, Input, Button} from 'antd';
import { Redirect } from 'react-router-dom';
import Bounties from '../../build/contracts/Bounties.json';
import BountyController from '../../build/contracts/BountyController.json';
import getWeb3 from '../utils/getWeb3';

const FormItem = Form.Item;

class NewBountyForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        bountyInstance: null,
        bountyData: '',
        reward: 0,
        accounts: null
      }
    }
    async componentWillMount() {
      // Get network provider and web3 instance.
      // See utils/getWeb3 for more info.
      try {
        const results = await getWeb3;
        this.setState({ web3: results.web3 });
        this.instantiateBountiesContract();
      } catch (error) {
        console.error(error);
      }
    }
  
    async instantiateBountiesContract() {
      /*
       * SMART CONTRACT EXAMPLE
       *
       * Normally these functions would be called in the context of a
       * state management library, but for convenience I've placed them here.
       */
  
      const contract = require('truffle-contract')
      const bountyContract = contract(Bounties)
      const bountyController = contract(BountyController)
      bountyContract.setProvider(this.state.web3.currentProvider);
      bountyController.setProvider(this.state.web3.currentProvider);
     
      const bountyInstance = await bountyContract.deployed();
      const bountyControllerInstance = await bountyController.deployed();
      const accounts = this.state.web3.eth.accounts;
          this.setState({
              bountyInstance,
              bountyControllerInstance,
              accounts
          })
      
    }
    
    async createBountyFinal(...params) {
      const instance = await this.state.bountyInstance
    
      const result = await instance.createBounty(
        ...params,
      {
        from: this.state.accounts[0],
      })
    
      return result
    }
     handleChange = ({ 
      target: { id, value } }) => this.setState({ [id]: value });

      handleonSubmit = async () => {
        const { bountyData, reward } = this.state
    
        await this.createBountyFinal(bountyData, reward )
    
        alert("Your bounty was posted!")
  
      }
      // onSubmit = async (event) => {
      //  event.preventDefault();
      //  const result = await  this.state.bountyInstance.createTweet(this.state.data, this.state.reward,  {
      //   from: this.state.accounts[0],
      // })
   
      async createBountyTransaction (data) {
        const controller = await this.state.bountyInstance
        const addresses = await this.state.accounts

        const bountyInWei = this.state.web3.toWei(this.state.reward, "ether")
        const result = await controller.createBounty(
        //this.state.bountyData, bountyInWei, {from: addresses[0]}
        1,
        data,
        {from: addresses[0]},

      );
        return result
        console.log('my submited data', result);
      }

      async getBountyInfo (bountyId) {
        const storage = await this.state.bountyInstance
        const bounty = await storage.bounties.call(bountyId)
        const [id, address, data, reward, userId] = bounty
      
        // Parse the data to make it look nice:
        return {
          id: parseInt(id),
          address,
          data,
          reward: parseInt(reward),
          userId: parseInt(userId)
        }
      }

      // handlecreateBounty  = async () => {
      //   const tx = await this.createBountyTransaction("Hello world!")
      //   console.log(tx)
      // }

      handleCreateBounty = async e => {
        e.preventDefault();
        await this.state.bountyInstance.createBounty (
          this.state.bountyData,
          this.state.reward,
        )
        console.log(this.state.bountyData,
          this.state.reward,)
      }


      logBounty = async () => {
        const bountyInfo = await this.getBountyInfo(1)
        console.log(bountyInfo)
      }
    

        render() {
       
        console.log('my log', this.state.bountyInstance)
        // const redirectToPage = this.state.redirect;
        // if (redirectToPage === true) {
        //     return <Redirect to="/bounties" />
        // }
          return (
            <div style={{ background: '#f0f2f5', padding: '15px', height: '100vh' }}>
              <br/><br/><br/>
          <h1 style={{textAlign: 'center'}}>Add Your Bounty Details!</h1>
          <br/><br/><br/>
            <Form>
					<FormItem
            label="Bounty Title"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            <Input 
              type="text"  
              name="bountyData"
              value={this.state.bountyData} 
              onChange={this.handleChange}
              placeholder="Bounty Title" 
              id="bountyData"
              />
					</FormItem>
				
					<FormItem
            label="Reward in Ether"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 12 }}
          >
            <Input 
              type="number"  
              name="price"
              value={this.state.reward} 
              onChange={this.handleChange}
              placeholder="Bounty Reward"
              id="reward" />
					</FormItem>
        
          <FormItem style={{textAlign: 'center'}}>
          <Button type="primary" onClick={this.handleCreateBounty}>
            Add Bounty</Button>
            <Button type="primary" onClick={this.logBounty}>
            Console Log Bounty</Button>
        </FormItem>

				</Form>
      
        </div>
          );
  }
}

export default  NewBountyForm;