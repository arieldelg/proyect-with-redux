import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";

const PockemonCard = ({ data }) => {
    return <Card 
    className="w-56"
    title= {data}
    cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt={data}/>}
    extra={<StarOutlined/>}
    >
        <Meta description='fire, mafic'/>
    </Card>
}

export { PockemonCard }