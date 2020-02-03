import React, { Dispatch, ChangeEvent, useState } from 'react';
import { Styled } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';
import { CanvasActions } from '../../redux/actions/CanvasActions';
import DialogueDisplay from './DialogueDisplay';

const Menu: React.FC = () => {

  const [ fileOpen, setFileOpen ] = useState<boolean>(false);
  const [ dialogueOpen, setDialogueOpen ] = useState<boolean>(false);
  const [ dialogueType, setDialogueType ] = useState<string | null>(null);



  const handleClickNewFile = (): void => {
    setDialogueType('newFile');
    setDialogueOpen(true);
  }

  return (
    <Styled.Menu>
      <Styled.Button onClick={() => setFileOpen(!fileOpen)} open={fileOpen}>
        File
        <Styled.Dropdown open={fileOpen} >
          <Styled.Option onClick={handleClickNewFile}>
            New...
          </Styled.Option>
        </Styled.Dropdown>
      </Styled.Button>
      <DialogueDisplay open={dialogueOpen} type={dialogueType}/>
    </Styled.Menu>
  )
}

export default Menu;
