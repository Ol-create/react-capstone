import { configureStore } from '@redux/toolkit';
import reducer from './reducer/rootReducer';

const store = configureStore({ reducer });

export default store;