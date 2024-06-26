import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'

export default function SearchBar({ onSearch }) {
  
    const handleSubmit = (event) => {
      event.preventDefault();      

      const query = event.target.elements.query.value;

      if (query.trim() === "") {
        toast.error('Введіть текст для пошуку зображення');
        return
      }

      onSearch(query);

      event.target.reset();
    }
    
    return (
      <header className={css.header}>
        <form onSubmit={handleSubmit} className={css.form}>
          <input
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            className={css.input}
          />
          <button type="submit" className={css.btn}>Search</button>
          <Toaster />
        </form>
      </header>
    )
}
