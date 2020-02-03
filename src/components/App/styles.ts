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
  background: ${theme.light};
  height: 100vh;
  width: 100vw;
`);

const Main = styled('main')<IProps>(({ theme }) => css`
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`);

export const Styled = {
  App,
  Main,
}