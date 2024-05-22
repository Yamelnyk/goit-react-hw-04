import { useEffect, useState } from "react";
import { getImages } from "../../api";

export default function App() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function fetchImages() {
            const fetchedImages = await getImages();
            setImages(fetchedImages)
        } fetchImages();
    }, []);

    return (
        <h1></h1>
    );
    
}
