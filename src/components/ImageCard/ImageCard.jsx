import css from './ImageCard.module.css'

export default function ImageCard({ onClick, data: { alt_description, urls: { regular, small }, }, }) {

    const handleClick = () => {
        onClick(regular)
    }
    return (<div >
        <img src={small} alt={alt_description} onClick={handleClick} className={css.item} />
    </div>
    )
}
