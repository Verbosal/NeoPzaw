import "./App.css"
import data from "./Data.tsx"

// Typescript jest szalony
const mappings : {[key: string]: (arg0: any) => void} = {
    movies : (movie : movie) => 
        <figure>
            <figcaption>Tytuł: {movie.title}</figcaption>
            <img src={movie.poster}/>
            <p>Rok wydania: {movie.year}</p>
        </figure>
    ,
    books : (book : book) => 
        <figure>
            <figcaption>{book.title}</figcaption>
            <figcaption>Ilość stron: {book.pages}</figcaption>
            <img src={book.cover}/>
            <p>Rok wydania: {book.year}</p>
        </figure>
    ,
    albums : (album : album) => 
        <figure>
            <figcaption>Tytuł: {album.title}</figcaption>
            <figcaption>Zespół: {album.band}</figcaption>
            <figcaption>Gatunek: {album.genre}</figcaption>
            <img src={album.cover}/>
            <p>Rok wydania: {album.year}</p>
        </figure>
    ,
}

// KOCHAM OPCJONALJNE PAREMTERY!!
function Wrap({name, limit} : {name : string, limit? : number}) {
    return data[name].map(mappings[name])
}

export default () => {
    return <>
        <Wrap name="movies"/>
        <Wrap name="albums"/>
        <Wrap name="books"/>
    </>
};