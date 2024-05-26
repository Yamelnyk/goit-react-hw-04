import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({ onSearch }) {
  
    const handleSubmit = (event) => {
      event.preventDefault();      

      const query = event.target.elements.query.value;

      if (query.trim() === "") {
        toast.error('Введіть текст для пошуку зображення');
        return
      }

      onSearch(query);

      // onSearch({
      //   query: event.target.elements.query.value,
      // });

      console.log(event.target.elements.query.value)
      event.target.reset();
    }
    
    return (
      <header>
        <form onSubmit={handleSubmit}>
          <input
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
          <Toaster />
        </form>
      </header>
    )
}
