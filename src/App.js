import React, {useEffect} from 'react';
import TopBar from "./components/TopBar/TopBar";
import Routes from './routes';
import {fetchUserAsync} from "./store/actions/actions";
import {useDispatch} from "react-redux";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUserAsync())
    }, [])


    return (
        <div>
            <TopBar/>
            <Routes/>
        </div>
    );
}

export default App;
