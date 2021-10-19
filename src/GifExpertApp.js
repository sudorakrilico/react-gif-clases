import React from 'react';
import { useState } from 'react/cjs/react.development';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
 const GifExpertApp = ()=>{

  //  const categories =['one Punch', 'Samurai X' , 'Bola de Dragon']
const [categories, setcategories] = useState( ['Bola de Dragon']);

// const handleAdd =(e)=>{

//   /// setcategories= categories.push("Naruto") ---NO funciona , añado a la const
//     // setcategories([...categories, 'Naruto']) --> OK
//     setcategories(cats=>[...cats,'Naruto'])
// }

    return(
        <>
        <h2>GifExpertApp</h2>
        <AddCategory  setcategories = {setcategories}/>
        <hr/>
        
      <ol>
           { 
           categories.map(category =>(
           <GifGrid
           key ={ category} 
             category= { category }
             
             />
           )
           )
           }
        </ol>
        </>

    )
}
export default GifExpertApp;
