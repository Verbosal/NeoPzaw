import React, {useState} from "react"
import "bootstrap"

interface character {
    name : string,
    race : string,
    class : string,
    level : number,
    description : string,
    public : boolean
}

const races = ["Człowiek", "Elf", "Krasnolud", "Ork"]
type race = typeof races // ponieważ nie da się to zrobić w jednej linii afaik

const characterClasses = ["Wojownik", "Mag", "Łucznik"]
type characterClass = typeof characterClasses // CZEMU NIE DA SIĘ W JEDNEJ LINII

function Characters({characters} : {characters : character[]}) {
    // Jeśli niepubliczne postacie miały by być schowane:
    // characters.filter((character : character) => character.public)

   return <>
        {characters.map((character : character) => <figure key={character.name}>
            <figcaption>{character.name}</figcaption>

            <h2>Opis</h2>
            <p>{character.description}</p>

            <h2>Rasa</h2>
            <p>{character.race}</p>

            <h2>Klasa</h2>
            <p>{character.class}</p>

            <h2>Poziom</h2>
            <p>{character.level}</p>

            <h2>Publiczna</h2>
            <p>{character.public ? "Tak" : "Nie"}</p>
        </figure>)}
   </>
}

function CharacterForm({characters, setCharacters} : {characters : character[], setCharacters : any}) {
    const [form, setForm] = useState<character>({
        name : "",
        race : races[0],
        class : characterClasses[0],
        level : 1,
        description : "",
        public : true
    })

    const [error, setError] = useState(null as string | null)

    function validateForm(event : React.SyntheticEvent<HTMLFormElement>) {
        function performChecks() {
            if (characters.find((character : character) => form.name == character.name)) {
                return "A character with that name already exists!"
            }

            if (form.name.length == 0) {
                return "No character name given!"
            }

            if (form.name.length < 3) {
                return "Character name is too short!"
            }

            if (form.name.length > 20) {
                return "Character name is too long!"
            }

            if (form.description.length > 200) {
                return "Character description is too long!"
            }

            return null
        }

        const error = performChecks()
        setError(error)

        return error
    }

    function createCharacter(event : React.SyntheticEvent<HTMLFormElement>) {
        event.preventDefault();

        let error = validateForm(event)

        if (!error) {
            setCharacters([...characters, form])
        }
    }

    function updateForm(event : React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        const element = event.currentTarget

        setForm(previousForm => {
            return {
                ...previousForm,
                [element.name]: element.value
            }
        })
    }

    return <form onChange={validateForm} onSubmit={createCharacter}>
        <input type="text" name="name" placeholder="Imię postaci" minLength={3} maxLength={20} value={form.name} onChange={updateForm}/>
        
        <br/>

        <label htmlFor="race">Rasa</label>
        <select name="race" defaultValue={form.race} onChange={updateForm}>
            {races.map(race => <option key={race}>{race}</option>)}  
        </select>

        <br/>

        <label htmlFor="class">Klasa</label>
        <select name="class" defaultValue={form.class} onChange={updateForm}>
            {characterClasses.map(characterClass => <option key={characterClass}>{characterClass}</option>)}  
        </select>

        <br/>

        <label htmlFor="level">Poziom</label>
        <input type="range" name="level" min={1} max={100} value={form.level} onChange={updateForm}/>

        <br/>

        <label htmlFor="description">Opis</label>
        <textarea value={form.description} name="description" maxLength={200} onChange={updateForm}/>

        <br/>

        <label htmlFor="public">Postać publiczna</label>
        <input type="checkbox" defaultChecked={form.public} name="public" onChange={updateForm}/>

        <br/>

        <button type="submit">Utwórz postać</button>

        <br/>
        
        {error && <p>{error}</p>}
    </form>
}

const App = () => {
    const [characters, setCharacters] = useState([] as character[])

    return <>
        <CharacterForm characters={characters} setCharacters={setCharacters}/>
        <br/>
        <Characters characters={characters}/>
    </>
}

export default App