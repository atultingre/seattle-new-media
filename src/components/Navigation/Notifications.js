import React from "react";
import { Dropdown, Badge } from "antd";
import { BellOutlined } from "@ant-design/icons";

const Notifications = ({ menu }) => {
  return (
    <Dropdown disabled menu={menu}>
      <Badge count={5} offset={[-4, 0]}>
        <BellOutlined className="nav-bell" />
      </Badge>
    </Dropdown>
  );
};

export default Notifications;
