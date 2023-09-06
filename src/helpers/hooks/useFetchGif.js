import { useState, useEffect } from "react";
import { getGifs } from "../GetGifs";
export const useFetchGif = ( category ) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const getImages = async () => {
        const newImages = await getGifs(category);
        setIsLoading(false);
        setImages(newImages);
    }
    useEffect(() => {
        getImages();
      

    }, [])

    return {
        images,
        isLoading
    }

    
    
}

