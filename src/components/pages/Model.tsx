import {adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";

export const Model = () => {
    const params = useParams()
    const id = Number(params.id)
    return (
        <div>
            <h2>{adidasArr[id].picture}</h2>
        </div>
    )
}