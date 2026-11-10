declare global {
    type title = {title : string}
    type cover = {cover? : string}
    type year  = {year : number}
    type label = {label? : string}

    interface common extends title, year, label {}

    namespace data {
        interface movie extends common {
            poster : string,
            rating : number
        }

        interface book extends common, cover {
            pages : number
        }

        interface album extends common, cover {
            band : string,
            genre : string,
            songs : number
        }

        type universal = movie | book | album
    }

    namespace condition {
        type checking = (condition : data.universal) => boolean
        type sorting = (first : data.universal, second : data.universal) => number

        type labelling = {
            condition : condition.universal,
            label : label
        }

        type universal = checking | sorting | labelling
    }
}