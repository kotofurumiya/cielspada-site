import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonComponentProps = {
} & ButtonProps;

const ButtonComponent = (props: ButtonComponentProps) => (
  <button {...props}></button>
);

const StyledButtonComponent = styled(ButtonComponent)`
  appearance: none;
  border-radius: 3px;
  font-size: 1em;
  padding: 0.5em 1em;
`;

export const Button = (props: ButtonProps) => {
  return <StyledButtonComponent {...props}/>;
};