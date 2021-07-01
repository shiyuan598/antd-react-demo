import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { Menu } from "antd";
import {
  AppstoreOutlined,
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
import Header from "./header";
import Footer from "./footer";

const { SubMenu } = Menu;

class IndexView extends React.Component {
  menuClick({ key }) {
    this.props.history.push(key);
  }
  render() {
    const { collapsed } = this.props.home;
    return (
      <div className="container">
        <div className={["sidebar", collapsed && "sidebar-collapsed"].join(' ')}>
          <div className="top-icon">
            <SmileOutlined /><span className="text">{!collapsed && "ShiYuan"}</span>
          </div>
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
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
              <Menu.Item key="/home" onClick={(event) => this.menuClick(event)}>
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
        <div className={["main", collapsed && "main-collapsed"].join(' ')}>
          <Header />
          <div className="content">
            <Switch>
              <Route path="/home" exact component={List} />
              <Route path="/home/timeLine" exact component={TimeLine} />
              <Route path="/home/statis" exact component={Statis} />
              <Route path="/home/nodata" exact component={NoData} />
            </Switch>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

IndexView = connect((state) => state)(IndexView);

export default IndexView;
