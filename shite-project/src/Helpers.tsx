import data from "./Data.tsx"

export const conditionTypeMatches = (type : any, condition? : condition.universal, ) : any => condition !== undefined && condition.name in type ? condition : undefined
export const ensureRange = (number : number, minimum : number = -Infinity, maximum : number = Infinity) => Math.min(maximum, Math.max(minimum, number))
export const Label = ({text} : {text? : string}) => text !== undefined ? <label>{text}</label> : <></>
export const swapKeysAndValues = (obj : any) => Object.fromEntries(Object.entries(obj).map(a => a.reverse()))
export const tableToName = (table : any) : string => swapKeysAndValues(data)[table]