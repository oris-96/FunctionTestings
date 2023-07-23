import { Games } from "../App"

interface Props {
    results: Games[],
    error: string
}


const DisplayResults = ( {results, error}: Props) => {

    return <div>
        {error && <h1>{ error.toUpperCase() }</h1>}
        {results.map(result => (
            <h1 key={result.id}>{result.name }</h1>
        ))}
    </div>
}

export default DisplayResults