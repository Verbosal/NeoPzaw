export const Details = ({data} : {data : data.universal}) => <button class="btn btn-primary" onClick={()=>{console.log("Pokaż szczegóły dla " + data.title)}}>Zobacz szczegóły</button>
export const Label = ({text} : {text? : string}) => text !== undefined ? <label>{text}</label> : <></>
export const Input = ({name} : {name : string}) => <input
  type="text"
  className="form-control"
  placeholder="Wpisz tytuł"
  id={name = "-search"}
  onChange={(element)=>{console.log(element.target.value)}}
/>