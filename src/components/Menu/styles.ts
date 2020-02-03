import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

interface MenuProps {
  theme: Theme;
  open?: boolean;
}

const Menu = styled('nav')<MenuProps>(({ theme }) => css`
  position: fixed;
  height: 22px;
  display: flex;
  align-items: center;
  background: ${theme.primary};
  width: 100vw;
  padding: 0 20px;
  z-index: 1;
`);

const Button = styled('button')<MenuProps>(({ theme, open }) => css`
  position: relative;
  background: ${open ? theme.accent + 'AA' : 'transparent'};
  color: ${theme.light};
  border: none;
  height: 100%;
  padding: 0 10px;
  font-size: 14px;
  cursor: default;

  &:focus {
    outline: none;
  }
`);

const Dropdown = styled('div')<MenuProps>(({ theme, open }) => css`
  visibility: ${open ? 'show' : 'hidden'};
  opacity: ${open ? .9 : 0};
  display: flex;
  position: absolute;
  padding: 5px 0;
  border-left: 1px solid ${theme.light + '55'};
  border-right: 1px solid ${theme.light + '55'};
  border-bottom: 1px solid ${theme.light + '55'};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  top: 22px;
  left: -1px;
  background: ${theme.primary};
  color: ${theme.light};
  width: 200px;
  transition:  .3s;
  z-index: 2;
`);

const Option = styled('span')<MenuProps>(({ theme }) => css`
  width: 100%;
  text-align: left;
  padding: 2px 10px;

  &:hover {
    background: ${theme.accent + 'AA'};
  }
`);

const DialogueDisplay = styled('div')<MenuProps>(({ theme, open }) => css`
  position: absolute;
  left: calc(50% - 200px);
  top: 100px;
  visibility: ${open ? 'show' : 'hidden'};
  opacity: ${open ? 1 : 0};
  width: 400px;
  height: 300px;
  background: ${theme.primary};
  transition: .3s;
`);

export const Styled = {
  Menu, 
  Button,
  Dropdown,
  Option,
  DialogueDisplay,
}