import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

type ToolbarProps = {
  theme: Theme;
  width?: number;
  hue?: number;
}

const Toolbar = styled('section')<ToolbarProps>(({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background: ${theme.dark};
  margin: 0 20px;
  height: 600px;
`);

const ColorPicker = styled('div')<ToolbarProps>(({ theme, width, hue }) => css`
  position: relative;
  
  background: linear-gradient(to top, hsla(0deg,0%,0%, 1), hsla(0deg,100%,50%,0)),             
              linear-gradient(to right, hsla(0deg,0%,100%, 1), hsla(0deg,100%,50%, 0));
  background-color: ${hue ? `hsl(${hue}, 100%, 50%)` : `hsl(0, 100%, 50%)`};
  height: ${width ? `${width}px` : '100px'};
  width: ${width ? `${width}px` : '100px'};
  border: 2px solid ${theme.primary};
`);

const HueSlider = styled('div')<ToolbarProps>(({ theme, width }) => css`
  border: 2px solid ${theme.primary};
  width: ${width ? `${width}px` : '100px'};
  height: 10px;
  background: linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%);
`);

export const Styled = {
  Toolbar,
  ColorPicker,
  HueSlider,
}