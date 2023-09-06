import { useFetchGif } from "../helpers/hooks/useFetchGif"
import {GifItem} from "./"

export const GifGrid = ({category}) => {
    
      const {images, isLoading} = useFetchGif(category)
      console.log({images,isLoading})

  return (
    <>
       <h3>{category}</h3>
       {
         isLoading && (<h2>Cargando...</h2>)
       }
        <div className="card-grid">
            {images.map( image => {
                return <GifItem key={image.id} {...image }/>
            })}
        </div>
    </>
  )
}

