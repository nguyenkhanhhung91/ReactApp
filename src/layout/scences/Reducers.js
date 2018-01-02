const Reducers = (state , action) => {
  switch(action.type) {
    case 'FETCH_DATA':
        let initstate = Object.assign({}, state, {
        items: action.items,
        total: action.items.length
      })        
        return initstate
    case 'CREATE_CARD':
        let number = state.total;         
        let newArray = Object.assign([], state.items);
        newArray.push(action.item);  
        let newState = Object.assign({}, state, {
        items:  newArray,
        total: number+1
      })      
      return newState
    case 'EDIT_CARD':        
        let editArray = Object.assign([], state.items);
        editArray[action.item.index].header=action.item.header;
        editArray[action.item.index].message=action.item.message;
        let editState = Object.assign({}, state, {
        items:  editArray,
      })      
      return editState
     case 'DELETE_CARD':     
        let number2 = state.total;        
        let deleteArray = Object.assign([], state.items);
        deleteArray.splice(action.index, 1);
        let deleteState = Object.assign({}, state, {
        items: deleteArray,
        total: number2-1    
      })      
      return deleteState      
    default:
      return state
  }
}

export default Reducers;