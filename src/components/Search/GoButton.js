import React from 'react';

export default function GoButton(props) {
    if (props.isLoading) {
        return (
            <div className="control">
                <button className="button is-loading search-menu-item search-menu-button is-primary" onClick={props.onClick}></button>
            </div>
        );    
    }

    return (
        <div className="control">
            <button className="button search-menu-item search-menu-button is-primary" onClick={props.onClick}>Искать</button>
        </div>
    );
}