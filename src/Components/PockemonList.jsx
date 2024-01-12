import { PockemonCard } from "./PockemonCard";

const PockemonList = ({ pokemon }) => {
    return(
        <div className="grid grid-cols-4 gap-4 py-8 justify-items-center">
            {
                pokemon.map((element,index) => {
                    return <PockemonCard key={index} data={element}/>
                })
            }
        </div>
    )
}

export { PockemonList }

PockemonList.defaultProps = {
    pokemon: Array(10).fill('')
}