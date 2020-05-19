import React from 'react';
import { PlaceCard } from './PlaceCard';
import { searchPlaces } from '../../requests/search';

export default class ListingPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            request: {
                query: "",
                cityId: 0,
            },

            places: [],
            isLoaded: false,
            isError: false,
        }
    }

    componentDidMount() {
        // Parsing url
        const url = new URL(window.location.href);
        let query = url.searchParams.get('q');
        let cityId = url.searchParams.get('cid');
        this.setState({
            request: {
                query: query,
                cityId: cityId,
            },
        });

        // Requesting backend
        searchPlaces(query, cityId).then((result) => {
            this.setState({
                places: result,
                isLoaded: true,
            });
        }, (error) => {
            this.setState({
                isLoaded: false,
                isError: true,
            });
        });
    }

    renderPlaces(places) {
        return (
            <div>
                { places.map( (place, i) => <PlaceCard place={place} key={place.id}/> ) }
            </div>
        );
    }

    render() {
        if (this.state.isError) {
            // TODO: error animation and request to realod the page manually
            return(
                <div>
                    <p>Something went wrong... Please, reload the page</p>
                </div>
            );
        } else if (!this.state.isLoaded) {
            // TODO: loading animation
            return(
                <div>
                    <p>Loading...</p>
                </div>
            );
        } else {
            // TODO: make a component for table
            return(
                <div>
                    <p>Row places:</p>
                    { this.renderPlaces(this.state.places) }
                </div>
            );
        }
    }
}

