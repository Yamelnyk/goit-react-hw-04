import { useEffect, useState } from "react";
import { getImages } from "../../api";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import SearchBar from "../SearchBar/SearchBar";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
// import Modal from 'react-modal';
import ImageModal from "../ImageModal/ImageModal";



export default function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");



    useEffect(() => {
        if (searchQuery.trim() === "") {
        return
        }

        async function fetchImages() {
            try {
                setIsLoading(true);
                setIsError(false);
                const data = await getImages(searchQuery, page);
                setImages((prevState) => [...prevState, ...data]);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }
        fetchImages();
        
    }, [page, searchQuery])

    const handleSearch = async (searchImg) => {
        setSearchQuery(searchImg);
        setPage(1);
        setImages([]);

    }

    const handleLoadMore = async () => {

        setPage(page + 1);
    }
    
    function openModal(small) {
        setSelectedImage(small);
        setIsOpen(true);
        
    }

    function closeModal() {
        setIsOpen(false);
        // selectedImage();
  }


    
    return (
        <div>
            <SearchBar onSearch={handleSearch}/>
            {images.length > 0 && <ImageGallery items={images} isOpen={openModal}/>}
            {isLoading && <Loader />} 
            {isError && <ErrorMessage />}
            {images.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
            <ImageModal isOpen={modalIsOpen} onClose={closeModal} />
        </div>
    );
    
}


