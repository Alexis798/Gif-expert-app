
import { useState } from 'react';
//Se pueden importar los dos componentes del mismo directorio porque existe un archivo index que los exporta
import { AddCategory, GifGrid } from './components'

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([ 'Game of Thrones', 'Jojo Bizarre Adventure' ])

    const onAddCategory = ( newCategory ) => {

        //Condicional, si lo que se inserta ya existe entonces no vuelve aparecer
        if(categories.includes(newCategory)) return; 
        setCategories([ newCategory, ...categories ])
    }

    return (
        <>
            {/*TITULO */}
            <h1>GifExpertApp</h1>

            {/*INPUT */}
            <AddCategory 
                //setCategories={ setCategories }
                onNewCategory={ onAddCategory }
            />

            {/*LISTADO DE GIF */}
            {categories.map( category => (
                //Se puede enviar el map a un componente en otro documento
                <GifGrid 
                    key={category} 
                    category={category} 
                />
            ))}
        </>
    )
}