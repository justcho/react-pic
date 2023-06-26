import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  padding: 10px 100px;
  text-align: center;
  font-size: 12px;
  color: #000;
`;

function Component() {
  return (
    <Footer>
      <p>©2023 JustCho. All rights reserved.</p>
    </Footer>
  );
}

export default Component;
