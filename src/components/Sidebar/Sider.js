import { Layout, Menu } from "antd";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Pages from "../Pages/Pages";

const Sider = ({ collapsed }) => {
  const { Sider } = Layout;

  return (
    <>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className="sider">
          <Menu
            theme="light"
            mode="inline"
            width={250}
            className="sidebar-menu"
            defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<HomeOutlined />}>
              <Link to="#">Homepage</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<UserOutlined />}>
              <Link to="#">Dummy Page</Link>
            </Menu.Item>
          </Menu>
        </Sider>
          <Pages />
          
      </Layout>
    </>
  );
};

export default Sider;
