import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";
import { connect } from 'react-redux';

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
                    <div>
                        <h1>HOLA!</h1>
                    </div>
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
