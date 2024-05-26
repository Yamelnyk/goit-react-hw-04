import Modal from 'react-modal';


const customStyles = {
  overlay: {
    backgroundColor: "#545454",
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'none',
    // height: '500px',
    // width: 'auto'
  },
};

Modal.setAppElement('#root');

export default function ImageModal({isOpen, onClose, imageUrl}) {
    return (<Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
    >
      <img src={imageUrl}/>
      </Modal>)
}