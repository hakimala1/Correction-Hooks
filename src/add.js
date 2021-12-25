import { useState } from 'react';
import {Modal,Button} from 'react-bootstrap';
function Add({movidata , setMovidata}) {
    const [show, setShow] = useState(false);
    const[ Title, settitle]=useState('');
    const[Description, setdescription]=useState('');
    const[Url, seturl]=useState('');
    const[Rate,setrate]=useState(0);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const newMovie=()=>{setMovidata([...movidata ,{title:Title, description: Description, posterUrl:Url , rate:Rate} ])} ;
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add new movie
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>new movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
<label> Title</label> <input onChange={(event)=>settitle(event.target.value)} value={Title}></input>
 <label>Description</label><input onChange={(event)=>setdescription(event.target.value)}value={Description} ></input>
 <label>url</label><input onChange={(event)=>seturl(event.target.value)}value={Url} ></input>
   <label>Rate</label><input onChange={(event)=>setrate(event.target.value)}value={Rate} ></input>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={newMovie}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Add;