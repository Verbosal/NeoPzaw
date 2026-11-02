import * as helper from "./Helpers.tsx"

// Typescript jest szalony
let mappings : {[name : string] : (item : any) => React.JSX.Element} = {
    movies : (movie : data.movie) => 
        <figure>
            <figcaption>{movie.title}</figcaption>
            <img src={movie.poster}/>
            <p>Rok wydania: {movie.year}</p>
            <p>Ocena: {helper.ensureRange(movie.rating, 1, 10)}</p>
            <helper.Label text={movie.label}/>
        </figure>
    ,
    books : (book : data.book) => 
        <figure>
            <figcaption>{book.title}</figcaption>
            <p>Ilość stron: {book.pages}</p>
            <img src={book.cover}/>
            <p>Rok wydania: {book.year}</p>
            <helper.Label text={book.label}/>
        </figure>
    ,
    albums : (album : data.album) => 
        <figure>
            <figcaption>{album.title}</figcaption>
            <p>Zespół: {album.band}</p>
            <p>Gatunek: {album.genre}</p>
            <img src={album.cover}/>
            <p>Rok wydania: {album.year}</p>
            <p>Ilość piosenek: {album.songs}</p>
            <helper.Label text={album.label}/>
        </figure>
    ,
}

export default mappings