import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";
import { connect } from 'react-redux';
import PlacesListing from './PlacesListing';

function ConnectedSearchPage(props) {
    if (!props.hasPlacesToDisplay) {
        return (
            <div>
                <section className="hero is-fullheight">
                    <div className="hero-body container">
                        <div className="is-centered search-wrapper">
                            <Logo/>
                            <Menu/>
                        </div>
                    </div>
                </section>
            </div>
        );    
    } else {
        return (
            <div>
                <section className="hero is-fullheight">
                    <div className="hero-body container">
                        <div className="is-centered search-wrapper">
                            <Logo/>
                            <Menu/>
                        </div>
                    </div>
                </section>
                <section className="listing">
                    <PlacesListing/>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    hasPlacesToDisplay: state.search.hasPlaces,
});

const SearchPage = connect(mapStateToProps)(ConnectedSearchPage);

export default SearchPage;
