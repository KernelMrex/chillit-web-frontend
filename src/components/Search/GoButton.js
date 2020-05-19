import React from 'react';

export default function GoButton(props) {
    return (
        <div className="control">
            <button className="button search-menu-item search-menu-button is-primary" onClick={props.onClick}>Искать</button>
        </div>
    );
}