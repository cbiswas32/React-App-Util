/* OLD METHOD
import { incNumber, decNumber } from "../actions";

const initialState=10;

const upDownReducer = (state = initialState, action) => 
{
    switch(action.type){
        case 'INCREMENT' :
            return state + action.payload
        
        case 'DECREMENT' : 
            return state - action.payload
        
        default: 
            return state
        
    }
}

export default upDownReducer;
*/