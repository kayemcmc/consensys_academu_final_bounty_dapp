import React, { Component } from 'react'
import { Card, Col, Row, Icon, Avatar } from 'antd'

const { Meta } = Card;
 class Profile extends Component {
  render() {
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
          
                <h2 className="welcome-message">Your Account Details:<br/><br/>
                Address: <span style={{color: '#333'}}>{this.props.account}</span><br/>
                Balance:<span style={{color: '#333'}}>{this.props.account}</span> <br/><br/>
                Bounty Submissions:<span style={{color: '#333'}}>{this.props.account}</span>  </h2>
          
        </Card>
      
          </Col>
          
        </Row>
      </div>
    )
  }
}

export default Profile;
