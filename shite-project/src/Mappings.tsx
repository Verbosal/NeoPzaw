import * as helper from "./Helpers.tsx"
import * as components from "./Components.tsx"

// Typescript jest szalony
let mappings : {[name : string] : (item : any) => React.JSX.Element} = {
    movies : (movie : data.movie) => 
        <figure class="card" onClick={()=>{console.log("Wybrano film: " + movie.title)}}>
            <figcaption class="card-title">{movie.title}</figcaption>
            <div class="card-body">
                <img src={movie.poster}/>
                <p>Ocena: {helper.ensureRange(movie.rating, 1, 10)}</p>
                <p>Rok wydania: {movie.year}</p>
                <components.Details data={movie}/>
            </div>
        </figure>
    ,
    books : (book : data.book) => 
        <figure class="card">
            <figcaption class="card-title">{book.title}</figcaption>
            <div class="card-body">
                <p>Ilość stron: {book.pages}</p>
                <img src={book.cover}/>
                <p>Rok wydania: {book.year}</p>
                <components.Label text={book.label}/>
            </div>
        </figure>
    ,
    albums : (album : data.album) => 
        <figure class="card">
            <figcaption class="card-title">{album.title}</figcaption>
            <div class="card-body">
                <p>Zespół: {album.band}</p>
                <p>Gatunek: {album.genre}</p>
                <img src={album.cover}/>
                <p>Rok wydania: {album.year}</p>
                <p>Ilość piosenek: {album.songs}</p>
                <components.Label text={album.label}/>
            </div>
        </figure>
    ,
}

export default mappings