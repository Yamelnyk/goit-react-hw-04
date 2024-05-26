
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items, isOpen}) {

    return (
        <ul>
            {items.map((item) => {
                return (<li key={item.id}>
                   <ImageCard data={item} onClick={isOpen} />
                </li>) 
            })}
        </ul>
    )
}
