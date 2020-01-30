import styled, { css } from 'styled-components';
import { ITheme } from '../../styles/theme';

type IProps = {
  theme: ITheme;
  color?: string;
}

const Toolbar = styled('section')<IProps>(({ theme }) => css`
  background: ${theme.primary};
  height: 600px;
  width: 150px;
  margin: 0 20px;
`);

const ColorPicker = styled('div')<IProps>(({ theme }) => css`
  background: ${theme.light};
  display: flex;
  justify-content: center;
  align-items: center;
`);

const Pixel = styled('div')<IProps>(({ theme, color }) => css`
  height: 1px;
  width: 1px; 
  background: ${color};
`);

export const Styled = {
  Toolbar,
  ColorPicker,
  Pixel,
}