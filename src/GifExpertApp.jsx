import { useState } from 'react'
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Brasil' ]);

    const onAddCategory = (newCategory) => {
        if( categories.includes(newCategory) ) return;
        // setCategories(categories.concat(`Category ${numero}`));
        setCategories([ newCategory, ...categories]);
        // console.log(newCategory);
    }

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertReact</h1>

        {/* Input */}
        <AddCategory 
            // onAddCategories={ setCategories } 
            onNewCategory={ onAddCategory }
        />

        {/* Listado de gifs */}
        { 
            categories.map( category => (
                <GifGrid key={ category } category={ category } />
            )) 
        }
        {/* Gif Item */}
    </>
  )
}
