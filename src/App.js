import React, { Component } from "react";
import BountiesContract from "../build/contracts/Bounties.json";
import getWeb3 from "./utils/getWeb3";
import { Switch, Link, Route, withRouter } from "react-router-dom";
import "antd/dist/antd.css";
import { Layout, Menu, Icon, Button } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { storeWeb3Account, instantiateProfileContract } from "./actions";

import HomeDashboard from "./components/HomeDashboard";
//import Profile from './components/Profile';
import ProfileContainer from "./containers/ProfileContainer";
import NewBountyForm from "./containers/NewBountyForm";
import BountiesList from "./containers/BountiesList";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      web3: null,
      account: null,
      instance: null,
      bountiesList: {},

      bountyState: ["Open", "Closed"],
      solutionState: ["Approved", "Denied"]
    };
  }

  // async componentWillMount() {
  //   // Get network provider and web3 instance.
  //   // See utils/getWeb3 for more info.
  //   try {
  //     const results = await getWeb3;
  //     this.setState({ web3: results.web3 });
  //     this.instantiateContract();
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }

  componentDidMount() {
    this.props.storeWeb3Account();
    this.props.instantiateProfileContract();
  }

  async instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    const contract = require("truffle-contract");
    const bountiesContract = contract(BountiesContract);
    bountiesContract.setProvider(this.state.web3.currentProvider);
    const instance = await bountiesContract.deployed();
    const accounts = this.state.web3.eth.accounts;
    // Get accounts.

    this.setState({
      account: accounts[0],
      instance
    });
  }

  render() {
    console.log("hello", this.state.instance);
    console.log("my account", this.props.account);
    const { Header, Content, Footer, Sider } = Layout;
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
          style={{ background: "#ECF0FE" }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["4"]}>
            <Link to="/">
              <h2 className="logotitle">Bounty dApp</h2>
            </Link>
            <div style={{ textAlign: "center" }}>
              <Link to="/">
                {" "}
                <img
                  src="https://media.giphy.com/media/6Egwo6KTGUtIsd3bzx/giphy.gif"
                  width="150"
                />
              </Link>
            </div>
            <Menu.Item key="1">
              <Link to="/profile">
                <Icon type="user" style={{ color: "#446beb" }} />
                <span className="nav-text">PROFILE</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/submit">
                <Icon type="edit" style={{ color: "#446beb" }} />
                <span className="nav-text">NEW BOUNTY</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/bounties">
                <Icon type="database" style={{ color: "#446beb" }} />
                <span className="nav-text">BOUNTIES</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#ECF0FE", padding: 0 }}>
            <div style={{ textAlign: "right", padding: "0 10px" }}>
              <Link to="/submit">
                {" "}
                <Button type="primary">Submit a Bounty</Button>{" "}
              </Link>
            </div>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{ padding: 24, background: "#fff", minHeight: "100vh" }}
            >
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <HomeDashboard
                      instance={this.state.instance}
                      account={this.state.account}
                    />
                  )}
                />
                <Route
                  exact
                  path="/profile"
                  render={() => (
                    <ProfileContainer account={this.state.account} />
                  )}
                />
                <Route
                  exact
                  path="/submit"
                  render={() => (
                    <NewBountyForm
                      instance={this.state.instance}
                      account={this.state.account}
                    />
                  )}
                />
                />
                <Route
                  exact
                  path="/bounties"
                  render={() => (
                    <BountiesList
                      instance={this.state.instance}
                      account={this.state.account}
                    />
                  )}
                />
                />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Made with with coffee and <span>💜</span> by kp
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      storeWeb3Account,
      instantiateProfileContract
    },
    dispatch
  );

const mapStateToProps = state => {
  return {
    account: state.bounty.account,
    contracts: state.bounty.contracts
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
