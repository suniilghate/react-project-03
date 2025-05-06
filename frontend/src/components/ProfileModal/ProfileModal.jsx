// import { useDisclosure } from '@mantine/hooks';
// import { Modal, Button } from '@mantine/core';
import './ProfileModal.css';

function ProfileModal({modalOpened, setModalOpened}) {
  if (!modalOpened) return null;

  return (
    <div className="modal-overlay" onClick={() => setModalOpened(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <form className="infoForm">
          <h3>Your Info</h3>
          <div>
            <input type="text" className="infoInput" name="FirstName" placeholder='First Name'/>
            <input type="text" className="infoInput" name="LastName" placeholder='Last Name'/>
          </div>
          
        </form>
        <button onClick={() => setModalOpened(false)}>Close</button>
      </div>
    </div>
  );
}

export default ProfileModal;
//   const [opened, { open, close }] = useDisclosure(false);

//   return (
//     <>
//       <Modal opened={modalOpened} onClose={()=>setModalOpened(false)} withCloseButton={false}>
//         Modal without header, press escape or click on overlay to close
//       </Modal>

//       <Button variant="default" onClick={open}>
//         Open modal
//       </Button>
//     </>
//   );
// }

// export default ProfileModal;