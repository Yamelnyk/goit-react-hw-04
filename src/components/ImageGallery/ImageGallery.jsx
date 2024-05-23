
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items }) {
    return (
        <ul>
            {items.map((item) => {
                <li key={item.id}>
                    <ImageCard data={item}/>
                </li>
            })}
        </ul>
    )
}
