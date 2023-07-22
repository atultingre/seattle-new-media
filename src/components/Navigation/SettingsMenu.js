import React from "react";
import { Dropdown } from "antd";
import { SettingOutlined } from "@ant-design/icons";

const SettingsMenu = () => {
  return (
    <Dropdown disabled>
      <SettingOutlined />
    </Dropdown>
  );
};

export default SettingsMenu;
