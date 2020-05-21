import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SearchPage from "./components/Search/SearchPage";


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/">
                    <SearchPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
