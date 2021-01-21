import React,{useReducer} from "react"
import stateContext from "../Context/stateContext"

export const StateProvider = ({initialState, reducer, children})=>(
<stateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
</stateContext.Provider>  
)