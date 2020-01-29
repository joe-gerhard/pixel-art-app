import styled, { css } from 'styled-components';

interface IProps {
  theme: {
    primary: string;
    accent: string;
    light: string;
    dark: string;
  }
}

const App = styled('div')<IProps>(({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.light};
  min-height: 100vh;
`);

const Main = styled('main')<IProps>(({ theme }) => css`
  display: flex;
  align-items: center;
  padding: 20px;
`);

export const Styled = {
  App,
  Main,
}