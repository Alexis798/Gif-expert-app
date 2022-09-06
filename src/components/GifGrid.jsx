import { GifItem } from './GifItem';
import {useFetchGifs} from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {

    //Esto llama a la funcion useFetchGifs que almacena la logica del hook en otro archivo
    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            <h3>{category}</h3>

            {
                isLoading && (<h2>Cargando...</h2>)
            }
            
            <div className="card-grid">
                {images.map( img => (
                    <GifItem 
                        key={img.id}
                        //De esta manera le puedes enviar los valores del map a los otros componentes destructurando todo lo que esta dentro de la variable img.
                        {...img}
                    />
                ))}
            </div>
        </>
    )
}