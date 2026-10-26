declare global {
    interface movie {
        title : string,
        poster : string,
        year : number,
        rating : number
    }

    interface book {
        title : string,
        cover : string,
        year : number,
        pages : number
    }

    interface album {
        title : string,
        cover : string,
        band : string,
        genre : string,
        year : number
    }

    interface universal extends movie, book, album {}

    type condition = (condition : universal)=>boolean
    type sortingCondition = (first : universal, second : universal)=>boolean

    interface labellingCondition extends condition {label : string}
}