import { useState } from 'react'

//El setCategories nos importa la funcion del otro componente que necesitamos
export const AddCategory = ({onNewCategory}) => {

    const [ inputValue, setInputValue ] = useState('')

    //Llamamos la funcion target para no tener que llamarlo event.target.value
    const onInputChange = ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        //Esta funcion propia del event evita que la pagina se recarge y se pierda los cambios al presionar enter
        event.preventDefault()

        //usamos el trim para inspeccionar los elementos adelante y atras, si esto es menor o igual a 1 la funcion no se va a ejecutar
        if(inputValue.trim().length <= 1) return;

        //Esta es la funcion que pasa el elemento que agregamos a la funcion que esta siendo importada
        //Tambien se puede hacer asi
        //setCategories( categories => [inputValue, ...categories])

        onNewCategory( inputValue.trim() )
        //Vacia el input despues de presionar enter
        setInputValue('')
    }
    
   return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>        
    )
}