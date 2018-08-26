import React, { Component } from 'react'
import { Card, Col, Row, List, Avatar } from 'antd'
import Bounties from '../../build/contracts/Bounties.json'
import BountyController from '../../build/contracts/BountyController.json'
import getWeb3 from '../utils/getWeb3'

const data = [
  {
    title: 'Blockchain Architecture and Performance',
    description:"by 0x72627ada6c5b2097bc74de1806f3838e9966ed44",
    award: '10',
    coin: 'TRV'
  },
  {
    title: 'Blockchain Architecture and Performance',
    description:"by 0x72627ada6c5b2097bc74de1806f3838e9966ed44"
  },
  {
    title: 'Blockchain Architecture and Performance',
    description:"by 0x72627ada6c5b2097bc74de1806f3838e9966ed44"
  },
  {
    title: 'Blockchain Architecture and Performance',
    description:"by 0x72627ada6c5b2097bc74de1806f3838e9966ed44"
  },
];


 class BountiesList extends Component {
    constructor(props){
        super(props);
        this.state= {
            bountyInstance: null,
            bountyControllerInstance: null,
            accounts: [],
            bounties:{},
            solutions: {},
            bountyState : [
                "Open",
                "Closed"
            ]
        }
    }
    async componentWillMount() {
      // Get network provider and web3 instance.
      // See utils/getWeb3 for more info.
      try {
        const results = await getWeb3;
        this.setState({ web3: results.web3 });
        this.instantiateBountiesContract();
      } catch (e) {
        console.error(e);
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
    
    async createBounty (data, num) {
      const controller = await this.state.bountyInstance(BountyController) 
      const addresses = await this.state.accounts
    
      // "createTweet" wants both the user ID and the text as params for now:
      const result = await controller.createBounty(
        data,
        1,
        1,
      {
        from: addresses[0],
      })
    
      return result
    }

      
  render() {
    const ListItem = ({
        bountyId,
        bountyOwner,
        data,
        reward,
        bountyState,
    }) => (
        <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={`${data}, Bounty Price: ${reward}`}
                        description={ `Owners Address: ${bountyOwner}`}
                        /> 
    )

    return (
       
        <div style={{ background: '#f0f2f5', padding: '15px', height: '100vh' }}>
             <br/><br/><br/>
        <h1 style={{textAlign: 'center'}}>Work in Progess <span>🚧</span></h1>
        <br/><br/><br/>
        <Row gutter={16}>
        
          <Col span={24}>
            <Card title="Open Bounties" bordered={false}>
            <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <List.Item actions={[<a>OPEN</a>, <a>CLOSED</a>]} className="bounty-state">
                    {ListItem}
                    <div>10 Ξ</div>
                </List.Item>
        )}
      />
            </Card>
          </Col>
         
        </Row>
      </div>
    )
  }
}

export default BountiesList;