import {  CREATE_POST_S} from '../Type'


const initialstate = {
    user : [],
}
const reducer = function(state = initialstate,action){
    console.log('00066',action.payload)
    switch (action.type){
      case  CREATE_POST_S:
        return{
            ...state,
            user: action.payload
        }
        default : return state
    }

    
}
export default reducer;