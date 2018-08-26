import React from 'react'
import { Layout, Button } from 'antd';

const { Header } = Layout;
export default () => {
  return (
    <div>
     <Header style={{ background: '#ECF0FE', padding: 0 }} >
       
       <div style={{textAlign: 'right', padding: '0 10px'}}>
       <Link to="/submit"> <Button type="primary">Submit a Bounty</Button> </Link>
       </div>
       </Header>
    </div>
  )
}
