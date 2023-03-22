import { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const Popup = () => {
  //
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const modalToggleHandler = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <div>
      <Button color="danger" onClick={modalToggleHandler}>
        Click Me
      </Button>
      <Modal isOpen={modalOpen} toggle={modalToggleHandler}>
        <ModalHeader toggle={modalToggleHandler}>Modal title</ModalHeader>
        <ModalBody></ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={modalToggleHandler}>
            Zamknij
          </Button>{' '}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Popup;
