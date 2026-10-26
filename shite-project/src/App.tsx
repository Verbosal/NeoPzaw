import {useState} from "react";
// const [isOpen, setIsOpen] = useState(true);

import data from "./Data.tsx"
import "./App.css"

const truth : condition = ()=>true

const sorts : {[name : string] : sortingCondition} = {
    title : (first : universal, second : universal) => first.title > second.title,
    year  : (first : universal, second : universal) => first.year  > second.year
}

// Typescript jest szalony
const mappings : {[key: string]: (data: any) => void} = {
    movies : (movie : movie) => 
        <figure>
            <figcaption>Tytuł: {movie.title}</figcaption>
            <img src={movie.poster}/>
            <p>Rok wydania: {movie.year}</p>
            <p>Ocena: {movie.rating}</p>
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
function Wrap({name, condition=truth, sortCondition=false} : {name : string, condition? : any, sortCondition? : boolean}) {
    const table = data[name]
    .filter(!sortCondition && condition ? condition : truth)
    .sort(sortCondition && condition ? condition : sorts.title)

    return [table.map(mappings[name]), <hr/>];
}

function App() {
    return <>
        {/* Normal data */}
        <Wrap name="movies"/>
        <Wrap name="albums"/>
        <Wrap name="books"/>
        
        {/* Filtered data */}
        <Wrap name="movies" condition={(movie : movie) => movie.year > 2010}/>

        {/* Sorted data */}
        {/* <Wrap name="books" condition={sorts.year}/>
        YET TO WORK!
        to-do: add automatic detection of type
        (check whether it's sortingcondition) */}
    </>
}

export default App