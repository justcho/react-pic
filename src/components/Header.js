import React from "react";
import LogoUrl from "./logo.svg";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
  padding:10px 0;
  margin-left: 30px;
  &.active {
    border-bottom: 2px solid #61dafb;
    color: #61dafb;
  }
`;

function Component() {
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
    </Header>
  );
}

export default Component;
