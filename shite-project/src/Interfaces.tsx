declare global {
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
}