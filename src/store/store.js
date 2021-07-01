import { createStore } from "redux";
import reducer from "../reducer/index";
import { persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'react-storage', // 放入localStorage中的key
    storage: storage
};

export default createStore(persistReducer(persistConfig, reducer));
