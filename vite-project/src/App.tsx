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

function Task(task : task, tasks : task[], setTasks : any) {
    return <div key={task.id}>
        <input type="checkbox" onClick={(checkbox)=>{
                let newTasks = tasks.slice()
                newTasks[task.id].state = (checkbox.target as HTMLInputElement).checked
                setTasks(newTasks)
            }}/><label>{task.name}</label>
            <button onClick={()=>{
                setTasks(tasks.filter((comparisonTask : task)=>comparisonTask.id!=task.id))
            }}>Usuń</button>
    </div>
}

function Tasks({tasks, setTasks, stateFilter, sortFilter, nameFilter} : any) {
    let filteredTasks = tasks.filter((task : task)=>(task.state && stateFilter.finished) || (!task.state && stateFilter.unfinished))
    .sort((first : task, second : task)=>{
        switch (sortFilter) {
            case sortFilters.alphabetically:
                return first.name > second.name ? 1 : -1
            case sortFilters.state:
                return first.state ? (!second.state ? 1 : 0) : -1
            case sortFilters.original:
                return first.id > second.id ? 1 : -1
            default:
                return 0
    }}).filter((task : task)=>task.name.match(nameFilter))

    if (filteredTasks.length == 0) {
        return (<p>Brak wyników</p>)
    }

    return filteredTasks.map((task : task)=>Task(task, tasks, setTasks))
}

export default () => {
    const [tasks, setTasks] = useState([] as task[])
    const [taskName, setTaskName] = useState("")
    const [stateFilter, setStateFilter] = useState({finished : true, unfinished : true} as stateFilter)
    const [sortFilter, setSortFilter] = useState(sortFilters.alphabetically)
    const [nameFilter, setNameFilter] = useState("")

    return <>
        <figure>Liczba niewykonanych: <figcaption>{tasks.filter((task : task) => !task.state).length}</figcaption></figure>

        <main>
            <input placeholder="wyszukiwanie po nazwie" onChange={(input)=>setNameFilter(input.target.value)}/><br/><br/>
            <button onClick={()=>{
                setTasks(tasks.filter((task : task) => !task.state))
            }}>Usuń wykonane</button>
            <figure>
                <figcaption>Filtruj</figcaption>

                <input type="checkbox" defaultChecked onClick={(checkbox)=>setStateFilter({finished : (checkbox.target as HTMLInputElement).checked, unfinished : stateFilter.unfinished})}/><label>Wykonane</label>
                <input type="checkbox" defaultChecked onClick={(checkbox)=>setStateFilter({finished : stateFilter.unfinished, unfinished : (checkbox.target as HTMLInputElement).checked})}/><label>Niewykonane</label>
            </figure>

            <figure>
                <figcaption>Sortuj</figcaption>

                <input type="radio" name="sort" value="alphabetically" defaultChecked onClick={()=>setSortFilter(sortFilters.alphabetically)}/><label>alfabetycznie</label>
                <input type="radio" name="sort" value="state" onClick={()=>setSortFilter(sortFilters.state)}/><label>wg. stanu</label>
                <input type="radio" name="sort" value="originally" onClick={()=>setSortFilter(sortFilters.original)}/><label>oryginalny porządek</label>
            </figure>
        </main>

        <input onChange={(input)=>setTaskName(input.target.value)} placeholder="task's name"></input>
        
        {taskName.length != 0 && <button onClick={()=>{
                setTasks(tasks => [{id : tasks.length, name : taskName, state : false}, ...tasks])
        }}>Dodaj zadanie</button>}

        <ul>
            <Tasks tasks={tasks} setTasks={setTasks} stateFilter={stateFilter} sortFilter={sortFilter} nameFilter={nameFilter}/>
        </ul>
    </>
} // komentarz