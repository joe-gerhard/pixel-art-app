import styled, { css } from 'styled-components';
import { ITheme } from '../../styles/theme';

type IProps = {
  theme: ITheme;
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
  background: linear-gradient(0deg, rgba(0,0,0, 1), rgba(0,0,0,0)),              
              linear-gradient(90deg, rgba(255,255,255, 1), rgba(255,255,255, 0));
  background-color: green;
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`);

export const Styled = {
  Toolbar,
  ColorPicker,
}