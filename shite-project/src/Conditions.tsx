import data from "./Data.tsx"

const conditions : {[category : string] : {[name : string] : any}} = {
    sorting : {
        title : (first : data.universal, second : data.universal) => first.title > second.title ? 1 : -1,
        year  : (first : data.universal, second : data.universal) => first.year  < second.year ? 1 : -1,
        
        albums : {
            songs : (first : data.album, second : data.album) => first.songs < second.songs ? 1 : -1
        }
    },

    checking : {
        truth : () => true, // Dummy, always returns true

        after2010 : (movie : data.movie) => movie.year > 2010,
        before2000 : (movie : data.movie) => movie.year < 2000,

        albums : {
            mostSongs : (album : data.album) => album == data.albums.sort(conditions.sorting.album.songs).at(0),
            noSongs : (album : data.album) => album.songs == 0
        },

        movies : {
            ratingAbove8 : (movie : data.movie) => movie.rating > 8
        },
    },

    labelling : {
        movies : {
            condition : () => conditions.checking.movies.ratingAbove8,
            label : "Polecany"
        },
        books : {
            condition : () => conditions.checking.before2000,
            label : "Klasyka"
        },
        albums : {
            condition : () => conditions.checking.albums.noSongs,
            label : (<p class="alert alert-info">Brak utworów</p>)
        }
    }
}

export default conditions