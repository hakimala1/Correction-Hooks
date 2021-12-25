import Cardmov from "./card";

 function List ({movidata , search ,rate,setMovidata}){
 return (

    <div>
{movidata .filter(el=>el.title.toLowerCase().includes(search.toLowerCase()) && el.rate>=rate    ).map ((el=><Cardmov el = {el} movidata={movidata} setMovidata={setMovidata}></Cardmov>))}

    </div>
 )


 }

 export default List;