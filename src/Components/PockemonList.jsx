import { PockemonCard } from "./PockemonCard";

const PockemonList = ({ pokemon }) => {
    return(
        <div className="grid grid-cols-4 gap-4 py-8 justify-items-center">
            {
                pokemon.map(element => {
                    return <PockemonCard 
                    key={element.id} 
                    data={element} 
                    image={element.sprites.front_default} 
                    name={element.name} 
                    types={element.types} 
                    id={element.id}
                    favorite={element.favorite}
                    />
                })
            }
        </div>
    )
}

export { PockemonList }

PockemonList.defaultProps = {
    pokemon: Array(10).fill('')
}