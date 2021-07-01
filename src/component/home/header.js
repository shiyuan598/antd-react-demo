import React from "react";
import { Button, Avatar, Popover } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LogoutOutlined
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const { home, login } = useSelector((state) => state);
  const dispatch = useDispatch();
  function toggleCollapsed() {
    dispatch({
      type: "TOGGLE_COLLAPSED"
    });
  }
  return (
    <div className="header">
      <Button className="btn" onClick={toggleCollapsed}>
        {React.createElement(
          home.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
        )}
      </Button>
      <span className="title">React Router Redux</span>
      <Popover
        arrowPointAtCenter={true}
        placement="bottomRight"
        title={login.name}
        content={
          <div>
            <Button
              type="link"
              onClick={() => {
                dispatch({
                  type: "LOGOUT"
                });
              }}
            >
              退出登录
              <LogoutOutlined />
            </Button>
          </div>
        }
      >
        <Avatar className="user-icon" icon={<UserOutlined />} />
      </Popover>
    </div>
  );
}
