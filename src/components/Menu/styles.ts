import styled, { css } from 'styled-components';

interface IProps {
  theme: {
    primary: string;
    accent: string;
    light: string;
    dark: string;
  }
}

const Menu = styled('nav')<IProps>(({ theme }) => css`
  display: flex;
  align-items: center;
  background: ${theme.primary};
  height: 50px;
  width: 100vw;
  padding: 0 20px;
`);

export const Styled = {
  Menu
}