import React from 'react';
import SearchPage from "./Search/SearchPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

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
