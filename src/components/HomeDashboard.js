import React, { Component } from 'react'
import { Card, Col, Row, List, Avatar } from 'antd'


const data = [
  {
    title: 'Add Collapse Option For Wallet Section In Sim Exchange',
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
 class HomeDashboard extends Component {
  render() {
    return (
        <div style={{ background: '#f0f2f5', padding: '15px' }}>
        <Row gutter={16}>
        <Col span={24}>
        <h2 className="welcome-message">Welcome! Your active address is <span style={{color: '#333'}}>{this.props.account}</span> </h2>
        </Col>
          <Col span={8}>
            <Card title="Tips & Resources" bordered={false} style={{textAlign: 'center'}}>
           <h2 className="welcome-message" style={{textAlign: 'left'}}> Submitting a Bounty?</h2>
            <ul className="blue-bullet">
                <li><span className="blue-bullet-span"> Visit your profile</span></li>
                <li><span className="blue-bullet-span"> Check your balance</span> </li>
                <li><span className="blue-bullet-span"> Click New Bounty</span></li>
                <li><span className="blue-bullet-span"> Follow the form instructions</span></li>
            </ul>

            <h2 className="welcome-message" style={{textAlign: 'left'}}> Solving a Bounty?</h2>
            <ul className="blue-bullet">
                <li><span className="blue-bullet-span"> Visit the Bounties tab</span></li>
                <li><span className="blue-bullet-span"> Submit your bounty findings</span></li>
                <li><span className="blue-bullet-span"> Claim your prize</span></li>
                <li><span className="blue-bullet-span"> Happy hunting!</span></li>
            </ul>
            </Card>
          </Col>
          <Col span={16} style={{height: '100vh'}}>
            <Card title="Samples of Demo Bounties Listings" bordered={false}  style={{height: '100vh'}}>
            <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                <List.Item actions={[<a>CLOSED</a>]} className="bounty-state">
                    <List.Item.Meta
                    avatar={<Avatar src="http://www.emoji.co.uk/files/phantom-open-emojis/objects-phantom/12813-money-bag.png" />}
                    title={<a href="https://ant.design">{data.title}</a>}
                    description={"Add Collapse Option For Wallet Section In Sim Exchange"}
                    />
                    <div style={{color: '#82be46', fontWeight: 'bold'}}>1 Ξ ($300)
    
                    </div>
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

export default HomeDashboard;