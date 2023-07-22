import { Button, Drawer, Layout, Menu, Space } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";

const DrawerSlide = ({ showDrawer, onClose, toggleCollapsed, open }) => {
  console.log(open);
  return (
    <Drawer
      placement="left"
      onClick={toggleCollapsed}
      // onClose={onClose}
      open={open}
      width={290}
      extra={
        <Space>
          <img
            src="./images/logo.png"
            alt=""
            style={{ marginLeft: "-195px", width: "7rem" }}
          />
          <Button onClick={onClose}>
            <ArrowLeftOutlined />
          </Button>
        </Space>
      }>
      <Menu
        theme="light"
        mode="inline"
        className="sidebar-menu"
        style={{
          width: 290,
          marginTop: "16px",
        }}
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Dashboard",
          },
          {
            key: "2",
            icon: <HomeOutlined />,
            label: "Homepage",
          },
          {
            key: "3",
            icon: <UserOutlined />,
            label: "Dummy Page",
          },
        ]}
      />
    </Drawer>
  );
};

export default DrawerSlide;
