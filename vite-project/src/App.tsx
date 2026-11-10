import {useState} from "react"

interface task {
    id : number,
    name : string,
    state : boolean
}

interface stateFilter {
    finished : boolean,
    unfinished : boolean
}

const sortFilters = {alphabetically : "alphabetically", state : "state", original : "original"}

function Task({tasks} : {tasks : {[name : string] : any}}) {
    return <div key={tasks.task.id}>
        <input type="checkbox" onClick={(checkbox)=>{
                tasks.setTasks(tasks.map((newTask : task) => {
                    if (newTask.id == tasks.task.id) {
                        newTask.state = (checkbox.target as HTMLInputElement).checked
                    }

                    return newTask
                }))
            }}/><label>{tasks.task.name}</label>
            <button onClick={()=>{
                tasks.setTasks(tasks.filter((comparisonTask : task) => comparisonTask.id! = tasks.task.id))
            }}>Usuń</button>
    </div>
}

function Tasks({tasks, filterStates} : {tasks : {[name : string] : any}, filterStates : {[name : string] : any}}) {
    let filteredTasks = tasks.tasks.filter((task : task)=>(task.state && filterStates.state.finished) || (!task.state && filterStates.state.unfinished))
    .filter((task : task)=>task.name.match(filterStates.name))
    .sort((first : task, second : task)=>{
        switch (filterStates.sort) {
            case sortFilters.alphabetically:
                return first.name > second.name ? 1 : -1
            case sortFilters.state:
                return (first.state == second.state? 0 : (first.state ? 1 : -1))
            case sortFilters.original:
                return first.id > second.id ? 1 : -1
            default:
                return 0
    }})

    if (filteredTasks.length == 0) {
        return (<p>Brak wyników</p>)
    }

    return <ul>
        {filteredTasks.map((task : task) => <Task tasks={{task : task, setTasks : tasks.setTasks}}/>)}
    </ul>
}

const Options = ({tasks, filterStates, setFilterStates} : {tasks : {[name : string] : any}, filterStates : {[name : string] : any}, setFilterStates : {[name : string] : any}}) => (
    <main>
        <input placeholder="wyszukiwanie po nazwie" onChange={(input)=>setFilterStates.name(input.target.value)}/><br/><br/>
        <button onClick={()=>{
            tasks.setTasks(tasks.filter((task : task) => !task.state))
        }}>Usuń wykonane</button>
        <figure>
            <figcaption>Filtruj</figcaption>

            <input type="checkbox" defaultChecked onClick={(checkbox)=>setFilterStates.state({finished : (checkbox.target as HTMLInputElement).checked, unfinished : stateFilter.unfinished})}/><label>Wykonane</label>
            <input type="checkbox" defaultChecked onClick={(checkbox)=>setFilterStates.state({finished : filterStates.state.unfinished, unfinished : (checkbox.target as HTMLInputElement).checked})}/><label>Niewykonane</label>
        </figure>

        <figure>
            <figcaption>Sortuj</figcaption>

            <input type="radio" name="sort" value="alphabetically" defaultChecked onClick={()=>setFilterStates.sort(sortFilters.alphabetically)}/><label>alfabetycznie</label>
            <input type="radio" name="sort" value="state" onClick={()=>setFilterStates.sort(sortFilters.state)}/><label>wg. stanu</label>
            <input type="radio" name="sort" value="originally" onClick={()=>setFilterStates.sort(sortFilters.original)}/><label>oryginalny porządek</label>
        </figure>
    </main>
)

const App = () => {
    const [tasks, setTasks] = useState([] as task[])
    const [taskName, setTaskName] = useState("")

    const [stateFilter, setStateFilter] = useState({finished : true, unfinished : true} as stateFilter)
    const [sortFilter, setSortFilter] = useState(sortFilters.alphabetically)
    const [nameFilter, setNameFilter] = useState("")

    const filterStates = {state : stateFilter, name : nameFilter, sort : sortFilter}
    const setFilterStates = {state : setStateFilter, name : setNameFilter, sort : setSortFilter}

    return <>
        <figure>Liczba niewykonanych: <figcaption>{tasks.filter((task : task) => !task.state).length}</figcaption></figure>

        <Options tasks={{tasks : tasks, setTasks : setTasks}} filterStates={filterStates} setFilterStates={setFilterStates}/>

        <input onChange={(input)=>setTaskName(input.target.value)} placeholder="task's name"></input>
        
        {taskName.length != 0 && <button onClick={()=>{
                setTasks(tasks => [{id : tasks.length, name : taskName, state : false}, ...tasks])
        }}>Dodaj zadanie</button>}

        <Tasks tasks={{tasks : tasks, setTasks : setTasks}} filterStates={filterStates}/>
    </>
}

export default App