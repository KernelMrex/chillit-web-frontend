import React from 'react';

export default function GoButton(props) {
    if (props.isError) { 
        return (
            <div className="control">
                <button className="button search-menu-item search-menu-button is-danger" onClick={props.onClick}>Искать</button>
            </div>
        );
    }

    if (props.isLoading) { 
        return (
            <div className="control">
                <button className="button search-menu-item search-menu-button is-primary is-loading" onClick={props.onClick}>Искать</button>
            </div>
        );
    }

    return (
        <div className="control">
            <button className="button search-menu-item search-menu-button is-primary" onClick={props.onClick}>Искать</button>
        </div>
    );
}