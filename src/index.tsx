import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import RootStore from "./Stores/rootStore/rootStore";


export const RootStoreContext = createContext<RootStore>(new RootStore());

ReactDOM.render(
    <RootStoreContext.Provider value={new RootStore()}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </RootStoreContext.Provider>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
