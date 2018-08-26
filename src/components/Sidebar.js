import React from 'react'
import { Layout, Menu, Icon } from 'antd';
import { Switch, Link, Route } from 'react-router-dom';

const { Sider } = Layout;
export default () => {
  return (
    <Layout>

    <Sider
    breakpoint="lg"
    collapsedWidth="0"
    onBreakpoint={(broken) => { console.log(broken); }}
    onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
    style={{background: '#ECF0FE'}}
  >
    <div className="logo" />
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
    
      <h2 className="logotitle">Bounty dApp</h2>
      
      <div style={{textAlign: 'center'}}>
       <Link to='/'> <img src="https://media.giphy.com/media/6Egwo6KTGUtIsd3bzx/giphy.gif"  width="150"  />
       </Link>
      </div>
      <Menu.Item key="1">
      <Link to='/profile'> 
        <Icon type="user" style={{color: '#446beb'}} />
        <span className="nav-text">PROFILE</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
      <Link to='/submit'> 
        <Icon type="edit" style={{color: '#446beb'}} />
        <span className="nav-text">NEW BOUNTY</span>
      </Link>
      </Menu.Item>
      <Menu.Item key="3">
      <Link to='/bounties'> 
        <Icon type="database" style={{color: '#446beb'}} />
        <span className="nav-text">BOUNTIES</span>
        </Link>
      </Menu.Item>
    </Menu>
  </Sider>
  </Layout>
  )
}
