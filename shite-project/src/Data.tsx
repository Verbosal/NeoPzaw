const movies : data.movie[] = [
    {
        title : "The Matrix",
        poster : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEbMWiF0tNgDKHYSCEzkKjmfz0nXiRUWcoPyBpQzXWJAWAKEXj_n86CmvB&s=10",
        year : 1999,
        rating : 4
    },
    {
        title : "Star Wars I: The Phantom Menace",
        poster : "https://m.media-amazon.com/images/M/MV5BODVhNGIxOGItYWNlMi00YTA0LWI3NTctZmQxZGUwZDEyZWI4XkEyXkFqcGc@._V1_.jpg",
        year : 1999,
        rating : 1
    },
    {
        title : "Taxi 3",
        poster : "https://fwcdn.pl/fpo/41/98/34198/7518096_1.3.jpg",
        year : 2003,
        rating : 10
    },
    {
        title : "the movie released after 2010",
        poster : "https://fwcdn.pl/fpo/41/98/34198/7518096_1.3.jpg",
        year : 2011,
        rating : 2
    },
    {
        title : "the movie released after 2010 2",
        poster : "https://fwcdn.pl/fpo/41/98/34198/7518096_1.3.jpg",
        year : 2012,
        rating : 3
    }
]

const books : data.book[] = [
    {
        title : "1984",
        cover : "image.png",
        year : 1980,
        pages : 1999
    },
    {
        title : "1984 2",
        cover : "image.png",
        year : 2001,
        pages : 1999
    },
    {
        title : "Abc",
        cover : "image.png",
        year : 2000,
        pages : 1999
    },
    {
        title : "Efg",
        cover : "image.png",
        year : 2000,
        pages : 1999
    }
]

const albums : data.album[] = [
    {
        cover : "image.png",
        title : "Death metal",
        band : "hi",
        genre : "hi",
        year : 1999,
        songs : 29
    },
    {
        cover : "image.png",
        title : "Hard metal",
        band : "hi",
        genre : "hi",
        year : 1999,
        songs : 300
    },
    {
        cover : "image.png",
        title : "Soft metal",
        band : "hi",
        genre : "hi",
        year : 1999,
        songs : 19
    },
    {
        cover : "image.png",
        title : "Mineral ore",
        band : "hi",
        genre : "hi",
        year : 1999,
        songs : 0
    }
]

const indexed : {[name : string] : data.universal[]} = {movies, books, albums}

export default indexed