import React from 'react';
import { connect } from 'react-redux';
import { PlaceCard } from './PlaceCard';

class ConnectedListingPage extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            places: this.props.places,
        }
    }

    renderPlaces(places) {
        return (
            <div>
                { places.map( (place, i) => <PlaceCard place={place} key={place.id}/> ) }
            </div>
        );
    }

    render() {
        return(
            <div>
                <p>Row places:</p>
                { this.renderPlaces(this.state.places) }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { places: state.search.places };
}

export const ListingPage = connect(mapStateToProps)(ConnectedListingPage);
