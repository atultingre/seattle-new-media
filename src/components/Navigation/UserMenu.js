import React from "react";
import { Dropdown, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

const UserMenu = ({ menu }) => {
  return (
    <Dropdown overlay={menu} trigger={["click"]}>
      <Avatar size={32} icon={<UserOutlined />} style={{ cursor: "pointer" }} />
    </Dropdown>
  );
};

export default UserMenu;
