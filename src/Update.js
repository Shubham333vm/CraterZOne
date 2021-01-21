import React,{useContext} from 'react'
import stateContext from './Context/stateContext'

export default function Update({data,id}) {

    const [state,dispatch] = useContext(stateContext)
    data.id=id;
    // dispatch({
    //   type:"ADD_TO_LOCATION",
    //   location:data,
    //   index:id
    // })

    state.push(data)
    console.log(state +"state----------")

    return (
        <div>
            {console.log(data?.name + " --------  "+ id)
            }
        </div>
    )
}
