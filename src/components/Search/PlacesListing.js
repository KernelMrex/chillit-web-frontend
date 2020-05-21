import React from 'react';
import { connect } from 'react-redux';
import { PlaceCard } from './PlaceCard';

class ConnectedPlacesListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            places: props.places,
        };
    }

    render() {
        const { places } = this.state;

        return (
            <div class="container is-4-desktop">
                <div className="row columns is-multiline cards-list">
                    { 
                        places.map( (place, i) => (
                            <div class="column is-4">
                                <PlaceCard place={place} key={i}/>
                            </div>
                            )
                        ) 
                    }
                </div>
            </div>
        );        
    }
}

const mapStateToProps = (state) => ({
    places: state.search.places,
});


const PlacesListing = connect(mapStateToProps)(ConnectedPlacesListing);

export default PlacesListing;