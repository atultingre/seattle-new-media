import { Layout, Menu, Button } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  SettingOutlined,
  EditOutlined,
  LogoutOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import "./Navigation.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateLoginInfo } from "../../store/user";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import Notifications from "./Notifications";
import SettingsMenu from "./SettingsMenu";
import UserMenu from "./UserMenu";

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
        <Logo collapsed={collapsed} />
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
        <SearchBar />
        <div className="nav-tabs-container">
          <Notifications menu={menu} />
          <SettingsMenu />
          <UserMenu menu={menu} />
        </div>
      </Header>
    </Layout>
  );
};

export default Navigation;
