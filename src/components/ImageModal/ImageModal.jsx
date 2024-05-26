import Modal from 'react-modal';


const customStyles = {

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export default function ImageModal({isOpen, onClose}) {
    return (<Modal
        isOpen={isOpen}
        onClose={onClose}
        style={customStyles}
      ></Modal>)
}