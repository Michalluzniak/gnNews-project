import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

const NewsModal = ({ isModalOpen, modalToggleHandler, data }: any) => {
  return (
    <Modal className="m-auto" size="lg" centered isOpen={isModalOpen} toggle={modalToggleHandler}>
      <ModalBody className="p-5 lh-lg fs-5">
        {data.content} "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum."
      </ModalBody>
      <ModalFooter>
        <div className="py-2 px-5">
          <p>Author: {data.author}</p>
          <p>
            Source:{' '}
            <a href={data.url} className="text-dark">
              {data.url}
            </a>
          </p>
        </div>
        <Button color="success m-2 mx-3 px-3 py-1" size="lg" onClick={modalToggleHandler}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default NewsModal;
