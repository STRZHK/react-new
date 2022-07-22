import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";

import {App} from './App';
import {setupStore} from "./redux";

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);