import React from 'react';

import FastSearchTags from "./FastSearchTags";
import CitySelect from "./CitySelect";
import InputSearchTags from "./InputSearchTags";
import GoButton from "./GoButton";


import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { placesAppend } from '../../redux/actions/search';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: "",
            chosenCity: {
                id: 0,
                title: 0,
            },
            search: false,
        };    

        this.handleInputUpdate = this.handleInputUpdate.bind(this);
        this.handleGoButtonClick = this.handleGoButtonClick.bind(this);
        this.handleCityUpate = this.handleCityUpate.bind(this);
    }

    handleInputUpdate(event) {
        this.setState({
            searchQuery: event.target.value,
        });
    }

    handleCityUpate(newCity) {
        // TODO: auto determine city via geo
        this.setState({
            chosenCity: newCity,
        });
    }

    handleGoButtonClick(event) {
        this.setState({
            search: true,
        });
    }

    render() {
        if (this.state.search) {
            return (
                <Redirect push to={"/search?cid=" + this.state.chosenCity.id + "&q=" + this.state.searchQuery }/>
            );
        }

        return (
            <div className="search-menu-wrapper">
                <div className="field has-addons search-menu">
                    <CitySelect onCityUpdate={this.handleCityUpate}/>
                    <InputSearchTags onUpdate={this.handleInputUpdate}/>
                    <GoButton onClick={this.handleGoButtonClick}/>
                </div>
                <FastSearchTags/>
            </div>
        );
    }
}