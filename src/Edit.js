import { useState } from 'react';
import {Modal,Button} from 'react-bootstrap';
function Edit({movidata , setMovidata,el}) {
    const [show, setShow] = useState(false);
    const[ Title, settitle]=useState(el.title);
    const[Description, setdescription]=useState(el.description);
    const[Url, seturl]=useState(el.posterUrl);
    const[Rate,setrate]=useState(el.rate);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const edit=(id,newmovie)=>{
        setMovidata(movidata.map(el=>el.id===id?{...el, ...newmovie}:el))
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit
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
            <Button variant="primary" onClick={()=>edit(el.id, {title:Title , description : Description , posterUrl : Url , rate : Rate })}>
              Edit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Edit;