/*import { createStore } from 'redux';
import rootReducer from './reduxtutorial/reducers';

const store = createStore(rootReducer);

export default store;
*/

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reduxtutorial/slices/plusminusSlies';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        devTools: process.env.NODE_ENV !== 'production'
    }
});
export default store;