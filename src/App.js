import React from 'react';
import SearchPage from "./components/Search/SearchPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ListingPage } from './components/Listing/ListingPage';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <SearchPage/>
                </Route>
                <Route path="/search">
                    <ListingPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
