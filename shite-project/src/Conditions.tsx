export default {
    sorting : {
        title : (first : data.universal, second : data.universal) => first.title > second.title ? 1 : -1,
        year  : (first : data.universal, second : data.universal) => first.year  < second.year ? 1 : -1,
    },

    checking : {
        truth     : () => true, // Dummy, always returns true
        after2010 : (movie : data.movie) => movie.year > 2010,
        mostSongs : (album : data.album) => album.songs == 19 // TO DO!!!
    },

    labelling : {

    }
} satisfies {[name : string] : {[name : string] : condition.universal}}