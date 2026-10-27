import "./Helpers.tsx"

// Typescript jest szalony
export default {
    movies : (movie : data.movie) => 
        <figure>
            <figcaption>Tytuł: {movie.title}</figcaption>
            <img src={movie.poster}/>
            <p>Rok wydania: {movie.year}</p>
            <p>Ocena: {ensureRange(movie.rating, 1, 10)}</p>
        </figure>
    ,
    books : (book : data.book) => 
        <figure>
            <figcaption>{book.title}</figcaption>
            <figcaption>Ilość stron: {book.pages}</figcaption>
            <img src={book.cover}/>
            <p>Rok wydania: {book.year}</p>
        </figure>
    ,
    albums : (album : data.album) => 
        <figure>
            <figcaption>Tytuł: {album.title}</figcaption>
            <figcaption>Zespół: {album.band}</figcaption>
            <figcaption>Gatunek: {album.genre}</figcaption>
            <img src={album.cover}/>
            <p>Rok wydania: {album.year}</p>
            <p>Ilośc piosenek: {album.songs}</p>
        </figure>
    ,
} satisfies {[key: string]: (data: any) => React.JSX.Element}