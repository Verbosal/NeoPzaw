// Apparently swearing in your code improves it so uhh :>

import React, {useState} from "react";
//const [isOpen, setIsOpen] = useState(true);

import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import * as helper from "./Helpers.tsx"

import data from "./Data.tsx"
import mappings from "./Mappings.tsx"
import conditions from "./Conditions.tsx"

// It's in the name, duh. it's a damn wrapper function
function Wrap({table, condition, name} : {table : data.universal[], condition? : condition.universal, name? : string}) {
    const tableName = helper.tableToName(table) as string
    
    // Filter & sort data based on given condition
    const dataTable = table
    .filter(helper.conditionTypeMatches(conditions.checking, condition) ?? conditions.checking.truth)
    .sort(helper.conditionTypeMatches(conditions.sorting, condition) ?? conditions.sorting.title)

    // Label data if there's a condition and it's met
    dataTable.map((data : data.universal) => {
        const labellingCondition = conditions.labelling[tableName]

        if (labellingCondition.condition()(data)) {
            data.label = labellingCondition.label
        }
    })

    // Map data to mappings
    const mappedData = dataTable.map(mappings[tableName])

    // Return with finished component
    return [<h1>{name ?? tableName}</h1>, <section>{mappedData}</section>, <hr/>];
}

function App() {
    return <>
        {/* Normal data */}
        <Wrap table={data.movies} name="Filmy"/>
        <Wrap table={data.books}  name="Książki"/>
        <Wrap table={data.albums} name="Albumy"/>
        
        {/* Filtered data */}
        <Wrap table={data.movies} condition={conditions.checking.after2010} name="Filmy wydane po 2010"/>
        <Wrap table={data.albums} condition={conditions.checking.albums.mostSongs} name="Album z największą ilością piosenek"/>

        {/* Sorted data */}
        <Wrap table={data.books}  condition={conditions.sorting.year} name="Posortowane po roku wydania"/>
    </>
}

// Dude, vscode makes it so unclear how to disable ai

export default App