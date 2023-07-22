import { Layout, Menu, Button, Input, Badge, Dropdown, Avatar } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  BellOutlined,
  SettingOutlined,
  SearchOutlined,
  EditOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import "./Navigation.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateLoginInfo } from "../../store/user";

const { Header } = Layout;

const Navigation = ({ collapsed, toggleCollapsed }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(updateLoginInfo({ isUserLoggedIn: false }));
    localStorage.removeItem("isUserLoggedIn");
    navigate("/");
  };
  
  const menu = (
    <Menu>
      <Menu.Item key="1" disabled>
        <EditOutlined className="menu-item-icon" />
        Edit Profile
      </Menu.Item>
      <Menu.Item key="2" disabled>
        <UserOutlined className="menu-item-icon" />
        Account Setting
      </Menu.Item>
      <Menu.Item key="3" disabled>
        <SettingOutlined className="menu-item-icon" />
        Account Billing
      </Menu.Item>
      <Menu.Item key="4" disabled>
        <QuestionCircleOutlined className="menu-item-icon" />
        Help Center
      </Menu.Item>
      <Menu.Item key="5" onClick={handleLogout}>
        <LogoutOutlined className="menu-item-icon" />
        Signout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout className="nav">
      <Header className="navigation-header">
        <img
          src={collapsed ? "./images/logo-sm.png" : "./images/logo.png"}
          alt="Emilus"
          className={collapsed ? "collapsed e-ico" : "not-collapsed"}
        />
        <Button
          type="text"
          className="menu-button"
          icon={
            collapsed ? (
              <span className="e-icon">
                <MenuUnfoldOutlined />
              </span>
            ) : (
              <MenuFoldOutlined />
            )
          }
          onClick={toggleCollapsed}
        />
        <Input
          prefix={<SearchOutlined className="search-icon" />}
          placeholder="Search"
          className="search"
        />
        <div className="nav-tabs-container">
          <Dropdown disabled menu={menu}>
            <Badge count={5} offset={[-20, 0]}>
              <BellOutlined className="nav-bell" />
            </Badge>
          </Dropdown>
          <Dropdown disabled>
            <SettingOutlined />
          </Dropdown>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Avatar
              size={32}
              icon={<UserOutlined />}
              style={{ cursor: "pointer" }}
            />
          </Dropdown>
        </div>
      </Header>
    </Layout>
  );
};

export default Navigation;
