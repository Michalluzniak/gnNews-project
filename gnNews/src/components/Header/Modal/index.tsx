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
      <Button className="px-3 py-2 shadow-sm" color="success" onClick={modalToggleHandler}>
        Click Me
      </Button>
      <Modal centered size="lg" className="mx-auto" isOpen={modalOpen} toggle={modalToggleHandler}>
        <ModalHeader className="px-2 py-4 px-3" toggle={modalToggleHandler}>
          <p className="fs-3">Thoughts about the task</p>
        </ModalHeader>
        <ModalBody className="p-3">
          <div className="m-2 p-2">
            <p className="fs-4">The biggest challenge</p>
            <div className="px-2">
              <p className="my-1">To be honest, I spend the most time styling the sidebar to behave like this:</p>
              <p> - When you hover over the hidden sidebar, it should expand.</p>- You can hide and show sidebar by
              arrow button at the bottom.
              <p className="my-2">
                My second problem (but not a big problem) was to implement infinite scrolling and combine it with a list
                of countries.
              </p>
            </div>
          </div>
          <div className="m-2 p-2">
            <p className="fs-4">Most enjoyable</p>
            <p className="my-1">
              The functionality to change the display state from list to tiles - I had a lot of fun with this.
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="success" className="m-4 py-2 px-4" onClick={modalToggleHandler}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Popup;
