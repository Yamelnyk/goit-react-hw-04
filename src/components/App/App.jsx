import { useEffect, useState } from "react";
import { getImages } from "../../api";
import ImageGallery from "../ImageGallery/ImageGallery";

export default function App() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function fetchImages() {
            const fetchedImages = await getImages();
            setImages(fetchedImages)
        } fetchImages();
    }, []);

    return (
        <div>
           {images.length > 0 && <ImageGallery items={images}/>} 
        </div>
    );
    
}


