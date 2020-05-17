import React from 'react';

import FastSearchTags from "./FastSearchTags";
import ChooseCityControlAddon from "./ChooseCityControlAddon";
import InputSearchTags from "./InputSearchTags";
import GoButton from "./GoButton";

import { searchPlaces } from "../../requests/search";
import { Redirect } from 'react-router-dom';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInputValue: "",
            searchCityName: "",
            searchCityID: 1,
            isLoading: false,
            isLoaded: false,
        }        
        this.handleInputUpdate = this.handleInputUpdate.bind(this);
        this.handleGoButtonClick = this.handleGoButtonClick.bind(this);
    }

    handleInputUpdate(event) {
        this.setState({
            searchInputValue: event.target.value,
        });
    }

    handleCityUpate(event) {
        this.setState({
            searchCityName: "Kazan",
            searchCityID: 1,
        });
    }


    handleGoButtonClick(event) {
        this.setState({
            isLoading: true,
        });
        console.log("will search with " + this.state.searchInputValue);

        searchPlaces(this.state.searchInputValue, this.state.searchCityID).then((result) => {
            console.log(result);
            this.setState({
                isLoading: false,
                isLoaded: true,
            });
        }, (error) => {
            console.log(error);
        });

    }

    render() {
        if (this.state.isLoaded) {
            return (
                <Redirect push to={"/search?city_id=" + this.state.searchCityID + "&query=" + this.state.searchInputValue}/>
            );
        }

        return (
            <div className="search-menu-wrapper">
                <div className="field has-addons search-menu">
                    <ChooseCityControlAddon />
                    <InputSearchTags onUpdate={this.handleInputUpdate}/>
                    <GoButton onClick={this.handleGoButtonClick} isLoading={this.state.isLoading}/>
                </div>
                <FastSearchTags/>
            </div>
        );            
    }
}