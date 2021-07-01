import React from "react";
import { Button } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

export default function Header() {
  const state = useSelector((state) => state.home);
  const dispatch = useDispatch();
  function toggleCollapsed() {
    dispatch({
      type: "TOGGLE_COLLAPSED"
    });
  }
  return (
    <div className="header">
      <Button onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {React.createElement(
          state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
        )}
      </Button>
      <span className="title">React Router Redux</span>
    </div>
  );
}
