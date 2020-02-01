import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type IProps = {
  theme: Theme;
  color?: string;
}

const Toolbar = styled('section')<IProps>(({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: ${theme.primary};
  height: 600px;
  width: 150px;
  margin: 0 20px;
`);

const ColorPicker = styled('div')<IProps>(({ theme }) => css`
  background: linear-gradient(0deg, hsla(0deg,0%,0%, 1), hsla(0deg,100%,50%,0)),             
              linear-gradient(90deg, hsla(0deg,0%,100%, 1), hsla(0deg,100%,50%, 0));
  background-color: hsla(0deg, 100%, 50%, 1);
  height: 100px;
  width: 100px;
`);

export const Styled = {
  Toolbar,
  ColorPicker,
}