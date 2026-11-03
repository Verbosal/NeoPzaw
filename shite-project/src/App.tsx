import {createElement, useState} from "react"

interface task {
    name : string,
    state : "wykonane" | "niewykonane"
}

function Task(task : task, state, setState) {
    return <>
        <input type="checkbox" onChange={(checkbox)=>setState}/><p key={task.name}>{task.name}</p>
    </>
}

function Tasks() {
    const [tasks, setTasks] = useState([] as task[])
    const [state, setState] = useState("niewykonane")

    let setName = ""

    return <>
        <figure>Liczba niewykonanych: <figcaption>{tasks.filter((task : task)=>task.state == "niewykonane").length}</figcaption></figure>

        <main>
            <figure>
                <figcaption>Filtruj</figcaption>

                <input type="checkbox" defaultChecked/><label>Wykonane</label>
                <input type="checkbox" defaultChecked/><label>Niewyknonane</label>
            </figure>

            <figure>
                <figcaption>Sortuj</figcaption>

                <input type="radio" name="sort" value="alphabetically" defaultChecked/><label>alfabetycznie</label>
                <input type="radio" name="sort" value="state"/><label>wg. stanu</label>
                <input type="radio" name="sort" value="originally"/><label>oryginalny porządek</label>
            </figure>
        </main>

        <input onChange={(input)=>setName = input.target.value} placeholder="task's name"></input>
        <button onClick={()=>{
            setTasks([...tasks, {name : setName, state : "niewykonane"}])
        }}>Add task</button>
        <ul>
            {tasks.map((task)=>Task(task, state, setState))}
        </ul>
    </>
}

export default () => <Tasks/>