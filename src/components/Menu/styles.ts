import styled, { css } from 'styled-components';
import { Theme } from '../../styles/theme';

interface MenuProps {
  theme: Theme;
  open?: boolean;
}

const Menu = styled('nav')<MenuProps>(({ theme }) => css`
  position: fixed;
  z-index: 1;
  height: 22px;
  display: flex;
  align-items: center;
  background: ${theme.primary};
  width: 100vw;
  padding: 0 20px;
`);

const MenuButton = styled('button')<MenuProps>(({ theme, open }) => css`
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
  position: absolute;
  visibility: ${open ? 'show' : 'hidden'};
  opacity: ${open ? 1 : 0};
  display: flex;
  top: 22px;
  left: -1px;
  padding: 5px 0;
  border-left: 1px solid ${theme.light + '66'};
  border-right: 1px solid ${theme.light + '66'};
  border-bottom: 1px solid ${theme.light + '66'};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background: ${theme.primary};
  color: ${theme.light};
  width: 200px;
  transition: ${open ? 0 : '.3s'};

  &:before {
    content: ' ';
    display: ${open ? 'block' : 'none'};
    position: absolute;
    visibility: ${open ? 'show' : 'hidden'};
    opacity: ${open ? 1 : 0};
    top: 0;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-left: 4px solid black;
    border-right: 4px solid black;
    border-bottom: 4px solid black;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    z-index: -1;
    transition: .3s .3s;
  }
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
  display: flex;
  padding: 20px;
  color: ${theme.light};
  left: calc(50% - 200px);
  top: 100px;
  border: 1px solid ${theme.light + '55'};
  box-shadow: 0 0 0 1px black;
  border-radius: 5px;
  visibility: ${open ? 'show' : 'hidden'};
  opacity: ${open ? 1 : 0};
  width: 400px;
  height: 300px;
  background: ${theme.primary};
  transition: .3s;
`);

const NewFileDialogue = styled('div')<MenuProps>(({ theme }) => css`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 16px;
    margin-bottom: 10px;
  }
`); 

const Input = styled('input')<MenuProps>(({ theme }) => css`
  background: ${theme.primary};
  color: ${theme.light};
  border: 1px solid ${theme.light + 'AA'};
  border-radius: 2px;
  padding: 2px 5px;
  width: 50px;
  margin-left: 10px;
  font-size: 14px;
  transition: .3s;

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px ${theme.accent + 'AA'};
  }
`);

const InputGroup = styled('div')<MenuProps>(({ theme }) => css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  margin-bottom: 10px;
`);

const Button = styled('button')<MenuProps>(({ theme }) => css`
  background: ${theme.accent + 'AA'};
  color: ${theme.light};
  padding: 2px 5px;
  border: 1px solid ${theme.light};
  border-radius: 3px;
  margin-right: 10px;
  transition: .3s;

  &:hover {
    background: ${theme.accent + 'DD'};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 2px 2px ${theme.light + 'AA'};
  }
`);

const ButtonGroup = styled('div')<MenuProps>(({ theme }) => css`
  margin-top: auto;
`);

export const Styled = {
  Menu, 
  MenuButton,
  Dropdown,
  Option,
  DialogueDisplay,
  NewFileDialogue,
  Input,
  InputGroup,
  Button,
  ButtonGroup,
}