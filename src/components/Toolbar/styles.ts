import styled, { css } from 'styled-components';

interface IProps {
  theme: {
    primary: string;
    accent: string;
    light: string;
    dark: string;
  }
}

const Toolbar = styled('section')<IProps>(({ theme }) => css`
  background: ${theme.primary};
  height: 600px;
  width: 150px;
  margin: 0 20px;
`);

export const Styled = {
  Toolbar,
}