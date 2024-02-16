import './Search.css'
import poisk from "../../../public/Header/Search.png"

export default function Search({ query, onChangeQuery }) {
    return (
        <>
            <div className="search">
            <img src={poisk} alt="" /> 
                <input type="search" placeholder='Поиск...' name="search" value={query} onChange={(event) => onChangeQuery(event)} />
            </div>

        </>
    )
}