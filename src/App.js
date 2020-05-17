import React from 'react';
import SearchPage from "./components/Search/SearchPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <SearchPage/>
                </Route>
                <Route path="/search">
                    <div>
                        Listing...
                    </div>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
