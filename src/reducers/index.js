import { combineReducers } from 'redux';
import bookLists from './reducer_booklist'
import authorsList from './reducers_authorslist'
import activeBook from './reducers_activeBook'

const combinedReducer = combineReducers({
    bookLists,
    authorsList,
    activeBook,
})

export default combinedReducer