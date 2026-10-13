import "./App.css"

interface movie {
    poster : string,
    title : string,
    year : number
}

interface book {
    cover : string,
    title : string,
    year : number,
    pages : number
}

interface album {
    cover : string,
    title : string,
    band : string,
    genre : string,
    year : number
}

const movies : movie[] = [
    {
        poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEbMWiF0tNgDKHYSCEzkKjmfz0nXiRUWcoPyBpQzXWJAWAKEXj_n86CmvB&s=10",
        title : "The Matrix",
        year : 1999
    },
    {
        poster : "https://m.media-amazon.com/images/M/MV5BODVhNGIxOGItYWNlMi00YTA0LWI3NTctZmQxZGUwZDEyZWI4XkEyXkFqcGc@._V1_.jpg",
        title : "Star Wars I: The Phantom Menace",
        year : 1999
    },
    {
        poster : "https://fwcdn.pl/fpo/41/98/34198/7518096_1.3.jpg",
        title : "Taxi 3",
        year : 2003
    }
]

const books : book[] = [
    {
        cover : "hi",
        title : "hi",
        year : 1999,
        pages : 1999
    },
    {
        cover : "hi",
        title : "hi",
        year : 1999,
        pages : 1999
    },
    {
        cover : "hi",
        title : "hi",
        year : 1999,
        pages : 1999
    }
]

const albums : album[] = [
    {
        cover : "hi",
        title : "hi",
        band : "hi",
        genre : "hi",
        year : 1999
    },
    {
        cover : "hi",
        title : "hi",
        band : "hi",
        genre : "hi",
        year : 1999
    },
]

export default () => {
    return [
        movies.map(movie => 
            <figure>
                <figcaption>Tytuł: {movie.title}</figcaption>
                <img src={movie.poster}/>
                <p>Rok wydania: {movie.year}</p>
            </figure>
        ),
        books.map(book => 
            <figure>
                <figcaption>{book.title}</figcaption>
                <figcaption>Ilość stron: {book.pages}</figcaption>
                <img src={book.cover}/>
                <p>Rok wydania: {book.year}</p>
            </figure>
        ),
        albums.map(album => 
            <figure>
                <figcaption>Tytuł: {album.title}</figcaption>
                <figcaption>Zespół: {album.band}</figcaption>
                <figcaption>Gatunek: {album.genre}</figcaption>
                <img src={album.cover}/>
                <p>Rok wydania: {album.year}</p>
            </figure>
        )
    ]
};