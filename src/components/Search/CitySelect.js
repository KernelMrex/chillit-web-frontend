import React from 'react';
import { getCities } from '../../requests/search';

export default class CitySelect extends React.Component { 
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            cities: new Map(),
        }

        this.handleUpdate = this.handleUpdate.bind(this);
    }

    componentDidMount() {
        getCities().then((result) => {
            let { cities } = this.state;

            result.forEach((city) => {
                cities.set(city.title, city.id);
            });

            this.setState({
                isLoaded: true,
                cities: cities,
            });

            let firstCity = cities.entries().next().value;
            this.props.onCityUpdate({
                title: firstCity[0],
                id: firstCity[1],
            });
        });
    }

    handleUpdate(event) {
        let cityTitle = event.target.value;

        this.props.onCityUpdate({
            id: this.state.cities.get(cityTitle),
            title: cityTitle,
        });
    }

    render() {
        if (this.state.isLoaded) {
            let { cities } = this.state;

            return (
                <div className="control">
                    <select className="button search-menu-item search-menu-select" onChange={this.handleUpdate}>
                        { Array.from( cities ).map(([key, value]) => <option key={ value }>{ key }</option>) }
                    </select>
                </div>
            );        
        } 

        return (
            <div className="control">
                <select className="button search-menu-item search-menu-select">
                    <option className="is-loading">Загрузка</option>
                </select>
            </div>
        );        
    }
}