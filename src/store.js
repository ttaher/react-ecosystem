import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import { todos } from './todos/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = {
    todos,
};

const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
};
const rootReducer = combineReducers(reducers);
const presistedReducer = persistReducer(persistConfig, rootReducer);
export const configureStore = () =>
    createStore(
        presistedReducer,
        composeWithDevTools(applyMiddleware(thunk))
    );