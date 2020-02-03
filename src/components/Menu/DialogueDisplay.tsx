import React from 'react'
import { Styled } from './styles';
import NewFileDialogue from './NewFileDialogue';

interface DialogueDisplayProps {
  open: boolean;
  type: string | null;
}

const DialogueDisplay: React.FC<DialogueDisplayProps> = ({ open, type }) => {
  let dialogue;

  switch(type) {
    case 'newFile':
      dialogue = <NewFileDialogue />
      break;
    default: 
      
  }

  return (
    <Styled.DialogueDisplay open={open}>
      {dialogue}
    </Styled.DialogueDisplay>
  )
}

export default DialogueDisplay;
