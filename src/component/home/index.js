import React from "react";
import { Route, Switch } from "react-router-dom";
import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  SmileOutlined
} from "@ant-design/icons";
import "./home.scss";
import List from "./child/list";
import TimeLine from "./child/timeline";
import Statis from "./child/statis";
import NoData from "./child/noData";

const { SubMenu } = Menu;

export default class IndexView extends React.Component {
  state = {
    collapsed: false
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  menuClick({ key }) {
    this.props.history.push(key);
  }
  render() {
    return (
      <div className="container">
        <div className="sidebar">
            <div className="top-icon">
            <SmileOutlined />
            </div>
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <Menu.Item key="3" icon={<ContainerOutlined />}>
              Option 3
            </Menu.Item>
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
              <Menu.Item
                key="/home"
                onClick={(event) => this.menuClick(event)}
              >
                List
              </Menu.Item>
              <Menu.Item
                key="/home/timeLine"
                onClick={(event) => this.menuClick(event)}
              >
                Time Line
              </Menu.Item>
              <Menu.Item
                key="/home/statis"
                onClick={(event) => this.menuClick(event)}
              >
                Statis
              </Menu.Item>
              <Menu.Item
                key="/home/nodata"
                onClick={(event) => this.menuClick(event)}
              >
                No Data
              </Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              icon={<AppstoreOutlined />}
              title="Navigation Two"
            >
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>
          </Menu>
        </div>
        <div className="main">
          <div className="header">
            <Button
              // type="primary"
              onClick={this.toggleCollapsed}
              style={{ marginBottom: 16 }}
            >
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
              )}
            </Button>
            <span className="title">React Router Redux</span>
          </div>
          <div className="content">
            <Switch>
              <Route path="/home" exact component={List} />
              <Route path="/home/timeLine" exact component={TimeLine} />
              <Route path="/home/statis" exact component={Statis} />
              <Route path="/home/nodata" exact component={NoData} />
            </Switch>
          </div>
          <div className="footer">
              Tug&Pig
          </div>
        </div>
      </div>
    );
  }
}
