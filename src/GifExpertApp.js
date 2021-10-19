import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
 const GifExpertApp = ()=>{

  //  const categories =['one Punch', 'Samurai X' , 'Bola de Dragon']
  const [categories, setCategories] = useState(['One Punch']);

// const handleAdd =(e)=>{

//   /// setcategories= categories.push("Naruto") ---NO funciona , añado a la const
//     // setcategories([...categories, 'Naruto']) --> OK
//     setcategories(cats=>[...cats,'Naruto'])
// }

    return(
        <>
        <h2>GifExpertApp</h2>
        <AddCategory  setCategories = {setCategories}/>
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
