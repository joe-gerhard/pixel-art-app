import React, { useState, Dispatch } from 'react';
import { Styled } from './styles';
import DialogueDisplay from './DialogueDisplay';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';
import { MenuActions } from '../../redux/actions/MenuActions';

const Menu: React.FC = () => {

  const [ fileOpen, setFileOpen ] = useState<boolean>(false);
  const [ dialogueType, setDialogueType ] = useState<string | null>(null);
  const { dialogueOpen } = useSelector((state: AppState) => state.menu);
  const menuDispatch = useDispatch<Dispatch<MenuActions>>()



  const handleClickNewFile = (): void => {
    setDialogueType('newFile');
    menuDispatch({ type: 'SET_DIALOGUE_OPEN' });
  }

  return (
    <Styled.Menu>
      <Styled.MenuButton onClick={() => setFileOpen(!fileOpen)} open={fileOpen}>
        File
        <Styled.Dropdown open={fileOpen} >
          <Styled.Option onClick={handleClickNewFile}>
            New...
          </Styled.Option>
        </Styled.Dropdown>
      </Styled.MenuButton>
      <DialogueDisplay open={dialogueOpen} type={dialogueType} />
    </Styled.Menu>
  )
}

export default Menu;
