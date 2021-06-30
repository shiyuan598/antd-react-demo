import React from "react";
import { Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
export default function Header() {
  return (
    <div className="header">
      <Button onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
        {React.createElement(
          this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
        )}
      </Button>
      <span className="title">React Router Redux</span>
    </div>
  );
}
