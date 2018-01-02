import { createStore } from 'redux';
import Reducers from './Reducers';


const initialState = { 
    items: [],
    total: 0            
                     }
let Store = createStore(Reducers, initialState);

export default Store;