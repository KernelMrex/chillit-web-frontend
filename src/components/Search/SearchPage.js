import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";

function SearchPage(props) {
    return (
        <section className="hero background-hero-image is-fullheight">
            <div className="hero-body container">
                <div className="is-centered search-wrapper">
                    <Logo/>
                    <Menu/>
                </div>
            </div>
        </section>
    );
}

export default SearchPage;
