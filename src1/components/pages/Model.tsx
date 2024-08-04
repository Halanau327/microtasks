import {adidasArr, AdidasItem} from "./Adidas";
import {pumaArr, PumaItem} from "./Puma";
import {useParams} from "react-router-dom";
import {Error404} from "./Error404";

type CrossModels = {
    [key: string] : (AdidasItem[] | PumaItem[])
}

const CrossModels: CrossModels = {
    adidas: adidasArr,
    puma: pumaArr,
}

export const Model = () => {

    const {model, id} = useParams<{model: string, id: string}>()
    console.log(model)

    const currentModel = model ? CrossModels[model].find(el => el.id === Number(id)) : null

    return (


         <div style={{display:'flex', flexDirection: 'column', textAlign: 'center', marginBottom: '15px'}}>

             {currentModel ? <>

             <h2>{currentModel.model}</h2>
                 <span style={{marginBottom: '15px'}}>{currentModel.collection}</span>
                 <span style={{marginBottom: '15px'}}>{currentModel.price}</span>

                 <img src={currentModel.picture} alt={currentModel.model} style={{width:"600px", height: 'auto', marginLeft: "auto", marginRight: 'auto', marginTop: '0', marginBottom: '0' }}/>


             </> : <Error404/>}




             {/*{adidasArr[id] ?*/}
             {/*    <>*/}
             {/*        <h2>{adidasArr[id].model}</h2>*/}
             {/*        <span style={{marginBottom: '15px'}}>{adidasArr[id].collection}</span>*/}
             {/*        <span style={{marginBottom: '15px'}}>{adidasArr[id].price}</span>*/}
             {/*        <img src={adidasArr[id].picture}*/}
             {/*             alt={adidasArr[id].model}*/}
             {/*             style={{*/}
             {/*                 width: '600px',*/}
             {/*                 height: 'auto',*/}
             {/*                 marginLeft: 'auto',*/}
             {/*                 marginRight: 'auto',*/}
             {/*                 marginTop: '0',*/}
             {/*                 marginBottom: '0'*/}
             {/*             }}*/}
             {/*        />*/}
             {/*    </> : <Error404/>}*/}


         </div>
    )
}