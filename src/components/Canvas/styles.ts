import styled, { css } from 'styled-components';
import { RGB } from '../Toolbar/helpers';
import { Theme } from '../../styles/theme'

interface IProps {
  theme: Theme;
}

interface IPixelProps {
  theme: Theme;
  color: any & RGB; //TODO: figure out bug with interface setting type of 'color' to 'string & RGB'
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

const Pixel = styled('div')<IPixelProps>(({ theme, color }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${`rgb(${color.r},${color.g},${color.b})`};
  height: 20px;
  width: 20px;
`);

export const Styled = {
  Canvas,
  Row,
  Pixel,
}