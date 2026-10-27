import React, {useState} from "react";
// const [isOpen, setIsOpen] = useState(true);

import "./App.css"
import "./Helpers.tsx"

import data from "./Data.tsx"
import mappings from "./Mappings.tsx"

function Wrap({name, condition = conditions.checking.truth} : {name : string, condition? : condition.universal}) {
    console.clear()

    const table = data[name]
    .filter(conditionTypeMatches(condition, conditions.checking) ?? conditions.checking.truth)
    .sort(conditionTypeMatches(condition, conditions.sorting) ?? conditions.checking.title)

    return [table.map(mappings[name]), <hr/>];
}

function App() {
    return <>
        {/* Normal data */}
        {/* <Wrap name="movies"/>
        <Wrap name="albums"/>
        <Wrap name="books"/> */}
        
        {/* Filtered data */}
        {/* <Wrap name="movies" condition={conditions.checking.after2010}/> */}
        <Wrap name="albums" condition={conditions.checking.mostSongs}/> 

        {/* Sorted data */}
        {/* <Wrap name="books" condition={conditions.sorting.year}/> */}
    </>
}

export default App