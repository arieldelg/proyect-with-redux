import { Card } from "antd";
import { StartButton } from "./StartButton";
import Meta from "antd/es/card/Meta";
import { useDispatch } from "react-redux";
import { setFavorite } from "../slices/dataSlice";

const PockemonCard = ({ name, image, types, id, favorite }) => {
    const dispatch = useDispatch()
    const typeName = types.map(element => element.type.name).join(', ')
    const handleOnFavorite = () => {
        dispatch(setFavorite({ pokemonId: id}))
    }
    return <Card 
    className="w-56"
    title= {name}
    cover={<img src={image} alt={name}/>}
    extra={<StartButton isFavorite={favorite} onClick={handleOnFavorite}/>}
    >        
        <Meta description={typeName} title='PokeInfo' />      
    </Card>
}

export { PockemonCard }