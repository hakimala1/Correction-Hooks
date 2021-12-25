import {Card,Button} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import Edit from './Edit';
function Cardmov ({el,movidata,setMovidata}){

  const deleteMovie=(id)=>{setMovidata(movidata.filter(el=>el.id!==id))
  }

return (
<div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.posterUrl} />
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>
      {el.description}
    </Card.Text>
    <ReactStars
    count={5}
    value={el.rate}></ReactStars>
    <Button variant="primary" onClick={()=>deleteMovie(el.id)} >Delete</Button>
    <Button variant="primary"  ><Edit el={el} movidata={movidata} setMovidata={setMovidata}></Edit></Button>
  </Card.Body>
</Card>

</div>

)

}

export default Cardmov;