import React, { Component } from 'react'
import UserProfile from '../../build/contracts/UserProfile.json'
import ProfileController from '../../build/contracts/ProfileController.json'
import getWeb3 from '../utils/getWeb3'
import { Card, Col, Row, Icon, Avatar, Button, Input, Form } from 'antd'
import{withRouter} from 'react-router-dom';

const FormItem = Form.Item;
const { Meta } = Card;
 class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userInstance: null,
            profileControllerInstance: null,
            firstName: '',
            lastName: '',
            userName: '',
            email: '',
            accounts:'',
            id: ''
        }
    }
    async componentWillMount() {
        // Get network provider and web3 instance.
        // See utils/getWeb3 for more info.
        try {
          const results = await getWeb3;
          this.setState({ web3: results.web3 });
          this.instantiateUserContract();
        } catch (e) {
          console.error(e);
        }
      }
   
    
      async instantiateUserContract() {
        /*
         * SMART CONTRACT EXAMPLE
         *
         * Normally these functions would be called in the context of a
         * state management library, but for convenience I've placed them here.
         */
    
        const contract = require('truffle-contract')
        const userContract = contract(UserProfile)
        const profileController = contract(ProfileController)
        userContract.setProvider(this.state.web3.currentProvider);
        profileController.setProvider(this.state.web3.currentProvider);
       
        const userInstance = await userContract.deployed();
        const profileControllerInstance = await profileController.deployed();
        const accounts = this.state.web3.eth.accounts;
            this.setState({
                userInstance,
                profileControllerInstance,
                accounts
            })
        
      }

      async createUser(...params) {
        const controller = await this.state.profileControllerInstance
        const addresses = await this.state.accounts
      
        const result = await controller.createUser(
          ...params,
        {
          from: this.state.accounts[0],
        })
      
        return result
      }

   
    handleCreateUser = async (e) => {
      e.preventDefault();
      //Some quick validation checks
    for (let key in this.state) {
      if (!this.state[key]) {
        return alert(`You must fill in your ${key}!`)
      }
      const { firstName, lastName, userName, email } = this.state
     
      try {
        // Open the MetaMask modal:
        await this.createUser(userName, firstName, lastName, email)
        //alert("Your user has been created!")
      } catch (err) {
       // alert(`Sorry, we couldn't create your user: ${err}`)
        console.log(err)
      }
    }
    this.props.history.push('/');
  }
   
   handleUser = async () => {
       const userInfo = await this.getUserInfo(1)
       console.log(userInfo)
   }

   updateField = (fieldName, e) => {
    const newState = {}
    newState[fieldName] = e.target.value

    this.setState(newState)
  }

  render() {
    console.log(this.state.accounts)
    return (
        <div style={{ background: '#e7edfd', padding: '15px' }}>
        <Row gutter={16}>
        <Col span={24}>
      
        </Col>
        </Row>
        <Row>
          <Col span={8} style={{textAlign: 'center'}}>
                <Card
         
          cover={<img alt="example" src="https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png" />}
          
        >
      
        </Card>
      
          </Col>
          
          <Col span={16} style={{textAlign: 'center'}}>
                <Card style={{height: '100vh'}}>
                <br/><br/>
                <h1 >Your Account Details:</h1>
              <h2 className="welcome-message">  Address: <span style={{color: '#333'}}>{this.props.account}</span><br/><br/><br/>
               Create a Profile to Gain Access to More Feautures (Optional) </h2>
                <Form >
					<FormItem
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 16 }}
            label="First Name"
          > 
                <Input 
              
              onChange={e => this.updateField("firstName", e)}
              placeholder="Please enter your first Name" 
              />
            </FormItem>
          	<FormItem
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 16 }}
            label="Last Name"
          > 
               <Input 
              type="text"  
             
              onChange={e => this.updateField("lastName", e)}
              placeholder="Please enter your  last name" 
              />
          </FormItem>   
          	<FormItem
            label="Username"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 16 }}
          > 
              <Input 
              type="text"  
              onChange={e => this.updateField("userName", e)}
              placeholder="Please Enter a Username" 
              />
          </FormItem>
          	<FormItem
            label="Email"
            labelCol={{ span: 5 }}
            wrapperCol={{ span: 16 }}
          > 
              <Input 
              type="text"  
              onChange={e => this.updateField("email", e)}
              placeholder="Please enter your email" 
              />
          </FormItem>
          <Button className="primary" onClick={this.handleCreateUser}>Create User</Button>
          </Form>
              
        </Card>
      
          </Col>
          
        </Row>
      </div>
    )
  }
}

export default withRouter(Profile);
