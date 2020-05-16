import React from 'react';

import FastSearchTags from "./FastSearchTags";
import ChooseCityControlAddon from "./ChooseCityControlAddon";
import InputSearchTags from "./InputSearchTags";
import GoButton from "./GoButton";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInputValue: "",
            searchCityName: "",
            isLoading: false,
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
            searchCityName: event.newCityName,
        });
    }


    handleGoButtonClick(event) {
        // TODO: request string
        console.log("will search with " + this.state.searchInputValue);
        this.setState({
            isLoading: true,
        });
    }

    render() {
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