declare global {
    namespace data {
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
            year : number,
            songs : number
        }

        type universal = movie | book | album
    }

    namespace condition {
        type checking = (condition : data.universal) => boolean
        type sorting = (first : data.universal, second : data.universal) => number

        interface labelling extends checking {label? : string}

        type universal = checking | sorting | labelling
    }
}