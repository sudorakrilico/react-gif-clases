import React from 'react'
import { useFechGifs } from '../hooks/useFechGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

  
 const {data:nombre_que_le_quiero_dar_a_la_variable, loading} = useFechGifs( category);
 console.log(loading)
 //console.log(data)
    // const [images, setimages] = useState([])
    // useEffect(() => { 
    //   getGifs(category).then(
    //       imgs=> setimages(imgs)
    //   )   
    // },[category])// --- > poner la dependencia

   

    
    return (
        <>
    <h3>{category}</h3>
     {/* {loading?'cargando...' : 'datos cargados' } */}
     {loading && <p className="animate__animated animate__flash">Loading ...</p> }
        { <div className="card-grid"> 
               { nombre_que_le_quiero_dar_a_la_variable.map(imagen =>(    
                    <GifGridItem
                    key = {imagen.id}
                    {...imagen}// MANDA las propiedades de imagen independientemente
                    />
           )
           )}
             
           
        </div> }
        </>
    )
}
