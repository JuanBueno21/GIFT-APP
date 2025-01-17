import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs"

const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [loading, setIsLoading] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    };

    getImages();
  }, [category]);

  return ({
    images,
    loading,
  }
  )
}

export default useFetchGifs;