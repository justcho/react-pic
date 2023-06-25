import React, { useEffect } from "react";
import LogoUrl from "./logo.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "antd";
import { useStores } from "../stores";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react";

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 100px;
  background-color: #02101f;
  color: #fff;
`;
const Logo = styled.img`
  height: 30px;
`;

const StyledLink = styled(NavLink)`
  color: #fff;
  padding: 10px 0;
  margin-left: 30px;
  &.active {
    border-bottom: 2px solid #61dafb;
    color: #61dafb;
  }
`;
const Login = styled.div`
  margin-left: auto;
`;

const StyledButton = styled(Button)`
  margin-left: 10px;
`;

const Component = observer(() => {
  const { UserStore, AuthStore } = useStores();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };
  const handleLogout = () => {
    AuthStore.logout();
  };

  useEffect(() => {
    UserStore.pullUser();
  }, []);

  return (
    <Header>
      <Logo src={LogoUrl} alt="Logo" />
      <nav>
        <StyledLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          首页
        </StyledLink>
        <StyledLink
          to="/history"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          上传历史
        </StyledLink>
        <StyledLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          关于我
        </StyledLink>
      </nav>
      <Login>
        {UserStore.currentUser ? (
          <>
            {UserStore.currentUser.attributes.username}
            <StyledButton type="primary" onClick={handleLogout}>
              注销
            </StyledButton>
          </>
        ) : (
          <>
            <StyledButton type="primary" onClick={handleLogin}>
              登录
            </StyledButton>
            <StyledButton type="primary" onClick={handleRegister}>
              注册
            </StyledButton>
          </>
        )}
      </Login>
    </Header>
  );
});

export default Component;
