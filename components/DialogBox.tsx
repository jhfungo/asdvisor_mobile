import React from 'react';
import { Button, Dialog, Text } from 'react-native-paper';

interface DialogBoxProps {
  title: string;
  body: string;
  toggle: boolean;
  onDismiss?: () => void;
}
const DialogBox = ({ title, body, toggle, onDismiss }: DialogBoxProps) => {
  const [toggleDialog, setToggleDialog] = React.useState(toggle);
  return (
    <Dialog visible={toggleDialog}>
      <Dialog.Title>{title}</Dialog.Title>
      <Dialog.Content>
        <Text variant="bodyLarge">{body}</Text>
      </Dialog.Content>
      <Dialog.Actions>
        <Button
          onPress={() => {
            setToggleDialog((prev) => !prev);
            onDismiss();
          }}>
          Done
        </Button>
      </Dialog.Actions>
    </Dialog>
  );
};

export default DialogBox;
