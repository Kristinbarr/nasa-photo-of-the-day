import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 6px 10px;
  margin: 15px;
  border: none;
  border-radius: 3px;
  background-color: #0066b0;
  color: #fff !important;
  text-decoration: none;
  font-size: 0.8rem;

  ${(props) => (props.type === 'primary' ? `background: #2196f3` : null)}
`

export default Button;
