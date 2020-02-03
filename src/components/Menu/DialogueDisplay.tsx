import React from 'react'
import { Styled } from './styles';
import NewFileDialogue from './NewFileDialogue';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers/rootReducer';

interface DialogueDisplayProps {
  open: boolean;
  type: string | null;
}

const DialogueDisplay: React.FC<DialogueDisplayProps> = ({ type }) => {

  const { dialogueOpen } = useSelector((state: AppState) => state.menu);

  let dialogueType;

  switch(type) {
    case 'newFile':
      dialogueType = <NewFileDialogue />
      break;
    default: 
      
  }

  return (
    <Styled.DialogueDisplay open={dialogueOpen}>
      {dialogueType}
    </Styled.DialogueDisplay>
  )
}

export default DialogueDisplay;
