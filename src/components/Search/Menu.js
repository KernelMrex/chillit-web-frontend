import React from 'react';

import FastSearchTags from "./FastSearchTags";
import CitySelect from "./CitySelect";
import InputSearchTags from "./InputSearchTags";
import GoButton from "./GoButton";
import { connect } from 'react-redux';
import { appendPlaces } from '../../redux/actions/search';
import { searchPlaces } from '../../requests/search';

class ConnectedMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            isError: false,
            searchQuery: "",
            chosenCity: {
                id: 1,
                title: 0,
            },
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
        this.setState({
            chosenCity: newCity,
        });
    }

    handleGoButtonClick(event) {
        this.setState({
            isLoading: true,
        });

        searchPlaces(this.state.searchQuery, this.state.chosenCity.id).then((result) => {
            this.props.appendPlaces(result);
            this.setState({
                isLoading: false,
            });
        }, (error) => {
            this.setState({
                isLoading: false,
                isError: true,
            });
            console.log("Could not request places:", error);
        });
    }

    render() {
        return (
            <div className="search-menu-wrapper">
                <div className="field has-addons search-menu">
                    <CitySelect onCityUpdate={this.handleCityUpate}/>
                    <InputSearchTags onUpdate={this.handleInputUpdate}/>
                    <GoButton onClick={this.handleGoButtonClick} isLoading={this.state.isLoading} isError={this.state.isError}/>
                </div>
                <FastSearchTags/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { search } = state;

    return {
        places: search.places,
        offset: search.offset,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        appendPlaces: places => dispatch(appendPlaces(places))
    };
}

const Menu = connect(mapStateToProps, mapDispatchToProps)(ConnectedMenu);

export default Menu;