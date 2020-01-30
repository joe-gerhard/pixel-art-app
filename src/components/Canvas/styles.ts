import styled, { css } from 'styled-components';

interface IProps {
  theme: {
    primary: string;
    accent: string;
    light: string;
    dark: string;
  }

  color?: string;
}

const Canvas = styled('section')<IProps>(({ theme }) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme.primary};
  width: 1000px;
  height: 600px;
  border-radius: 3px;
  overflow: scroll;
`);

const Row = styled('div')<IProps>(({ theme }) => css`
  display: flex;
  align-items: center;
`);

const Pixel = styled('div')<IProps>(({ theme, color }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${color};
  height: 20px;
  width: 20px;
`);

export const Styled = {
  Canvas,
  Row,
  Pixel,
}